// TypesFromSerializers CacheKey 1cfbe263fa36a952056c8319cc8fa6bf
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Period from '../Period'
import type ServiceTemplate from '../ServiceTemplate'

declare global {
  namespace Schema {
    interface ServicesEdit {
      id?: number
      date: string | Date
      period: Period
      service_template: ServiceTemplate
    }
  }
}
