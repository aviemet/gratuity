class Companies::EditSerializer < ApplicationSerializer
  object_as :company

  attributes(
    :id,
    :name,
    :slug,
  )
end
