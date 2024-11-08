import type Gateway from "../../domain/usecase/gateway";
import type { ExternalService } from "../../domain/usecase/gateway";
import ExternalServiceImpl from "../../gateway/external_service/impl";

class GatewayImpl implements Gateway {
	externalService(): ExternalService {
		return new ExternalServiceImpl();
	}
}

export default new GatewayImpl();
