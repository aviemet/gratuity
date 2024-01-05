class Periods::OptionsSerializer < ApplicationSerializer
  object_as :period

  attributes(
    :id,
    :name,
  )
end
