import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
	selector: 'app-layout',
	imports: [RouterOutlet, ButtonComponent, RouterLink],
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
