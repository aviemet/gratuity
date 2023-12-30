class OutletSerializer < ApplicationSerializer
  object_as :outlet

  attributes(
    :name,
    :short,
    :slug,
    :created_at,
    :updated_at,
  )
end
