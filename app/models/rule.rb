class Rule < ApplicationRecord

  pg_search_scope(
    :search,
    against: [:name, :field, :operator, :operation_value, :description],
    associated_against: {
      field: [],
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  tracked
  resourcify

  belongs_to :field

  scope :includes_associated, -> { includes([:field]) }
end
