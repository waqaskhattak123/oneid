import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (message, type, exception_fire = "Toast in exception") => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "warn":
      toast.warn(message);
      break;
    case "info":
      toast.info(message);
      break;
    default:
      console.log(exception_fire);
  }
};

export default showToast;
