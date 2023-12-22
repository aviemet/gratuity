// TypesFromSerializers CacheKey 02ce8959cead2651405e5b975a26abc7
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type UsersBasic from './Users/Basic'
import type PeopleBasic from './People/Basic'

declare global {
  namespace Schema {
    interface Activity {
      id: number
      created_at: string | Date
      key?: string
      owner: UsersBasic
      owner_id?: number
      owner_type?: string
      parameters: Record<string, string>
      person: PeopleBasic
      recipient_id?: number
      recipient_type?: string
      trackable_id?: number
      trackable_type?: string
      updated_at: string | Date
    }
  }
}