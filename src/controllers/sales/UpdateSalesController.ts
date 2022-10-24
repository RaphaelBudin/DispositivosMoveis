import { UpdateSalesService } from "./../../services/sales/UpdateSalesService";
import { Request, Response } from "express";

export class UpdateSalesController {
  async handle(request: Request, response: Response) {
    const { id, productId, userId, total, desc, obs } = request.body;
    const updateSalesService = new UpdateSalesService();
    const retornoUpdateService = await updateSalesService.execute({
      id,
      productId,
      userId,
      total,
      desc,
      obs,
    });
    return response.json(retornoUpdateService);
  }
}
