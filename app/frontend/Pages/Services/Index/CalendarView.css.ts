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
			vertical-align: text-bottom;

			.mantine-Calendar-day {
				width: 100%;
				height: 100%;
				flex-direction: column;
				justify-content: start;
				gap: ${vars.spacing.xxs};
				padding: ${vars.spacing.xxs};
				
				.mantine-Button-root {
					width: 30px;
					height: 30px;
					padding: 0;
					border-radius: 100%;
				}

				.mantine-Badge-root {
					width: 100%;
				}
			}
		}
	}
`
