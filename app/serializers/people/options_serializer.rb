class People::OptionsSerializer < ApplicationSerializer
  object_as :person

  type :string
  def name
    "#{person.first_name} #{person.last_name}".strip
  end
end
