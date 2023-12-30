class Shifts::ShowSerializer < ApplicationSerializer
  object_as :shift

  attributes(
    :id,
    :start_time,
    :end_time,
  )

  belongs_to :person, serializer: PersonSerializer
  belongs_to :position, serializer: PositionSerializer
end
