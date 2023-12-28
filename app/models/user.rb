class User < ApplicationRecord
  multisearchable(
    against: [:email],
    additional_attributes: ->(record) { { label: record.email } },
  )

  tracked except: [:reset_password_token, :remember_created_at, :sign_in_count, :last_sign_in_at, :last_sign_in_ip, :confirmation_token, :confirmed_at, :confirmation_sent_at, :unconfirmed_email, :unlock_token]
  resourcify
  rolify

  # Include default devise modules. Others available are: , :omniauthable, :timeoutable,
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :confirmable, :lockable, :trackable, :invitable

  has_one :person, dependent: :nullify do
    self.people.joins(:owner)
  end

  # store_accessor :table_preferences
  store_accessor :user_preferences, :dark_mode

  validates :email, presence: true, uniqueness: true
  validates :email, length: { maximum: 255 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  password_complexity_regex = /\A(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,70}\z/
  validates :password, format: { with: password_complexity_regex }, on: [:create, :update], confirmation: true, if: :password
  # validates :password, presence: true, if: "id.nil?"

  before_save :coerce_json

  # accepts_nested_attributes_for :person

  # jsonb_accessor :table_preferences, hide: :hash

  scope :includes_associated, -> { includes([:people, :companies]) }

  # Rows page for pagination
  def limit(model)
    self.table_preferences&.[](model.to_s)&.[]('limit')
  end

  private

  def coerce_json
    self.dark_mode = ActiveModel::Type::Boolean.new.cast(self.dark_mode) if self.dark_mode
  end
end
