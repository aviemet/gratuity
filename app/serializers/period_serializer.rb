class PeriodSerializer < ApplicationSerializer
  object_as :period

  attributes(
    :name,
    :start_time,
    :end_time,
    :created_at,
    :updated_at,
  )
end
