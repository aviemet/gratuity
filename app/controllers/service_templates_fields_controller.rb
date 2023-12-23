class ServiceTemplatesFieldsController < ApplicationController
  include Searchable

  expose :service_templates_fields, -> { search(ServiceTemplatesField.includes_associated, sortable_fields) }
  expose :service_templates_field, scope: ->{ ServiceTemplatesField }, find: ->(id, scope){ scope.includes_associated.find(id) }

  # GET /service_templates_fields
  def index
    authorize service_templates_fields
    render inertia: "ServiceTemplatesFields/Index", props: {
      service_templates_fields: -> { service_templates_fields.render(view: :index) }
    }
  end

  # GET /service_templates_fields/:id
  def show
    authorize service_templates_field
    render inertia: "ServiceTemplatesFields/Show", props: {
      service_templates_field: -> { service_templates_field.render(view: :show) }
    }
  end

  # GET /service_templates_fields/new
  def new
    authorize ServiceTemplatesField.new
    render inertia: "ServiceTemplatesFields/New", props: {
      service_templates_field: ServiceTemplatesField.new.render(view: :form_data)
    }
  end

  # GET /service_templates_fields/:id/edit
  def edit
    authorize service_templates_field
    render inertia: "ServiceTemplatesFields/Edit", props: {
      service_templates_field: service_templates_field.render(view: :edit)
    }
  end

  # POST /service_templates_fields
  def create
    authorize ServiceTemplatesField.new
    if service_templates_field.save
      redirect_to service_templates_field, notice: "Service templates field was successfully created."
    else
      redirect_to new_service_templates_field_path, inertia: { errors: service_templates_field.errors }
    end
  end

  # PATCH/PUT /service_templates_fields/:id
  def update
    authorize service_templates_field
    if service_templates_field.update(service_templates_field_params)
      redirect_to service_templates_field, notice: "Service templates field was successfully updated."
    else
      redirect_to edit_service_templates_field_path, inertia: { errors: service_templates_field.errors }
    end
  end

  # DELETE /service_templates_fields/:id
  def destroy
    authorize service_templates_field
    service_templates_field.destroy!
    redirect_to service_templates_fields_url, notice: "Service templates field was successfully destroyed."
  end

  private

  def sortable_fields
    %w(service_template_id field_id).freeze
  end

  def service_templates_field_params
    params.require(:service_templates_field).permit(:service_template_id, :field_id)
  end
end
