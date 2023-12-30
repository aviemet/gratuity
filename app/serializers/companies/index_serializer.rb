class Companies::IndexSerializer < ApplicationSerializer
  object_as :company

  attributes(
    :id,
    :name,
    :slug,
    :created_at,
    :updated_at,
  )
end
