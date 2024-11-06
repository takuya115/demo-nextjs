import Data from "../models/data";

export interface ExternalService {
    getData(id: string): Promise<Data>
}

export default interface Gateway {
    externalService(): ExternalService
}