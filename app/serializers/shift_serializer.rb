class ShiftSerializer < ApplicationSerializer
  object_as :shift

  attributes(
    :start_time,
    :end_time,
    :created_at,
    :updated_at,
  )

  belongs_to :person, serializer: PersonSerializer
  belongs_to :position, serializer: PositionSerializer
end
