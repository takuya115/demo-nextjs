import Interactor from "../../domain/usecase/interactor";
import gatewayImpl from "./gateway";

export default new Interactor(gatewayImpl);
