import type Gateway from "../../domain/usecase/gateway";
import type { ExternalService, Repository } from "../../domain/usecase/gateway";
import ExternalServiceImpl from "../../gateway/external_service/impl";
import RepositoryImpl from "../../gateway/repository";

export class GatewayImpl implements Gateway {
	_externalService: ExternalService;
	_repository: Repository;

	constructor() {
		this._externalService = new ExternalServiceImpl();
		this._repository = new RepositoryImpl();
	}

	externalService(): ExternalService {
		return this._externalService;
	}

	repository(): Repository {
		return this._repository;
	}
}
