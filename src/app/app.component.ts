import { Component, NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, CommonModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	password = "";
	lett = false;
	num = false;
	sym = false;
	len = 0;

	onButtonClick() {
		const numbers = "1234567890";
		const alpha = "abcdefghijklmnopqrstuvwxyz";
		const symbols = "!@#$%^&*()";

		let validChars = "";
		if (this.lett) {
			validChars += alpha;
		}
		if (this.num) {
			validChars += numbers;
		}
		if (this.sym) {
			validChars += symbols;
		}
		let generatedPassword = "";
		for (let i = 0; i < this.len; i++) {
			const index = Math.floor(Math.random() * validChars.length);
			generatedPassword += validChars[index];
		}
		this.password = generatedPassword;
	}

	onLetterChange() {
		this.lett = !this.lett;
	}
	onNumberChange() {
		this.num = !this.num;
	}
	onSymbolChange() {
		this.sym = !this.sym;
	}
	onLengthChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const parsedValue = parseInt(target.value);
		if (!isNaN(parsedValue)) {
			this.len = parsedValue;
		} else {
			this.len = 0;
		}
	}
}
