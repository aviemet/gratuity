class Periods::IndexSerializer < ApplicationSerializer
  object_as :period

  attributes(
    :id,
    :name,
    :start_time,
    :end_time,
  )
end
