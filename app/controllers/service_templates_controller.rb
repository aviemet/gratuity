class ServiceTemplatesController < ApplicationController
  include Searchable

  expose :service_templates, -> { search(service_templates.includes_associated, sortable_fields) }
    expose :service_template, scope: ->{ service_templates }, find: ->(id, scope){ scope.includes_associated.find(id) }
  
  # GET /service_templates
  def index
    authorize service_templates
    render inertia: "ServiceTemplate/Index", props: {
      service_templates: -> { service_templates.render(view: :index) }
    }
  end

  # GET /service_templates/:id
  def show
    authorize service_template
    render inertia: "ServiceTemplate/Show", props: {
      service_template: -> { service_template.render(view: :show) }
    }
  end

  # GET /service_templates/new
  def new
    authorize ServiceTemplate.new
    render inertia: "ServiceTemplate/New", props: {
      service_template: ServiceTemplate.new.render(view: :form_data)
    }
  end

  # GET /service_templates/:id/edit
  def edit
    authorize service_template
    render inertia: "ServiceTemplate/Edit", props: {
      service_template: service_template.render(view: :edit)
    }
  end

  # POST /service_templates
  def create
    authorize ServiceTemplate.new
    if service_template.save
      redirect_to service_template, notice: "Service template was successfully created."
    else
      redirect_to new_service_template_path, inertia: { errors: service_template.errors }
    end
  end

  # PATCH/PUT /service_templates/:id
  def update
    authorize service_template
    if service_template.update(service_template_params)
      redirect_to service_template, notice: "Service template was successfully updated."
    else
      redirect_to edit_service_template_path, inertia: { errors: service_template.errors }
    end
  end

  # DELETE /service_templates/:id
  def destroy
    authorize service_template
    service_template.destroy!
    redirect_to service_templates_url, notice: "Service template was successfully destroyed."
  end

  private

  def sortable_fields
    %w(name description).freeze
  end

  def service_template_params
    params.require(:service_template).permit(:name, :description)
  end
end
