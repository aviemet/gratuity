import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

type TShiftFormData = {
	shift: Schema.ShiftsFormData
}

export interface IShiftFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TShiftFormData>) => boolean|void
	shift: Schema.ShiftsFormData
}

const ShiftForm = ({ method = 'post', shift, ...props }: IShiftFormProps) => {
	return (
		<Form
			model="shift"
			data={ { shift } }
			method={ method }
			{ ...props }
		>
			<TextInput name="start_time" label="Start_time" />
			<TextInput name="end_time" label="End_time" />
			<Submit>{ shift.id ? 'Update' : 'Create' } Shift</Submit>
		</Form>
	)
}

export default ShiftForm
