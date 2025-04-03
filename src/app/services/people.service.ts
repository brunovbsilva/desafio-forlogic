import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from '../../environments/environment';
import { PostPersonRequest } from '@models/post-person.request';
import { Person } from '@models/dtos/person';
import { HomeScore } from '@models/home-score.response';

@Injectable({
	providedIn: 'root',
})
export class PeopleService extends BaseService {
	constructor() {
		super(environment.apiUrl, 'people');
	}

	async getAllAsync() {
		return this.getAsync<Person[]>('');
	}

	async postPersonAsync(request: PostPersonRequest) {
		return this.postAsync<Person>('', request);
	}

	async getHomeScoreAsync() {
		return this.getAsync<HomeScore>('score');
	}
}