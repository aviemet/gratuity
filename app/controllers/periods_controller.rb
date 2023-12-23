class PeriodsController < ApplicationController
  include Searchable

  expose :periods, -> { search(Period.includes_associated, sortable_fields) }
  expose :period, scope: ->{ Period }, find: ->(id, scope){ scope.includes_associated.find(id) }

  # GET /periods
  def index
    authorize periods
    render inertia: "Periods/Index", props: {
      periods: -> { periods.render(view: :index) }
    }
  end

  # GET /periods/:id
  def show
    authorize period
    render inertia: "Periods/Show", props: {
      period: -> { period.render(view: :show) }
    }
  end

  # GET /periods/new
  def new
    authorize Period.new
    render inertia: "Periods/New", props: {
      period: Period.new.render(view: :form_data)
    }
  end

  # GET /periods/:id/edit
  def edit
    authorize period
    render inertia: "Periods/Edit", props: {
      period: period.render(view: :edit)
    }
  end

  # POST /periods
  def create
    authorize Period.new
    if period.save
      redirect_to period, notice: "Period was successfully created."
    else
      redirect_to new_period_path, inertia: { errors: period.errors }
    end
  end

  # PATCH/PUT /periods/:id
  def update
    authorize period
    if period.update(period_params)
      redirect_to period, notice: "Period was successfully updated."
    else
      redirect_to edit_period_path, inertia: { errors: period.errors }
    end
  end

  # DELETE /periods/:id
  def destroy
    authorize period
    period.destroy!
    redirect_to periods_url, notice: "Period was successfully destroyed."
  end

  private

  def sortable_fields
    %w(name start_time end_time).freeze
  end

  def period_params
    params.require(:period).permit(:name, :start_time, :end_time)
  end
end
