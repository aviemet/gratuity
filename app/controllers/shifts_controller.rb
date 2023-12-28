class ShiftsController < ApplicationController
  include Searchable

  expose :shifts, -> { search(Shift.includes_associated, sortable_fields) }
  expose :shift, scope: -> { Shift }, find: ->(id, scope) { scope.includes_associated.find(id) }

  # GET /shifts
  def index
    authorize shifts
    render inertia: "Shifts/Index", props: {
      shifts: -> { shifts.render(view: :index) }
    }
  end

  # GET /shifts/:id
  def show
    authorize shift
    render inertia: "Shifts/Show", props: {
      shift: -> { shift.render(view: :show) }
    }
  end

  # GET /shifts/new
  def new
    authorize Shift.new
    render inertia: "Shifts/New", props: {
      shift: Shift.new.render(view: :form_data)
    }
  end

  # GET /shifts/:id/edit
  def edit
    authorize shift
    render inertia: "Shifts/Edit", props: {
      shift: shift.render(view: :edit)
    }
  end

  # POST /shifts
  def create
    authorize Shift.new
    if shift.save
      redirect_to shift, notice: "Shift was successfully created."
    else
      redirect_to new_shift_path, inertia: { errors: shift.errors }
    end
  end

  # PATCH/PUT /shifts/:id
  def update
    authorize shift
    if shift.update(shift_params)
      redirect_to shift, notice: "Shift was successfully updated."
    else
      redirect_to edit_shift_path, inertia: { errors: shift.errors }
    end
  end

  # DELETE /shifts/:id
  def destroy
    authorize shift
    shift.destroy!
    redirect_to shifts_url, notice: "Shift was successfully destroyed."
  end

  private

  def sortable_fields
    %w(start_time end_time person_id position_id outlet_id).freeze
  end

  def shift_params
    params.require(:shift).permit(:start_time, :end_time, :person_id, :position_id, :outlet_id)
  end
end
