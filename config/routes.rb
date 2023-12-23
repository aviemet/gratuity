Rails.application.routes.draw do
  # CONCERNS #

  concern :bulk_delete do
    collection do
      delete :destroy
    end
  end

  # ROOT PATH #

  root "pages#dashboard"

  # STATIC PAGES #

  get "dashboard" => "pages#dashboard", as: :dashboard

  # SETTINGS PAGES #

  namespace :settings do
    resources :appearance, only: [:index]
    match :appearance, to: "appearance#update", via: [:put, :patch]
    resources :general
    resources :integrations
    resources :ldaps, path: :ldap, except: [:show, :new, :edit]
    patch "ldaps/:id/sync" => "ldaps#sync", as: :ldap_sync
    resources :logs
  end

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

  # RESOURCEFUL PATHS #

  resources :users
  resources :people
  resources :person_groups
  resources :service_templates_fields
  resources :services_periods
  resources :services, except: [:show]
  resources :services, param: :date, only: [:show]
  resources :service_templates
  resources :rules
  resources :fields
  resources :periods

  draw(:api)
end
