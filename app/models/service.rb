class Service < ApplicationRecord

  pg_search_scope(
    :search,
    against: [:date, :period, :service_template],
    associated_against: {
      period: [],
      service_template: [],
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  tracked
  resourcify

  belongs_to :period
  belongs_to :service_template

  scope :includes_associated, -> { includes([:period, :service_template]) }
end
