class ServicesPeriodsController < ApplicationController
  include Searchable

  expose :services_periods, -> { search(ServicesPeriod.includes_associated, sortable_fields) }
  expose :services_period, scope: ->{ ServicesPeriod }, find: ->(id, scope){ scope.includes_associated.find(id) }

  # GET /services_periods
  def index
    authorize services_periods
    render inertia: "ServicesPeriods/Index", props: {
      services_periods: -> { services_periods.render(view: :index) }
    }
  end

  # GET /services_periods/:id
  def show
    authorize services_period
    render inertia: "ServicesPeriods/Show", props: {
      services_period: -> { services_period.render(view: :show) }
    }
  end

  # GET /services_periods/new
  def new
    authorize ServicesPeriod.new
    render inertia: "ServicesPeriods/New", props: {
      services_period: ServicesPeriod.new.render(view: :form_data)
    }
  end

  # GET /services_periods/:id/edit
  def edit
    authorize services_period
    render inertia: "ServicesPeriods/Edit", props: {
      services_period: services_period.render(view: :edit)
    }
  end

  # POST /services_periods
  def create
    authorize ServicesPeriod.new
    if services_period.save
      redirect_to services_period, notice: "Services period was successfully created."
    else
      redirect_to new_services_period_path, inertia: { errors: services_period.errors }
    end
  end

  # PATCH/PUT /services_periods/:id
  def update
    authorize services_period
    if services_period.update(services_period_params)
      redirect_to services_period, notice: "Services period was successfully updated."
    else
      redirect_to edit_services_period_path, inertia: { errors: services_period.errors }
    end
  end

  # DELETE /services_periods/:id
  def destroy
    authorize services_period
    services_period.destroy!
    redirect_to services_periods_url, notice: "Services period was successfully destroyed."
  end

  private

  def sortable_fields
    %w(service_id period_id).freeze
  end

  def services_period_params
    params.require(:services_period).permit(:service_id, :period_id)
  end
end
