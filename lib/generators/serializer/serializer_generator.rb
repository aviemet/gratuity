require 'rails/generators'
require 'rails/generators/named_base'

class SerializerGenerator < Rails::Generators::NamedBase
  source_root File.expand_path("templates", __dir__)
  argument :attributes, type: :array, default: [], banner: 'attribute attribute'

  class_option :base_only, type: :boolean, default: false, desc: "Only generate the base serializer"
  class_option :only, type: :array, default: [], desc: "Generate only the actions specified"
  class_option :except, type: :array, default: [], desc: "Don't generate the actions specified"

  def validate_options
    return unless options[:only].present? && options[:except].present?

    raise ArgumentError, "Only one of --only or --except can be used as flags"
  end

  def create_serializer
    validate_options

    template 'serializer.rb', "app/serializers/#{file_path}_serializer.rb"

    generate_named_serializers
  end

  private

  def generate_named_serializers
    views = [:edit, :form_data, :index, :show]

    if options[:only].present?
      views.select! { |view| options[:only].include?(view.to_s) }
    end

    if options[:except].present?
      views.reject! { |view| options[:except].include?(view.to_s) }
    end

    views.each do |view|
      template "#{view}_serializer.rb.erb", "app/serializers/#{file_path.pluralize}_#{view}_serializer.rb"
    end
  end
end
