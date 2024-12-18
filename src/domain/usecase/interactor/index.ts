import type Data from "../../models/data";
import type Gateway from "../gateway";

export default class Interactor {
	gateway: Gateway;

	constructor(gateway: Gateway) {
		this.gateway = gateway;
	}

	async getData(id: string): Promise<Data> {
		return this.gateway.externalService().getData(id);
	}
}
