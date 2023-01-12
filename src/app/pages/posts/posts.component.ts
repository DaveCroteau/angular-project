import { Component, OnInit } from '@angular/core'
import { HttpService } from '@services/http/http.service'
import { Observable } from 'rxjs'
import { Posts } from '@models/posts.interface'

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
	public constructor(private http: HttpService) {}

	/** Posts observable stream. */
	public posts$: Observable<Posts[]> = this.http.getRequest<Posts[]>('https://jsonplaceholder.typicode.com/posts')

	public ngOnInit(): void {}

	/** Click event when a post is clicked. */
	public onClick(id: number): void {
		console.log(id)
	}
}
