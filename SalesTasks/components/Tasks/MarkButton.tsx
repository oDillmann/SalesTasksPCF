import { Icon, Spinner, SpinnerSize, TooltipHost } from "@fluentui/react"
import { observer } from "mobx-react";
import React from "react"
import { task_task_statecode } from "../../cds-generated/enums/task_task_statecode"
import { Task } from "../../types/Task"
import { useVM } from "../../viewModel/context";

interface props {
  task: Task;
}

const MarkButton = ({ task }: props) => {
  const vm = useVM();
  const [isLoading, setIsLoading] = React.useState(false);

  const MarkChangeHandler = async () => {
    if (task.status === task_task_statecode.Canceled) return;
    if (task.status === task_task_statecode.Open) {
      setIsLoading(true);
      await vm.MarkTask(task.id, task_task_statecode.Completed);
      setIsLoading(false);
    }
    else if (task.status === task_task_statecode.Completed) {
      const res = await vm.context.navigation.openConfirmDialog({
        title: "Reopen Task",
        text: "Are you sure you want to reopen this task?",
        confirmButtonLabel: "Reopen",
      })
      if (res.confirmed) {
        setIsLoading(true);
        await vm.MarkTask(task.id, task_task_statecode.Open);
        setIsLoading(false);
      }
    }
  }

  return (
    <TooltipHost content={task.status === task_task_statecode.Canceled ? "" : task.status === task_task_statecode.Completed ? "Reopen" : "Mark as complete"}>
      {isLoading ? (
        <Spinner size={SpinnerSize.small} styles={{ root: { padding: '0.24rem' } }} />
      ) : (
        <Icon
          iconName="CheckMark"
          onClick={MarkChangeHandler}
          styles={{
            root: {
              cursor: task.status === task_task_statecode.Canceled ? "" : "pointer",
              fontWeight: '900',
              color: task.status === task_task_statecode.Canceled ? "#999999" : task.status === task_task_statecode.Completed ? "#119911" : "#5555ff",
              borderRadius: '4px',
              transition: "all 0.05s ease-in-out",
              padding: '0.3rem',
              backgroundColor: task.status === task_task_statecode.Canceled ? "#99999933" : task.status === task_task_statecode.Completed ? "#11ee1122" : "#5555ff11",
              selectors: task.status === task_task_statecode.Canceled ? {} : task.status === task_task_statecode.Completed ? {
                ":hover": { backgroundColor: "#11991122", },
                ":active": { backgroundColor: "#11991144", color: "#00aa00" }
              } : {
                ":hover": { backgroundColor: "#5555ff22", },
                ":active": { backgroundColor: "#5555ff44", color: "#0000ff" }
              }
            }
          }}
        />
      )}
    </TooltipHost>
  )
}

export default observer(MarkButton);
