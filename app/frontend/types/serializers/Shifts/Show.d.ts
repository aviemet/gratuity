// TypesFromSerializers CacheKey 6c39739ad6c34d0609a198e365b0ac0f
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Person from '../Person'
import type Position from '../Position'

declare global {
  namespace Schema {
    interface ShiftsShow {
      id: number
      end_time?: string | Date
      person: Person
      position: Position
      start_time?: string | Date
    }
  }
}
