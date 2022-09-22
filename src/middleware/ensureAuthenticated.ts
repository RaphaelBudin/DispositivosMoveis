import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token (verificar se o cabeçalho possui uma propriedade com nome de authorization)
  const authToken = request.headers.authorization;


  // Validar se token está preenchido
  if (!authToken) {
    return response.status(401).end(); //Còdigo 401 -> Não autorizado
  }

  const [, token] = authToken.split(" "); //Descarta a primeira informação, não é relevante
  console.log("Não autorizado, sem token");
  try {
    // Validar se token é válido
    const { sub } = verify(
      token,
      "4f93ac9d10cb751b8c9c646bc9dbccb9"
    ) as IPayload;   

    //request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}