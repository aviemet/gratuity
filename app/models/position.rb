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

  belongs_to :outlet

  scope :includes_associated, -> { includes([]) }
end