if Rails.env.development?
  if User.count == 0
    user = User.create!({
      email: "aviemet@gmail.com",
      password: "Complex1!",
      confirmed_at: Date.new,
    })

    Person.create!({
      first_name: "Avram",
      last_name: "Walden",
      user:,
    })

    user.add_role :super_admin
  end

  if Outlet.count == 0
    Outlet.create(name: "717B")
  end

  if Period.count == 0
    Period.create([
      {
        name: 'Breakfast',
        start_time: Time.zone.parse("7:00:00"),
        end_time: Time.zone.parse("13:00:00")
      },
      {
        name: 'Brunch',
        start_time: Time.zone.parse("07:00:00"),
        end_time: Time.zone.parse("15:00:00")
      },
      {
        name: 'Lunch',
        start_time: Time.zone.parse("11:00:00"),
        end_time: Time.zone.parse("16:00:00")
      },
      {
        name: 'Dinner',
        start_time: Time.zone.parse("16:00:00"),
        end_time: Time.zone.parse("23:00:00")
      },
    ])
  end

  if Service.count == 0
    template = ServiceTemplate.create({
      name: "Restaurant Tips Template"
    })

    periods = Period.all

    periods.each do |period|
      Service.create({
        date: Time.zone.today,
        period: period,
        service_template: template,
      })
    end
  end
end
