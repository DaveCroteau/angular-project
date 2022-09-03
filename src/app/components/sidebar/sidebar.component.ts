import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { UiService } from '../../services/ui/ui.service'
import { IconDefinition, faHome, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { fadesidebartext } from '../../animations/fadesidebartext'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	animations: [fadesidebartext],
})
export class SidebarComponent implements OnInit, OnDestroy {
	/** Home icon. */
	public faHome: IconDefinition = faHome
	/** Question mark icon. */
	public faQuestion: IconDefinition = faQuestion

	/** Subscriptions list. */
	private _subscriptions: Subscription = new Subscription()

	/** Sidebar state.  */
	public isFullSizeSidebar: boolean = this.uiService.isFullSizeSidebar

	public constructor(private uiService: UiService) {}

	ngOnInit(): void {
		this._subscriptions.add(this.uiService.onToggleSidebar().subscribe(result => (this.isFullSizeSidebar = result)))
	}

	ngOnDestroy(): void {
		this._subscriptions.unsubscribe()
	}
}
