class Companies::ShowSerializer < ApplicationSerializer
  object_as :company

  attributes(
    :id,
    :name,
    :slug,
    :created_at,
    :updated_at,
  )
end
