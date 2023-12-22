class ServicesController < ApplicationController
  include Searchable

  expose :services, -> { search(services.includes_associated, sortable_fields) }
    expose :service, scope: ->{ services }, find: ->(id, scope){ scope.includes_associated.find(id) }
  
  # GET /services
  def index
    authorize services
    render inertia: "Service/Index", props: {
      services: -> { services.render(view: :index) }
    }
  end

  # GET /services/:id
  def show
    authorize service
    render inertia: "Service/Show", props: {
      service: -> { service.render(view: :show) }
    }
  end

  # GET /services/new
  def new
    authorize Service.new
    render inertia: "Service/New", props: {
      service: Service.new.render(view: :form_data)
    }
  end

  # GET /services/:id/edit
  def edit
    authorize service
    render inertia: "Service/Edit", props: {
      service: service.render(view: :edit)
    }
  end

  # POST /services
  def create
    authorize Service.new
    if service.save
      redirect_to service, notice: "Service was successfully created."
    else
      redirect_to new_service_path, inertia: { errors: service.errors }
    end
  end

  # PATCH/PUT /services/:id
  def update
    authorize service
    if service.update(service_params)
      redirect_to service, notice: "Service was successfully updated."
    else
      redirect_to edit_service_path, inertia: { errors: service.errors }
    end
  end

  # DELETE /services/:id
  def destroy
    authorize service
    service.destroy!
    redirect_to services_url, notice: "Service was successfully destroyed."
  end

  private

  def sortable_fields
    %w(date period_id service_template_id).freeze
  end

  def service_params
    params.require(:service).permit(:date, :period_id, :service_template_id)
  end
end
