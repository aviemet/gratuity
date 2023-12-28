class OutletsController < ApplicationController
  include Searchable

  expose :outlets, -> { search(Outlet.includes_associated, sortable_fields) }
  expose :outlet, scope: -> { Outlet }, find: ->(id, scope) { scope.includes_associated.find(id) }

  # GET /outlets
  def index
    authorize outlets
    render inertia: "Outlets/Index", props: {
      outlets: -> { outlets.render(view: :index) }
    }
  end

  # GET /outlets/:id
  def show
    authorize outlet
    render inertia: "Outlets/Show", props: {
      outlet: -> { outlet.render(view: :show) }
    }
  end

  # GET /outlets/new
  def new
    authorize Outlet.new
    render inertia: "Outlets/New", props: {
      outlet: Outlet.new.render(view: :form_data)
    }
  end

  # GET /outlets/:id/edit
  def edit
    authorize outlet
    render inertia: "Outlets/Edit", props: {
      outlet: outlet.render(view: :edit)
    }
  end

  # POST /outlets
  def create
    authorize Outlet.new
    if outlet.save
      redirect_to outlet, notice: "Outlet was successfully created."
    else
      redirect_to new_outlet_path, inertia: { errors: outlet.errors }
    end
  end

  # PATCH/PUT /outlets/:id
  def update
    authorize outlet
    if outlet.update(outlet_params)
      redirect_to outlet, notice: "Outlet was successfully updated."
    else
      redirect_to edit_outlet_path, inertia: { errors: outlet.errors }
    end
  end

  # DELETE /outlets/:id
  def destroy
    authorize outlet
    outlet.destroy!
    redirect_to outlets_url, notice: "Outlet was successfully destroyed."
  end

  private

  def sortable_fields
    %w(name slug).freeze
  end

  def outlet_params
    params.require(:outlet).permit(:name, :slug)
  end
end
