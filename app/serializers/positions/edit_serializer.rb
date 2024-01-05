class Positions::EditSerializer < ApplicationSerializer
  object_as :position

  attributes(
    :id,
    :name,
    :slug,
    :outlet_id,
  )
end
