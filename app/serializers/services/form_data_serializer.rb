class Services::FormDataSerializer < ApplicationSerializer
  object_as :service

  attributes(
    :date,
  )

  belongs_to :period, serializer: PeriodSerializer
  belongs_to :service_template, serializer: ServiceTemplateSerializer
end
