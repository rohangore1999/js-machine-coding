import { ACTION_TYPES } from "../constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_NOTIFICATION: {
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    }

    case ACTION_TYPES.REMOVE_NOTIFICATION: {
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload.id
        ),
      };
    }

    default:
      return state;
  }
};
