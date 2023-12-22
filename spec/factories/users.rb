FactoryBot.define do
  factory :user do
    password { '$trongPassw0rd!' }
    email { Faker::Internet.unique.email }

    transient do
      confirmed { true }
    end

    person { association :person }

    after(:build) do |user, options|
      user.add_role :admin

      user.confirm if options.confirmed
    end

  end
end
