import { computed, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	public isAuthenticated = computed(() => localStorage.getItem('name') != null);

	public login(name: string) {
		if (name) localStorage.setItem('name', name);
		return this.isAuthenticated();
	}

	public logout() {
		localStorage.removeItem('name');
		return this.isAuthenticated();
	}
}
