class Position < ApplicationRecord
  pg_search_scope(
    :search,
    against: [:name, :slug],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  slug :name

  tracked
  resourcify

  scope :includes_associated, -> { includes([]) }
end
