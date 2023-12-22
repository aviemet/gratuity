class People::EditSerializer < ApplicationSerializer
  object_as :person

  attributes(
    :id,
    :first_name,
    :last_name,
    :active,
  )

  type :string
  def name
    "#{person.first_name} #{person.last_name}".strip
  end

  belongs_to :user, serializer: Users::FormDataSerializer, optional: true
end
