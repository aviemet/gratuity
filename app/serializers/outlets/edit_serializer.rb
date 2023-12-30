class Outlets::EditSerializer < ApplicationSerializer
  object_as :outlet

  attributes(
    :id,
    :name,
    :short,
    :slug,
  )
end
