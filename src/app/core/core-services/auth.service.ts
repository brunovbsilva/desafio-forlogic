import { computed, Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private _login = signal<string | null>(localStorage.getItem('name'));
	public isAuthenticated$ = computed(() => !!this._login());
	public userName$ = computed(() => this._login()?.split('@')[0] ?? null);

	public async login(name: string) {
		this.setStorage(name);
		return Promise.resolve(this.isAuthenticated$());
	}

	public async logout() {
		this.removeStorage();
		return Promise.resolve(this.isAuthenticated$());
	}

	private setStorage(name: string | null) {
		if (name != null) {
			localStorage.setItem('name', name);
			this._login.set(name);
		}
	}

	private removeStorage() {
		localStorage.removeItem('name');
		this._login.set(null);
	}
}
