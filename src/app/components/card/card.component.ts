import { Component, OnInit, Input } from '@angular/core'

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	@Input() public cardTitle: string = ''
	@Input() public cardContent: string = ''

	constructor() {}

	public ngOnInit(): void {}
}
