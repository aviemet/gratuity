class PositionsController < ApplicationController
  include Searchable

  expose :positions, -> { search(Position.includes_associated, sortable_fields) }
  expose :position, scope: -> { Position }, find: ->(id, scope) { scope.includes_associated.find(id) }

  # GET /positions
  def index
    authorize positions
    render inertia: "Positions/Index", props: {
      positions: -> { positions.render(view: :index) }
    }
  end

  # GET /positions/:id
  def show
    authorize position
    render inertia: "Positions/Show", props: {
      position: -> { position.render(view: :show) }
    }
  end

  # GET /positions/new
  def new
    authorize Position.new
    render inertia: "Positions/New", props: {
      position: Position.new.render(view: :form_data)
    }
  end

  # GET /positions/:id/edit
  def edit
    authorize position
    render inertia: "Positions/Edit", props: {
      position: position.render(view: :edit)
    }
  end

  # POST /positions
  def create
    authorize Position.new
    if position.save
      redirect_to position, notice: "Position was successfully created."
    else
      redirect_to new_position_path, inertia: { errors: position.errors }
    end
  end

  # PATCH/PUT /positions/:id
  def update
    authorize position
    if position.update(position_params)
      redirect_to position, notice: "Position was successfully updated."
    else
      redirect_to edit_position_path, inertia: { errors: position.errors }
    end
  end

  # DELETE /positions/:id
  def destroy
    authorize position
    position.destroy!
    redirect_to positions_url, notice: "Position was successfully destroyed."
  end

  private

  def sortable_fields
    %w(name slug).freeze
  end

  def position_params
    params.require(:position).permit(:name, :slug)
  end
end
