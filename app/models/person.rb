class Person < ApplicationRecord
  multisearchable(
    against: [:first_name, :last_name],
    additional_attributes: ->(record) { { label: record.full_name } },
  )

  pg_search_scope(
    :search,
    against: [:first_name, :last_name],
    associated_against: {
      user: [:email]
    },
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  tracked
  resourcify
  rolify

  belongs_to :user, optional: true

  has_many :person_group_assignments, dependent: :destroy
  has_many :groups, through: :person_group_assignments, source: :person_group

  validates :first_name, presence: true
  validates :last_name, presence: true

  accepts_nested_attributes_for :user

  delegate :to_s, to: :full_name

  scope :includes_associated, -> { includes([:user]) }

  def full_name
    "#{first_name} #{last_name}"
  end

  alias :name :full_name
end
