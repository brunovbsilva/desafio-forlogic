import { Component, inject, signal, OnInit } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { PeopleService } from '@services/people.service';
import { Person } from '@models/dtos/person';

@Component({
	selector: 'app-register',
	imports: [CardComponent, ButtonComponent, RouterLink],
	templateUrl: './register.component.html',
	styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
	private _peopleService = inject(PeopleService);

	private peopleList = signal<Person[] | undefined>(undefined);
	protected peopleList$ = this.peopleList.asReadonly();

	async ngOnInit(): Promise<void> {
		await this.getPeopleList();
	}

	private async getPeopleList() {
		await this._peopleService.getAllAsync().then(response => this.peopleList.set(response.result));
	}
}
