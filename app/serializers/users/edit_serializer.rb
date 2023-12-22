class Users::EditSerializer < ApplicationSerializer
  object_as :user

  attributes(
    :id,
    :email,
    :active,
  )

  has_many :people, serializer: PersonSerializer
  has_one :person, serializer: PersonSerializer
end
