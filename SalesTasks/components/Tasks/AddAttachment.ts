import { setVirtualParent } from "@fluentui/react";
import { useVM } from "../../viewModel/context";

const useAddAttachment = (): [(taskId: string) => void] => {
  const vm = useVM();

  const onAddAttachment = (taskId: string) => {
    Promise.resolve().then(() => {
      const inputElement = document.createElement("input");
      inputElement.style.visibility = "hidden";
      inputElement.setAttribute("type", "file");

      document.body.appendChild(inputElement);

      const target = event?.target as HTMLElement | undefined;

      if (target) {
        setVirtualParent(inputElement, target);
      }

      inputElement.onchange = (ev: any) => {
        if (ev.target.files) { saveFile(taskId, ev.target.files[0]) }
      };

      inputElement.click();

      if (target) {
        setVirtualParent(inputElement, null);
      }

      setTimeout(() => {
        inputElement.remove();
      }, 30000);
    });
  }

  const saveFile = async (taskId: string, file: File | undefined) => {
    if (!file) return
    if (file) {
      try {
        vm.isLoading = true;
        const result = await vm.cdsService.uploadFile(file, taskId, "tasks");
        if (result instanceof Error) {
          vm.setError(result.message);
          vm.isLoading = false;
        } else {
          vm.setError(undefined);
          vm.isLoading = false;
        }
        vm.init();
      } catch (e: any) {
        vm.setError(e.message);
        vm.isLoading = false;
      }
    }
  }

  return [onAddAttachment];
}

export default useAddAttachment;
