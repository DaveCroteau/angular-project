import { Injectable, OnDestroy } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { Location } from '@angular/common'
import { Observable, Subject, Subscription, filter } from 'rxjs'
import { Dictionary, Languages } from 'src/app/models/dictionary'

@Injectable({
  providedIn: 'root',
})
export class UiService implements OnDestroy {
  /** Language for the app. */
  private _lang: string = ''

  /** Holds the subscriptions */
  private _subscriptions: Subscription = new Subscription()

  /** Navigation counter */
  private _navigationCounter: number = 0

  /** Control the sidebar size state.  */
  public isFullSizeSidebar: boolean = window.localStorage.getItem('sidebar') === 'closed' ? false : true
  /** Subject for sidebar size. */
  private _sidebarSubject: Subject<boolean> = new Subject<boolean>()

  public constructor(private _router: Router, private _location: Location) {
    this.setLang()
    this.startNavigationCounter()
  }

  /** Destroy and Unsubscribe */
  public ngOnDestroy(): void {
    this._subscriptions.unsubscribe()
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

  /** Subscribe to the router events update the route counter. */
  private startNavigationCounter(): void {
    this._subscriptions.add(
      this._router.events.pipe(filter((e: any) => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => this._navigationCounter++),
    )
  }

  /** Navigates back into the history */
  public onBack(): void {
    this._navigationCounter--
    if (this._navigationCounter) {
      this._location.back()
      this._navigationCounter--
    } else {
      this._router.navigateByUrl('')
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
