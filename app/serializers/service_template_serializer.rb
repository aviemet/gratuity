class ServiceTemplateSerializer < ApplicationSerializer
  object_as :service_template

  attributes(
    :name,
    :description,
    :created_at,
    :updated_at,
  )
end
