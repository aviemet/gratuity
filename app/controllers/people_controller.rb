class PeopleController < ApplicationController
  include Searchable

  expose :people, -> { search(People.includes_associated, sortable_fields) }
  expose :person, scope: -> { People }, find: ->(id, scope) { scope.includes_associated.find(id) }

  # GET /people
  def index
    authorize people

    paginated_people = people.page(params[:page] || 1).per(current_user.limit(:people))

    render inertia: "People/Index", props: {
      people: paginated_people.render(view: :index),
      pagination: -> {
        {
          count: people.count,
          **pagination_data(paginated_people)
        }
      }
    }
  end

  # GET /people/1
  def show
    authorize person

    render inertia: "People/Show", props: {
      person: person.render(view: :show)
    }
  end

  # GET /people/new
  def new
    authorize Person

    render inertia: "People/New", props: {
      person: People::FormDataSerializer.render(Person::AsCreate.new),
    }
  end

  # GET /people/1/edit
  def edit
    authorize person

    render inertia: "People/Edit", props: {
      person: person.render(view: :edit),
    }
  end

  # POST /people
  def create
    authorize Person
    person = Person.new

    if person.save
      redirect_to person, notice: 'Person was successfully created'
    else
      redirect_to new_person_path, inertia: { errors: person.errors }
    end
  end

  # PATCH/PUT /people/1
  def update
    authorize person

    if person.update
      redirect_to person, notice: 'Person was successfully updated'
    else
      redirect_to edit_person_path, inertia: { errors: person.errors }
    end
  end

  # DELETE /people/1
  def destroy
    authorize person

    person.destroy
    redirect_to people_url, notice: 'Person was successfully destroyed.'
  end

  private

  def sortable_fields
    %w(first_name last_name).freeze
  end

  def person_params
    params.require(:person).permit(
      :id, :first_name, :last_name, :active,
      user_attributes: [:id, :email, :password, :check_password, :table_preferences, :user_preferences, :active],
    )
  end
end
