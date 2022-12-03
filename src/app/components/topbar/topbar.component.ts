import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core'
import { IconDefinition, faBars, faGear } from '@fortawesome/free-solid-svg-icons'
import { UiService } from '@services/ui/ui.service'
import { Languages } from '@models/dictionary'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit, OnDestroy {
  /** Hamburger icon. */
  public faBars: IconDefinition = faBars
  /** Gear icon. */
  public faGear: IconDefinition = faGear

  /** List of available languages. */
  public langs: string[] = Languages

  /** Options panel state. */
  public isShowOptions: boolean = false
  /** Renderer2 event reference. */
  private _listener: () => void = () => {}

  public constructor(private uiService: UiService, private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  /** Toggle the sidebar size. */
  public toggleSidebar(): void {
    this.uiService.toggleSidebar()
  }

  /** Toggle options panel. */
  public toggleOptions(): void {
    // Toggle the propriety.
    this.isShowOptions = !this.isShowOptions

    // Need to be in a setTimeout to make it async to avoid trigger first click on gear.
    setTimeout(() => {
      if (this.isShowOptions) {
        // If panel is showing, add event listener to dom.
        this._listener = this.renderer.listen(document, 'click', e => {
          // If click is outside of panel, close panel and stop listening.
          if (!e.target.matches('.options') && !e.target.matches('.options *')) {
            // Hide options panel.
            this.isShowOptions = false
            // Remove event listener.
            this._listener()
          }
        })
      }
    }, 0)
  }

  /**
   * Sets the language of the app.
   * @param lang Desired language.
   */
  public selectLang(lang: string): void {
    window.localStorage.setItem('lang', lang)
    this.uiService.setLang()
    this.isShowOptions = false
  }
}
