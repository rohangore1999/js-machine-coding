import { v4 } from "uuid";
import { ACTION_TYPES } from "../constants";

export const addNotification = ({ message, type }) => {
  return {
    type: ACTION_TYPES.ADD_NOTIFICATION,
    payload: {
      id: v4(),
      type,
      message,
    },
  };
};

export const removeNotification = (id) => {
  return {
    type: ACTION_TYPES.REMOVE_NOTIFICATION,
    payload: {
      id,
    },
  };
};
