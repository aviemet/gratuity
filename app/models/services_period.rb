class ServicesPeriod < ApplicationRecord

  pg_search_scope(
    :search,
    against: [:service, :period],
    associated_against: {
      service: [],
      period: [],
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  tracked
  resourcify

  belongs_to :service
  belongs_to :period

  scope :includes_associated, -> { includes([:service, :period]) }
end
