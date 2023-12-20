Rails.application.routes.draw do
  # CONCERNS #

  # ROOT PATH #

  root "pages#dashboard"

  # STATIC PAGES #

  get "dashboard" => "pages#dashboard", as: :dashboard

  # SETTINGS PAGES #

  # DEVISE PATHS #

  devise_for :users, controllers: {
    sessions: "users/sessions"
  },
  path: "/",
  path_names: {
    sign_in: "login",
    sign_out: "logout"
  },
  only: [:sessions]

  devise_for :users, controllers: {
    passwords: "users/passwords",
    registrations: "users/registrations",
    unlocks: "users/unlocks",
    confirmations: "users/confirmations",
    # omniauth_callbacks: "users/omniauth_callbacks",
  },
  path_names: {
    sign_up: :register,
  },
  skip: [:sessions]

  get "users/complete_registration" => "users#complete_registration", as: :complete_registration
  post "users/complete_registration" => "users#save_complete_registration", as: :save_complete_registration

  # Async route to set active company
  # TODO: Whatever uses this should opt to use /api/users/update instead
  patch "users/:id/set_active_company/:company_id" => "users#set_active_company", as: :set_active_company

  # RESOURCEFUL PATHS #

  draw(:api)
end
