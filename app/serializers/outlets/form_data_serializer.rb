class Outlets::FormDataSerializer < ApplicationSerializer
  object_as :outlet

  attributes(
    :name,
    :short,
    :slug,
  )
end
