import { Request, Response } from "express";
import { UpdateProductService } from "../../services/product/UpdateProductService";

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id, name, description, id_category, price, url } = request.body;
    const updateProductSerice = new UpdateProductService();

    const resposta = await updateProductSerice.execute({
      id,
      name,
      description,
      id_category,
      price,
      url,
    });
    return response.json(resposta);
  }
}
