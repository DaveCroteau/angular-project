import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { IconDefinition, faHome, faQuestion, faPen } from '@fortawesome/free-solid-svg-icons'
import { UiService } from '@services/ui/ui.service'
import { fadesidebartext } from '@animations/fadesidebartext'

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	animations: [fadesidebartext],
})
export class SidebarComponent implements OnInit, OnDestroy {
	/** Home icon. */
	public faHome: IconDefinition = faHome
	/** Posts icon. */
	public faPen: IconDefinition = faPen
	/** Question mark icon. */
	public faQuestion: IconDefinition = faQuestion

	/** Subscriptions list. */
	private _subscriptions: Subscription = new Subscription()

	/** Sidebar state.  */
	public isFullSizeSidebar: boolean = this.uiService.isFullSizeSidebar

	public constructor(private uiService: UiService) {}

	public ngOnInit(): void {
		this._subscriptions.add(this.uiService.onToggleSidebar().subscribe(result => (this.isFullSizeSidebar = result)))
	}

	public ngOnDestroy(): void {
		this._subscriptions.unsubscribe()
	}
}
