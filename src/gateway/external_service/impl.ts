import Data from "../../domain/models/data";
import type { ExternalService } from "../../domain/usecase/gateway";

export default class ExternalServiceImpl implements ExternalService {
	getData(id: string): Promise<Data> {
		console.log(id);
		return Promise.resolve(new Data(id));
	}
}
