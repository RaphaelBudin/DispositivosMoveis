import { Request, Response } from "express";
import { DeleteDeliveryService } from "../../services/delivery/DeleteDeliveryService";

export class DeleteDeliveryController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;
    const deleteDeliveryService = new DeleteDeliveryService();
    const resposta = await deleteDeliveryService.execute({ id });
    return response.json(resposta);
  }
}
