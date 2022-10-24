import { ListDeliveryService } from "./../../services/delivery/ListDeliveryService";
import { Request, Response } from "express";

export class ListDeliveryController {
  async handle(request: Request, response: Response) {
    const listDeliveryService = new ListDeliveryService();
    const resposta = await listDeliveryService.execute();

    return response.json(resposta);
  }
}
