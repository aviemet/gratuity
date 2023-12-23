import { vars, theme } from '@/lib/theme'
import { rem } from '@mantine/core'
import { css } from '@linaria/core'

export const calendar = css`
	text-align: center;

	.mantine-Calendar-calendarHeader {
		width: 100%;
	}

	table.mantine-Calendar-month {
		width: 100%;

		td.mantine-Calendar-monthCell {
			border: 1px solid #999;
			min-height: 100px;
		}
	}
`