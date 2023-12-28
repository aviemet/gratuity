class FieldsController < ApplicationController
  include Searchable

  expose :fields, -> { search(Field.includes_associated, sortable_fields) }
  expose :field, scope: -> { Field }, find: ->(id, scope) { scope.includes_associated.find(id) }

  # GET /fields
  def index
    authorize fields
    render inertia: "Fields/Index", props: {
      fields: -> { fields.render(view: :index) }
    }
  end

  # GET /fields/:id
  def show
    authorize field
    render inertia: "Fields/Show", props: {
      field: -> { field.render(view: :show) }
    }
  end

  # GET /fields/new
  def new
    authorize Field.new
    render inertia: "Fields/New", props: {
      field: Field.new.render(view: :form_data)
    }
  end

  # GET /fields/:id/edit
  def edit
    authorize field
    render inertia: "Fields/Edit", props: {
      field: field.render(view: :edit)
    }
  end

  # POST /fields
  def create
    authorize Field.new
    if field.save
      redirect_to field, notice: "Field was successfully created."
    else
      redirect_to new_field_path, inertia: { errors: field.errors }
    end
  end

  # PATCH/PUT /fields/:id
  def update
    authorize field
    if field.update(field_params)
      redirect_to field, notice: "Field was successfully updated."
    else
      redirect_to edit_field_path, inertia: { errors: field.errors }
    end
  end

  # DELETE /fields/:id
  def destroy
    authorize field
    field.destroy!
    redirect_to fields_url, notice: "Field was successfully destroyed."
  end

  private

  def sortable_fields
    %w(name type description).freeze
  end

  def field_params
    params.require(:field).permit(:name, :type, :description)
  end
end
