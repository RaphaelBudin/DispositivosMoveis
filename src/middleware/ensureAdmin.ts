import { Request, Response, NextFunction } from "express";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {

  const  admin  = true;
  // Verificar se usuario admin

  if (admin) {
    console.log("Login administrador Autorizado.");
    return next();
  }

  return response.status(401).json({
    error: "Não Autorizado por não ser admin",
  });
}