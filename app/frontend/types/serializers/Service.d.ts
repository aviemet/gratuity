// TypesFromSerializers CacheKey 7b427681ccacc1ff4f6699bc93f4e6c7
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Period from './Period'
import type ServiceTemplate from './ServiceTemplate'

declare global {
  namespace Schema {
    interface Service {
      id?: number
      date?: string | Date
      period: Period
      service_template: ServiceTemplate
    }
  }
}