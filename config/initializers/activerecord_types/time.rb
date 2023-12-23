module ActiveRecord
  module ConnectionAdapters
    module PostgreSQL
      module OID # :nodoc:
        class TimeOfDay < Type::Time # :nodoc:
          def type
            :time
          end

          def serialize(value)
            return value.to_s if value.is_a?(Tod::TimeOfDay)

            super
          end

          def cast_value(value)
            return Tod::TimeOfDay.parse(value.strftime("%k:%M")) if value.is_a?(Time)
            return Tod::TimeOfDay.parse(value) if value.is_a?(String)

            value
          rescue Tod::TimeOfDay::InvalidFormat
            nil
          end
        end
      end
    end
  end
end
