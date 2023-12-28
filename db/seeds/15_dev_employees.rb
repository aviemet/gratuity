if Rails.env.development?
  if Position.count == 0
    Position.create(
      ["Server", "Bartender", "Busser", "Runner", "Sommelier", "Barback", "Barista"]
      .map{ |_post| { name: pos } },
    )

    server = Position.find_by(slug: "server")
    Person.create(
      [
        {
          last_name: "SAMBU",
          first_name: "MICHAEL",
          default_position: server,
        },
        {
          last_name: "PACHECO",
          first_name: "JOEY",
          default_position: server,
        },
        {
          last_name: "PACHECO",
          first_name: "JOEY",
          default_position: server,
        },
        {
          last_name: "DO ROSARIO",
          first_name: "RENATA",
          default_position: server,
        },
        {
          last_name: "MEJIA",
          first_name: "SANDRA",
          default_position: server,
        },
        {
          last_name: "LOPEZ",
          first_name: "CARLOS",
          default_position: server,
        },
        {
          last_name: "BLANCHE",
          first_name: "JOSEY",
          default_position: server,
        },
        {
          last_name: "YUCE",
          first_name: "EMRE",
          default_position: server,
        },
        {
          last_name: "RODRIGUEZ",
          first_name: "ARMANDO",
          default_position: server,
        },
        {
          last_name: "KARIMOVA",
          first_name: "NAGIMA",
          default_position: server,
        },
        {
          last_name: "GREEN",
          first_name: "GERALD",
          default_position: server,
        },
        {
          last_name: "KUSTOV",
          first_name: "ARTEM",
          default_position: server,
        },
        {
          last_name: "WILLIAMS",
          first_name: "JUSTIN",
          default_position: server,
        },
        {
          last_name: "TARI",
          first_name: "SHYQUERI",
          default_position: server,
        },
        {
          last_name: "MIZRAK",
          first_name: "SANI",
          default_position: server,
        },
        {
          last_name: "DO ROSARIO",
          first_name: "RENATA",
          default_position: server,
        },
        {
          last_name: "MEJIA",
          first_name: "SANDRA",
          default_position: server,
        },
        {
          last_name: "LOPEZ",
          first_name: "CARLOS",
          default_position: server,
        },
        {
          last_name: "BLANCHE",
          first_name: "JOSEY",
          default_position: server,
        },
        {
          last_name: "YUCE",
          first_name: "EMRE",
          default_position: server,
        },
        {
          last_name: "RODRIGUEZ",
          first_name: "ARMANDO",
          default_position: server,
        },
        {
          last_name: "KARIMOVA",
          first_name: "NAGIMA",
          default_position: server,
        },
        {
          last_name: "GREEN",
          first_name: "GERALD",
          default_position: server,
        },
        {
          last_name: "KUSTOV",
          first_name: "ARTEM",
          default_position: server,
        },
        {
          last_name: "WILLIAMS",
          first_name: "JUSTIN",
          default_position: server,
        },
        {
          last_name: "TARI",
          first_name: "SHYQUERI",
          default_position: server,
        },
        {
          last_name: "MIZRAK",
          first_name: "SANI",
          default_position: server,
        }
      ],
    )

    busser = Postion.find_by(slug: "busser")
    Person.create([
      {
        last_name: "NAVARRETE ",
        first_name: "YOLANDA",
        default_position: busser,
      },
      {
        last_name: "MENDOZA ",
        first_name: "ROSA",
        default_position: busser,
      },
      {
        last_name: "FLORES ",
        first_name: "ALBERTO",
        default_position: busser,
      },
      {
        last_name: "LOPEZ ",
        first_name: "KEVIN",
        default_position: busser,
      },
      {
        last_name: "PEREZ ",
        first_name: "HENRY",
        default_position: busser,
      },
      {
        last_name: "COUOH ",
        first_name: "ANGEL",
        default_position: busser,
      },
      {
        last_name: "CAMARA CHEL ",
        first_name: "NOE",
        default_position: busser,
      },
      {
        last_name: "RODRIGUEZ ",
        first_name: "RUCHI",
        default_position: busser,
      },
    ])

    runner = Position.find_by(slug: "runner")
    Person.create([
      {
        last_name: "PEREZ",
        first_name: "OSVIN",
        default_position: runner
      },
      {
        last_name: "VILLATORO",
        first_name: "LILIANA",
        default_position: runner
      },
      {
        last_name: "MENDOZA",
        first_name: "ROSA",
        default_position: runner
      },
      {
        last_name: "TEIXEIRA",
        first_name: "JUSTIN",
        default_position: runner
      },
      {
        last_name: "NAVARRETE",
        first_name: "YOLANDA",
        default_position: runner
      },
    ])
  end

  sommelier = Position.find_by(slug: "sommelier")
  Person.create([
    {
      last_name: "NOII",
      first_name: "PAUL",
      default_position: sommelier
    },
    {
      last_name: "WHYTE",
      first_name: "JOHN",
      default_position: sommelier
    },
  ])

  bartender = Position.find_by(slug: "bartender")
  Person.create([

    {
      last_name: "DAVIS",
      first_name: "DAKOTA",
      default_position: bartender,
    },
    {
      last_name: "DONIS",
      first_name: "GUSTAVO",
      default_position: bartender,
    },
    {
      last_name: "CONZETT",
      first_name: "KEVIN",
      default_position: bartender,
    },
    {
      last_name: "DAHMANI",
      first_name: "MAX",
      default_position: bartender,
    },
    {
      last_name: "KUSTOV",
      first_name: "ARTEM",
      default_position: bartender,
    },
    {
      last_name: "VARGAS",
      first_name: "JARED",
      default_position: bartender,
    },
    {
      last_name: "WILLIAMS",
      first_name: "JUSTIN",
      default_position: bartender,
    },
    {
      last_name: "JUAREZ",
      first_name: "DIEGO",
      default_position: bartender,
    },
    {
      last_name: "OSGOOD",
      first_name: "AMANDA",
      default_position: bartender,
    },
  ])

  barback = Position.find_by(slug: "barback")
  Person.create([
    {
      last_name: "PEREZ",
      first_name: "HENRY",
      default_position: barback,
    },
    {
      last_name: "TEIXEIRA",
      first_name: "JUSTIN",
      default_position: barback,
    },
    {
      last_name: "MEDINA",
      first_name: "CARLOS",
      default_position: barback,
    }
  ])

  barista = Position.find_by(slug: "barista")
  Person.create([
    {
      last_name: "SHARKEY-JACOBY",
      first_name: "DANIEL",
      default_position: barista,
    },
    {
      last_name: "TEIXEIRA",
      first_name: "JUSTIN",
      default_position: barista,
    },
    {
      last_name: "ROSENTHAL",
      first_name: "ISABELLA",
      default_position: barista,
    },
    {
      last_name: "MULIMINE",
      first_name: "RABSON",
      default_position: barista,
    },
  ])
end
