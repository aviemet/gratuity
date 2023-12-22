class PagesController < ApplicationController
  def dashboard
    activities = PublicActivity::Activity
      .includes(:owner, :trackable, :recipient)
      .order(created_at: :asc)
      .last(10)

    render inertia: "Pages/Dashboard", props: {
      activities: Activities::DashboardSerializer.render(activities)
    }
  end

  private

  def settings_params
    params.require(:settings).permit(:dark_mode)
  end
end
