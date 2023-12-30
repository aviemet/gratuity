class CompanySerializer < ApplicationSerializer
  object_as :company

  attributes(
    :name,
    :slug,
    :created_at,
    :updated_at,
  )
end
