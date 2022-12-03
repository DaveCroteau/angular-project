import { Component, OnInit } from '@angular/core'
import { UiService } from '@services/ui/ui.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  public onBack(): void {
    this.uiService.onBack()
  }
}
