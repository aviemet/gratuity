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

  validates :name, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true

  scope :includes_associated, -> { includes([]) }
end
