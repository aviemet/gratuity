class Shift < ApplicationRecord

  pg_search_scope(
    :search,
    against: [:start_time, :end_time, :person, :position, :outlet],
    associated_against: {
      person: [:first_name, :middle_name, :last_name],
      position: [:name],
      outlet: [:name],
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

  scope :includes_associated, -> { includes([:person, :position]) }
end
