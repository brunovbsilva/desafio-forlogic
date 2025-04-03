import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { QueryStringHelper } from '@helpers/query-string.helper';
import { BaseResponse } from '@models/base.response';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export abstract class BaseService {
	private url = '';
	private http: HttpClient = inject(HttpClient);
	constructor(url: string, controller: string) {
		this.url = `${url}/api/${controller}`;
	}

	private async executeAsync<T>(request: Observable<T>): Promise<T> {
		return lastValueFrom(request);
	}

	protected async getAsync<T>(path: string, params?: object): Promise<BaseResponse<T>> {
		return this.executeAsync(
			this.http.get<BaseResponse<T>>(
				`${this.url}${path ? '/' + path : ''}${params ? '?' + QueryStringHelper.MapParams(params) : ''}`
			)
		);
	}

	protected async postAsync<T>(path: string, params?: object): Promise<BaseResponse<T>> {
		return this.executeAsync(this.http.post<BaseResponse<T>>(`${this.url}${path ? '/' + path : ''}`, params));
	}

	protected async putAsync<T>(path: string, params?: object): Promise<BaseResponse<T>> {
		return this.executeAsync(this.http.put<BaseResponse<T>>(`${this.url}${path ? '/' + path : ''}`, params));
	}

	protected async deleteAsync<T>(path: string, params?: object): Promise<BaseResponse<T>> {
		return this.executeAsync(
			this.http.delete<BaseResponse<T>>(
				`${this.url}${path ? '/' + path : ''}${params ? '?' + QueryStringHelper.MapParams(params) : ''}`
			)
		);
	}

	protected async patchAsync<T>(path: string, params?: object): Promise<BaseResponse<T>> {
		return this.executeAsync(this.http.patch<BaseResponse<T>>(`${this.url}${path ? '/' + path : ''}`, params));
	}
}
