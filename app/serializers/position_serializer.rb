class PositionSerializer < ApplicationSerializer
  object_as :position

  attributes(
    :name,
    :slug,
    :outlet_id,
    :created_at,
    :updated_at,
  )
end
