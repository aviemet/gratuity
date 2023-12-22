class Services::IndexSerializer < ApplicationSerializer
  object_as :serializer

  attributes(
    :date,
  )

  belongs_to :period, serializer: PeriodSerializer
  belongs_to :service_template, serializer: ServiceTemplateSerializer
end
