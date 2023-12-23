class Services::ShowSerializer < ApplicationSerializer
  object_as :service

  attributes(
    :id,
    :date,
  )

  belongs_to :period, serializer: PeriodSerializer
  belongs_to :service_template, serializer: ServiceTemplateSerializer
end
