class UserSerializer < ApplicationSerializer
  object_as :user

  attributes(
    :email,
    :reset_password_sent_at,
    :remember_created_at,
    :sign_in_count,
    :current_sign_in_at,
    :last_sign_in_at,
    :current_sign_in_ip,
    :last_sign_in_ip,
    :confirmed_at,
    :confirmation_sent_at,
    :unconfirmed_email,
    :failed_attempts,
    :locked_at,
    :active,
    :created_at,
    :updated_at,
    table_preferences: { type: "IUserTablePreferences" },
    user_preferences: { type: "IUserPreferences" },
  )

  has_many :roles, serializer: RoleSerializer
  has_many :activities, serializer: ActivitySerializer
  has_one :person, serializer: PersonSerializer
end
