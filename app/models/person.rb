class Person < ApplicationRecord
  before_save :normalize_names

  multisearchable(
    against: [:first_name, :last_name],
    additional_attributes: ->(record) { { label: record.full_name } },
  )

  pg_search_scope(
    :search,
    against: [:first_name, :middle_name, :last_name, :preferred_name],
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
  belongs_to :default_position, class_name: "Position", optional: true

  has_many :shifts, dependent: :destroy
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

  private

  def normalize_names
    parsed_name = Nameable::Latin.new.parse("#{first_name} #{self&.middle_name} #{self.last_name}")
    self.first_name = parsed_name.first
    self.middle_name = parsed_name.middle
    self.last_name = parsed_name.last
  end
end
