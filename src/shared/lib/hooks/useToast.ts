import { Bounce, toast, ToastOptions } from "react-toastify";

export const useToast = () => {
  const defaultOptions: ToastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };

  const toastSuccess = (msg: string) => {
    toast.success(msg, defaultOptions);
  };

  const toastError = (msg: string) => {
    toast.error(msg, defaultOptions);
  };

  const toastInfo = (msg: string) => {
    toast.info(msg, defaultOptions);
  };

  return { toastSuccess, toastError, toastInfo };
};
