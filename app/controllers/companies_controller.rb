class CompaniesController < ApplicationController
  include Searchable

  expose :companies, -> { search(Company.includes_associated, sortable_fields) }
    expose :company, scope: ->{ Company }, find: ->(id, scope){ scope.includes_associated.find(id) }
  
  # GET /companies
  def index
    authorize companies
    render inertia: "Companies/Index", props: {
      companies: -> { companies.render(view: :index) }
    }
  end

  # GET /companies/:id
  def show
    authorize company
    render inertia: "Companies/Show", props: {
      company: -> { company.render(view: :show) }
    }
  end

  # GET /companies/new
  def new
    authorize Company.new
    render inertia: "Companies/New", props: {
      company: Company.new.render(view: :form_data)
    }
  end

  # GET /companies/:id/edit
  def edit
    authorize company
    render inertia: "Companies/Edit", props: {
      company: company.render(view: :edit)
    }
  end

  # POST /companies
  def create
    authorize Company.new
    if company.save
      redirect_to company, notice: "Company was successfully created."
    else
      redirect_to new_company_path, inertia: { errors: company.errors }
    end
  end

  # PATCH/PUT /companies/:id
  def update
    authorize company
    if company.update(company_params)
      redirect_to company, notice: "Company was successfully updated."
    else
      redirect_to edit_company_path, inertia: { errors: company.errors }
    end
  end

  # DELETE /companies/:id
  def destroy
    authorize company
    company.destroy!
    redirect_to companies_url, notice: "Company was successfully destroyed."
  end

  private

  def sortable_fields
    %w(name slug).freeze
  end

  def company_params
    params.require(:company).permit(:name, :slug)
  end
end
