import { type ISelectProps } from '../Inputs/Select'
import { type IMultiSelectProps } from '../Inputs/MultiSelect'

export { default as CurrenciesDropdown }    from './CurrenciesDropdown'
export { default as PeopleDropdown }        from './PeopleDropdown'
export { default as PeopleMultiSelect }     from './PeopleMultiSelect'

export interface IAsyncDropdown<T> extends Omit<ISelectProps, 'defaultValue'|'onBlur'> {
	name?: string
	model?: string
	label?: string
	fetchOnOpen?: string
	required?: boolean
	errorKey?: string
	initialData?: T[]
}

export interface IAsyncMultiSelect<T> extends Omit<IMultiSelectProps, 'onBlur'> {
	errorKey?: string
	initialData?: T[]
}
