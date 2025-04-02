import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '@core/core-services/auth.service';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
	selector: 'app-layout',
	imports: [RouterOutlet, ButtonComponent, RouterLink],
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.scss',
})
export class LayoutComponent {
	constructor(
		private _authService: AuthService,
		private _router: Router
	) {}

	public async logout() {
		await this._authService.logout().then(() => this._router.navigate(['login']));
	}
}
