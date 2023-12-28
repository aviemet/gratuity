FactoryBot.define do
  factory :shift do
    start_time { "2023-12-27 14:00:55" }
    end_time { "2023-12-27 14:00:55" }
    person { nil }
    position { nil }
    outlet { nil }
  end
end
