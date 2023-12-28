class PersonGroupsController < ApplicationController
  expose :person_groups, -> { PersonGroups.includes_associated }
  expose :person_group, id: -> { params[:slug] }, scope: -> { PersonGroups.includes_associated }, find_by: :slug

  # GET /person_group
  def index
    authorize person_groups

    render inertia: "PersonGroups/Index", props: {
      person_groups: -> { person_groups.render(view: :index) },
    }
  end

  # GET /person_group/:slug
  def show
    authorize person_group

    render inertia: "PersonGroups/Show", props: {
      person_group: -> { person_group.render(view: :show) },
      people: InertiaRails.lazy(-> {
        paginated_people = person_group.people.includes_associated.page(params[:page] || 1)
        {
          data: paginated_people.render,
          pagination: {
            count: person_group.people.size,
            **pagination_data(paginated_people)
          }
        }
      }),
    }
  end

  # GET /person_group/new
  def new
    authorize PersonGroup

    render inertia: "PersonGroups/New"
  end

  # GET /person_group/:slug/edit
  def edit
    render inertia: "PersonGroups/Edit", props: {
      person_group: person_group.render(view: :edit),
    }
  end

  # POST /person_group
  def create
    authorize PersonGroup

    person_group = PersonGroup.new(person_group_params.except(:permissions))
    person_group.save

    if person_group.persisted?
      person_group.set_permissions(person_group_params[:permissions])

      redirect_to person_group, notice: 'Group was successfully created'
    else
      redirect_to new_person_group_path, inertia: { errors: person_group.errors }
    end
  end

  # PATCH/PUT /person_group/:slug
  def update
    authorize person_group

    if person_group.update(person_group_params.except(:permissions))
      person_group.set_permissions(person_group_params[:permissions])

      redirect_to person_group, notice: 'Group was successfully updated'
    else
      redirect_to edit_person_group_path, inertia: { errors: person_group.errors }
    end
  end

  # DELETE /person_group/:slug
  def destroy
    authorize person_group

    person_group.destroy
    redirect_to person_groups_url, notice: 'Group was successfully destroyed.'
  end

  private

  def person_group_params
    params.require(:person_group).permit(
      :name, :description, permissions: [
        person: [:index, :show, :create, :update, :delete],
        user: [:index, :show, :create, :update, :delete],
      ],
    )
  end
end
