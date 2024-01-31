import { Request, Response } from "express";
import {
  deleteUsersServices,
  getAllUsersServices,
  getByIdUsersServices,
  patchUsersServices,
  postUserServices,
} from "../../services";

export const postUserController = async (req: Request, res: Response) => {
  const newUser = await postUserServices(req.body);

  return res.status(201).json(newUser);
};

export const getAllUserController = async (req: Request, res: Response) => {
  const allUsers = await getAllUsersServices();

  return res.status(200).json(allUsers);
};

export const getByIdUserController = async (req: Request, res: Response) => {
  const user = await getByIdUsersServices(String(req.params.id));

  return res.status(200).json(user);
};

export const patchUserController = async (req: Request, res: Response) => {
  const patchUser = await patchUsersServices(req.body, String(req.params.id));

  return res.status(200).json(patchUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  await deleteUsersServices(String(req.params.id));

  return res.status(204).send();
};
