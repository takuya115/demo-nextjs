import Data from "../../domain/models/data";
import type { ExternalService } from "../../domain/usecase/gateway";

// https://httpbin.org/#/ + fetch

export class ExternalServiceImpl implements ExternalService {
       async getData(_id: string): Promise<Data> {
               const response = await fetch("https://httpbin.org/get");
               const body = await response.json();
               console.log(body);
               return new Data(response.status);
       }
}
