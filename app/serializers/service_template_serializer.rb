class ServiceTemplateSerializer < ApplicationSerializer
  object_as :service_template

  attributes(
    :name,
    :description,
  )
end
