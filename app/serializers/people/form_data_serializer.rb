class People::FormDataSerializer < ApplicationSerializer
  object_as :person

  attributes(
    :first_name,
    :last_name,
    :active,
  )

  belongs_to :user, serializer: Users::FormDataSerializer, optional: true
end
