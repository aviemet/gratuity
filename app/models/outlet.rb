class Outlet < ApplicationRecord

  pg_search_scope(
    :search,
    against: [:name, :slug],
    using: {
      tsearch: { prefix: true },
      trigram: {}
    },
  )

  slug :prefer_short_name_for_slug

  def prefer_short_name_for_slug
    short || name
  end

  tracked
  resourcify

  scope :includes_associated, -> { includes([]) }

end
