import type Data from "../models/data";

export interface ExternalService {
	getData(id: string): Promise<Data>;
}

export interface Repository {
	push(statusCode: number): void;
	clear(): void;
}

export default interface Gateway {
	externalService(): ExternalService;
	repository(): Repository;
}
