class Companies::FormDataSerializer < ApplicationSerializer
  object_as :company

  attributes(
    :name,
    :slug,
  )
end
