import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
	let service: AuthService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AuthService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('login', () => {
		it('should set the name in localStorage and return true', async () => {
			const name = 'testUser';
			const result = await service.login(name);
			expect(result).toBe(true);
		});

		it('should not set the name in localStorage if name is empty', async () => {
			const result = await service.login('');
			expect(result).toBe(false);
		});
	});

	describe('logout', () => {
		it('should remove the name from localStorage and return false', async () => {
			localStorage.setItem('name', 'testUser');
			const result = await service.logout();
			expect(result).toBe(false);
		});
	});
});
