class Outlet < ApplicationRecord

  pg_search_scope(
    :search,
    against: [:name, :slug],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  tracked
  resourcify

  scope :includes_associated, -> { includes([]) }
end
