require 'active_support/concern'

module Inertia::Auth
  extend ActiveSupport::Concern

  included do
    inertia_share(
      auth: lambda {
              {
                user: current_user&.render,
                form_authenticity_token:,
              }
            },
    )
  end
end
