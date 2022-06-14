import { FindController } from "./find/FindController";

const findController = new FindController().handle;

export const controllers = {
  findController,
};
