import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { Dictionary, Languages } from 'src/app/models/dictionary'

@Injectable({
	providedIn: 'root',
})
export class UiService {
	/** Language for the app. */
	private _lang: string = ''

	/** Control the sidebar size state.  */
	public isFullSizeSidebar: boolean = window.localStorage.getItem('sidebar') === 'closed' ? false : true
	/** Subject for sidebar size. */
	private _sidebarSubject: Subject<boolean> = new Subject<boolean>()

	constructor() {
		this.setLang()
	}

	/**
	 * Translate keys of the Dictionary in specified language.
	 * @param key Must be included in the Dictionary.
	 * @param lang Optional set to default language if omitted.
	 */
	public translate(key: string, lang: string = this._lang): string {
		if (Dictionary[key]) {
			return Languages.includes(lang) ? Dictionary[key][Languages.indexOf(lang)] : 'Oops... Language not supported'
		} else {
			return 'Oops... Unknown label'
		}
	}

	/**
	 * Sets the language of the app by priority.
	 * 1. Local storage.
	 * 2. Browser language.
	 * 3. English.
	 */
	public setLang(): void {
		const localLang: string | null = window.localStorage.getItem('lang')
		const browserLang: string = navigator.language
		const defaultLang: string = 'en'

		if (localLang && Languages.includes(localLang)) {
			this._lang = localLang
		} else if (Languages.includes(browserLang)) {
			this._lang = browserLang
		} else {
			this._lang = defaultLang
		}
	}

	/** Change sidebar size and control the subject.  */
	public toggleSidebar(): void {
		this.isFullSizeSidebar = !this.isFullSizeSidebar
		this._sidebarSubject.next(this.isFullSizeSidebar)

		// Set the state to local storage.
		const state = this.isFullSizeSidebar ? 'open' : 'closed'
		window.localStorage.setItem('sidebar', state)
	}

	/**
	 * Return the sidebar subject as an observable
	 * @returns Sidebar subject observable.
	 */
	public onToggleSidebar(): Observable<boolean> {
		return this._sidebarSubject.asObservable()
	}
}
