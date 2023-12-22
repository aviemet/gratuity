class Period < ApplicationRecord

  pg_search_scope(
    :search,
    against: [:name, :start_time, :end_time],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  tracked
  resourcify

  scope :includes_associated, -> { includes([]) }
end
