import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalstorageService {

	constructor() { }

	set(name, value) {

		return localStorage.setItem(name, value);

	}

	get(name) {

		return localStorage.getItem(name);

	}

	remove(name) {

		return localStorage.removeItem(name);

	}

	length() {

		return localStorage.length;

	}

	clear() {

		return localStorage.clear();

	}

}
