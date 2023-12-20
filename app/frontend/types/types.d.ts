import React from 'react'
import { type ISelectProps } from '@/Components/Inputs/Select'
import { type SelectProps, type InputProps } from '@mantine/core'

declare global {
	type HTTPVerb = 'post' | 'put' | 'get' | 'patch' | 'delete'

	type TInputType = 'button'|'checkbox'|'color'|'currency'|'date'|'datetime-local'|'email'|'file'|'hidden'|'image'|'month'|'number'|'password'|'radio'|'range'|'reset'|'search'|'select'|'submit'|'tel'|'text'|'textarea'|'time'|'url'

	// type TPermissions = {
	// 	index?: boolean
	// 	show?: boolean
	// 	create?: boolean
	// 	update?: boolean
	// 	delete?: boolean
	// 	checkout?: boolean
	// 	checkin?: boolean
	// }

	type PaginatedModel<T> = {
		data: T
		pagination: Schema.Pagination
	}

	type FlashMessage = Record<'success' | 'alert' | 'info' | 'warning', string>

	// interface PersonGroupPermissions extends Schema.PersonGroup {
	// 	permissions: {
	// 		company: {
	// 			admin?: boolean
	// 		}
	// 		item: TPermissions | []
	// 		accessory: TPermissions | []
	// 		component: TPermissions | []
	// 		consumable: TPermissions | []
	// 		license: TPermissions | []
	// 		network: TPermissions | []
	// 		vendor: TPermissions | []
	// 		contract: TPermissions | []
	// 		category: TPermissions | []
	// 		model: TPermissions | []
	// 		manufacturer: TPermissions | []
	// 		department: TPermissions | []
	// 		location: TPermissions | []
	// 		person: TPermissions | []
	// 		user: TPermissions | []
	// 	}
	// }
	// }

}
