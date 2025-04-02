import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-register',
	imports: [CardComponent, ButtonComponent, RouterLink],
	templateUrl: './register.component.html',
	styleUrl: './register.component.scss',
})
export class RegisterComponent {}
