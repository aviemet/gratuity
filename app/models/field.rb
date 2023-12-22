class Field < ApplicationRecord

  pg_search_scope(
    :search,
    against: [:name, :type, :description],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  tracked
  resourcify

  scope :includes_associated, -> { includes([]) }
end
