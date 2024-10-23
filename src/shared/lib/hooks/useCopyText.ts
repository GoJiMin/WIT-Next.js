import { useToast } from "./useToast";

export function useCopyText() {
  const { toastSuccess, toastError } = useToast();

  const handleCopyText = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toastSuccess("복사되었습니다.");
      })
      .catch(() => {
        toastError("다시 시도해주세요.");
      });
  };

  return { handleCopyText };
}
