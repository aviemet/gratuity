class Users::FormDataSerializer < ApplicationSerializer
  object_as :user

  attributes(
    :email,
    :active,
    :password,
    :password_confirmation,
  )
end
