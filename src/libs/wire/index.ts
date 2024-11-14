import Interactor from "../../domain/usecase/interactor";
import { GatewayImpl } from "./gateway";

export function buildInteractor() {
	return new Interactor(new GatewayImpl());
}
