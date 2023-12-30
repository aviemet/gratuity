class Outlets::IndexSerializer < ApplicationSerializer
  object_as :outlet

  attributes(
    :id,
    :name,
    :short,
    :slug,
    :created_at,
    :updated_at,
  )
end
