import { trigger, style, animate, transition } from '@angular/animations'

export const fadesidebartext = trigger('fadesidebartext', [
	transition(':enter', [
		style({
			opacity: 0,
			transform: 'translate3d(-5rem, 0, 0)',
		}),
		animate(
			'0.5s 0.2s ease',
			style({
				opacity: 1,
				transform: 'translate3d(0, 0, 0)',
			}),
		),
	]),
])
