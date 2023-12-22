class PersonSerializer < ApplicationSerializer
  object_as :person

  attributes(
    :first_name,
    :last_name,
    :active,
    :user_id,
    :created_at,
    :updated_at,
  )

  type :string
  def name
    "#{person.first_name} #{person.last_name}".strip
  end
end
