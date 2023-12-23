class Periods::ShowSerializer < ApplicationSerializer
  object_as :period

  attributes(
    :id,
    :name,
    :start_time,
    :end_time,
  )
end
