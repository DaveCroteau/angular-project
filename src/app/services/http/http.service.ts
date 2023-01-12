import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class HttpService {
	constructor(private _http: HttpClient) {}

	/**
	 * Makes a get request to a specific url.
	 * @param {string} url - The url to make the get request.
	 */
	public getRequest<T>(url: string): Observable<T> {
		return this._http.get<T>(url)
	}
}
