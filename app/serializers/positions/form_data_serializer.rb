class Positions::FormDataSerializer < ApplicationSerializer
  object_as :position

  attributes(
    :name,
    :slug,
    :outlet_id,
  )
end
