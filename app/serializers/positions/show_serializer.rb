class Positions::ShowSerializer < ApplicationSerializer
  object_as :position

  attributes(
    :id,
    :name,
    :slug,
    :outlet_id,
    :created_at,
    :updated_at,
  )
end
