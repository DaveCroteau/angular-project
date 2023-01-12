import { Component, OnInit } from '@angular/core'
import { UiService } from '@services/ui/ui.service'

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
	public constructor(private uiService: UiService) {}

	public ngOnInit(): void {}

	/** Navigates back from browser history. */
	public onBack(): void {
		this.uiService.onBack()
	}
}
