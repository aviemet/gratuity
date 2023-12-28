class Shift < ApplicationRecord

  pg_search_scope(
    :search,
    against: [:start_time, :end_time, :person, :position, :outlet],
    associated_against: {
      person: [], position: [], outlet: [],
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  tracked
  resourcify

  belongs_to :person
  belongs_to :position
  belongs_to :outlet

  scope :includes_associated, -> { includes([:person, :position, :outlet]) }
end
