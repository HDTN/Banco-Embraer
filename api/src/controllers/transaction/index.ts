import { CreateController } from "./create/CreateController";

const createController = new CreateController().handle;

export const controllers = {
  createController,
};
