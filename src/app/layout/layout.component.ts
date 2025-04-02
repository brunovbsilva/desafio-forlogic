import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
	selector: 'app-layout',
	imports: [RouterOutlet, ButtonComponent],
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
