import { UpdateDeliveryService } from "./../../services/delivery/UpdateDeliveryService";
import { Request, Response } from "express";

export class UpdateDeliveryController {
  async handle(request: Request, response: Response) {
    const { id, sales_id, dt_entrega, obs } = request.body;
    const updateDeliveryService = new UpdateDeliveryService();
    const resposta = await updateDeliveryService.execute({
      id,
      sales_id,
      dt_entrega,
      obs,
    });
    return response.json(resposta);
  }
}
