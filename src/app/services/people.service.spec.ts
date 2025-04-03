import { fakeAsync, TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { BaseServiceTest } from './base.service.spec';
import { PostPersonRequest } from '@models/post-person.request';

export const providePeopleServiceForTesting = () => {
	return {
		provide: PeopleService,
		useValue: jasmine.createSpyObj('PeopleService', ['getAllAsync', 'postPersonAsync', 'getHomeScoreAsync']),
	};
};

describe('PeopleService', () => {
	let service: PeopleService;
	let baseService: BaseServiceTest;

	beforeEach(() => {
		baseService = new BaseServiceTest();
		baseService.setup();
		service = TestBed.inject(PeopleService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('getAllAsync', () => {
		it('should SUCCESS', fakeAsync(() => {
			baseService.mockHttpSuccess();
			service
				.getAllAsync()
				.then(result => {
					expect(result.success).toBeTrue();
					expect(result.errors).toEqual([]);
					expect(result.result).toBeNull();
				})
				.catch(() => fail('should not throw error'));
		}));

		it('should THROW ERROR', fakeAsync(() => {
			baseService.mockHttpError();
			service
				.getAllAsync()
				.then(() => fail('should throw error'))
				.catch(error => {
					expect(error.error.success).toBeFalse();
					expect(error.error.errors).toEqual(['mock error']);
					expect(error.error.result).toBeNull();
				});
		}));
	});

	describe('postPersonAsync', () => {
		const request: PostPersonRequest = {
			name: '',
			email: '',
			active: false,
		};

		it('should SUCCESS', fakeAsync(() => {
			baseService.mockHttpSuccess();
			service
				.postPersonAsync(request)
				.then(result => {
					expect(result.success).toBeTrue();
					expect(result.errors).toEqual([]);
					expect(result.result).toBeNull();
				})
				.catch(() => fail('should not throw error'));
		}));

		it('should THROW ERROR', fakeAsync(() => {
			baseService.mockHttpError();
			service
				.postPersonAsync(request)
				.then(() => fail('should throw error'))
				.catch(error => {
					expect(error.error.success).toBeFalse();
					expect(error.error.errors).toEqual(['mock error']);
					expect(error.error.result).toBeNull();
				});
		}));
	});

	describe('getHomeScoreAsync', () => {
		it('should SUCCESS', fakeAsync(() => {
			baseService.mockHttpSuccess();
			service
				.getHomeScoreAsync()
				.then(result => {
					expect(result.success).toBeTrue();
					expect(result.errors).toEqual([]);
					expect(result.result).toBeNull();
				})
				.catch(() => fail('should not throw error'));
		}));

		it('should THROW ERROR', fakeAsync(() => {
			baseService.mockHttpError();
			service
				.getHomeScoreAsync()
				.then(() => fail('should throw error'))
				.catch(error => {
					expect(error.error.success).toBeFalse();
					expect(error.error.errors).toEqual(['mock error']);
					expect(error.error.result).toBeNull();
				});
		}));
	});
});
