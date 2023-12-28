class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  include Renderable

  include PublicActivity::Model
  tracked owner: proc { |controller, _model| controller&.current_user || nil }

  include PgSearch::Model
  ##
  # Include a default search scope for overriding
  ##
  pg_search_scope(
    :search,
    against: [],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  ##
  # Dynamic search scope for terms searching against specific fields
  ##
  def self.dynamic_search(query, field)
    search_scope_name = :"#{self.name.underscore}_#{field}_dynamic_search"

    pg_search_scope(
      search_scope_name,
      against: field,
      using: {
        tsearch: { prefix: true },
        trigram: {}
      },
      ignoring: :accents,
    )

    self.merge(self.send(search_scope_name, query))
  end
end
