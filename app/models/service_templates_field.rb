class ServiceTemplatesField < ApplicationRecord

  pg_search_scope(
    :search,
    against: [:service_template, :field],
    associated_against: {
      service_template: [],
      field: [],
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  tracked
  resourcify

  belongs_to :service_template
  belongs_to :field

  scope :includes_associated, -> { includes([:service_template, :field]) }
end
