export interface PostPersonRequest {
	name: string;
	email: string;
	active: boolean;
	age?: number;
	address?: string;
	otherInformation?: string;
	interests?: string;
	feelings?: string;
	values?: string;
}
