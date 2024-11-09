import Interactor from "../../domain/usecase/interactor";
import { GatewayImpl } from "./gateway";

export default function buildInteractor() {
	return new Interactor(new GatewayImpl());
}
