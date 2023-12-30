class ServiceSerializer < ApplicationSerializer
  object_as :service

  attributes(
    :date,
    :created_at,
    :updated_at,
  )

  belongs_to :period, serializer: PeriodSerializer
  belongs_to :service_template, serializer: ServiceTemplateSerializer
end
