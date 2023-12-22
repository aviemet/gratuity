// TypesFromSerializers CacheKey 4c3bbf1180e028baa98137194b8e0a8f
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type IUserTablePreferences from '../IUserTablePreferences'
import type IUserPreferences from '../IUserPreferences'
import type Activity from './Activity'
import type Person from './Person'
import type Role from './Role'

declare global {
  namespace Schema {
    interface User {
      id?: number
      active: boolean
      activities: Activity[]
      confirmation_sent_at?: string | Date
      confirmed_at?: string | Date
      created_at: string | Date
      current_sign_in_at?: string | Date
      current_sign_in_ip?: unknown
      email: string
      failed_attempts: number
      last_sign_in_at?: string | Date
      last_sign_in_ip?: unknown
      locked_at?: string | Date
      person: Person
      remember_created_at?: string | Date
      reset_password_sent_at?: string | Date
      roles: Role[]
      sign_in_count: number
      table_preferences: IUserTablePreferences
      unconfirmed_email?: string
      updated_at: string | Date
      user_preferences: IUserPreferences
    }
  }
}
