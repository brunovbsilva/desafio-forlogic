import { Component, inject, OnInit, signal } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { PeopleService } from '@services/people.service';
import { HomeScore } from '@models/home-score.response';
import { Person } from '@models/dtos/person';

@Component({
	selector: 'app-home',
	imports: [CardComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
	private _peopleService = inject(PeopleService);

	private homeScore = signal<HomeScore | undefined>(undefined);
	protected homeScore$ = this.homeScore.asReadonly();
	private peopleList = signal<Person[] | undefined>(undefined);
	protected peopleList$ = this.peopleList.asReadonly();

	async ngOnInit(): Promise<void> {
		await this.getHomeScore();
		await this.getPeopleList();
	}

	private async getHomeScore() {
		await this._peopleService.getHomeScoreAsync().then(response => this.homeScore.set(response.result));
	}

	private async getPeopleList() {
		await this._peopleService.getAllAsync().then(response => this.peopleList.set(response.result));
	}
}
