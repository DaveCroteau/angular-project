import { Pipe, PipeTransform } from '@angular/core'
import { UiService } from '../services/ui/ui.service'

@Pipe({
	name: 'translate',
	pure: false,
})
export class TranslatePipe implements PipeTransform {
	public constructor(private uiService: UiService) {}

	/**
	 * Transform a key to the specified language or to the default lang if omitted.
	 * @param key Key from the dictionary.
	 * @param lang Language of the dictionary.
	 * @returns Translated string.
	 */
	public transform(key: string, lang?: string): string {
		return this.uiService.translate(key, lang)
	}
}
