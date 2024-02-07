import { NOTIFICATION_TYPES } from "./constants";

export const computeNotificationConfigBasedOnType = (type) => {
  switch (type) {
    case NOTIFICATION_TYPES.SUCCESS: {
      return {
        classes: "success",
      };
      break;
    }

    case NOTIFICATION_TYPES.ERROR: {
      return {
        classes: "error",
      };
      break;
    }

    case NOTIFICATION_TYPES.INFO: {
      return {
        classes: "info",
      };
      break;
    }

    case NOTIFICATION_TYPES.WARNING: {
      return {
        classes: "warning",
      };
      break;
    }

    default:
      return {
        classes: "",
      };
  }
};
