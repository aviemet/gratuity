class RulesController < ApplicationController
  include Searchable

  expose :rules, -> { search(rules.includes_associated, sortable_fields) }
    expose :rule, scope: ->{ rules }, find: ->(id, scope){ scope.includes_associated.find(id) }
  
  # GET /rules
  def index
    authorize rules
    render inertia: "Rule/Index", props: {
      rules: -> { rules.render(view: :index) }
    }
  end

  # GET /rules/:id
  def show
    authorize rule
    render inertia: "Rule/Show", props: {
      rule: -> { rule.render(view: :show) }
    }
  end

  # GET /rules/new
  def new
    authorize Rule.new
    render inertia: "Rule/New", props: {
      rule: Rule.new.render(view: :form_data)
    }
  end

  # GET /rules/:id/edit
  def edit
    authorize rule
    render inertia: "Rule/Edit", props: {
      rule: rule.render(view: :edit)
    }
  end

  # POST /rules
  def create
    authorize Rule.new
    if rule.save
      redirect_to rule, notice: "Rule was successfully created."
    else
      redirect_to new_rule_path, inertia: { errors: rule.errors }
    end
  end

  # PATCH/PUT /rules/:id
  def update
    authorize rule
    if rule.update(rule_params)
      redirect_to rule, notice: "Rule was successfully updated."
    else
      redirect_to edit_rule_path, inertia: { errors: rule.errors }
    end
  end

  # DELETE /rules/:id
  def destroy
    authorize rule
    rule.destroy!
    redirect_to rules_url, notice: "Rule was successfully destroyed."
  end

  private

  def sortable_fields
    %w(name field_id operator operation_value description).freeze
  end

  def rule_params
    params.require(:rule).permit(:name, :field_id, :operator, :operation_value, :description)
  end
end
