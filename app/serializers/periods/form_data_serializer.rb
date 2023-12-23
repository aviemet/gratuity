class Periods::FormDataSerializer < ApplicationSerializer
  object_as :period

  attributes(
    :name,
    :start_time,
    :end_time,
  )
end
