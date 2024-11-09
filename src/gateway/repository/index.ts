import type { Repository } from "../../domain/usecase/gateway";

export default class RepositoryImpl implements Repository {
	store: number[];

	constructor() {
		this.store = [];
	}

	push(statusCode: number) {
		this.store.push(statusCode);
	}

	clear() {
		this.store.splice(0);
	}
}
