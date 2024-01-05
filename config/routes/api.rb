namespace :api do
  resources :users, only: [:create, :update]
  patch "users/:id/update_table_preferences" => "users#update_table_preferences", as: :update_table_preferences
  patch "users/:id/update_user_preferences" => "users#update_user_preferences", as: :update_user_preferences

  resources :people, except: [:edit, :new, :create]

  scope :options do
    [:people, :services, :periods, :companies, :outlets, :rules, :shifts, :positions].each do |model|
      get model.to_s => "#{model}#options", as: "#{model}_options"
    end
  end
end
