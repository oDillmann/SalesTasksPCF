import React from 'react';
import { Stack, Text, Icon, TooltipHost, DirectionalHint, IStyle, Spinner, SpinnerSize } from '@fluentui/react';
import { task_task_statecode } from '../../cds-generated/enums/task_task_statecode';
import { observer } from 'mobx-react';
import { useVM } from '../../viewModel/context';
import { Task } from '../../types/Task';
import { taskMetadata } from '../../cds-generated/entities/Task';
import useAddAttachment from './AddAttachment';
import MarkButton from './MarkButton';

interface IProps {
  task: Task;
}

const TaskItem = ({ task }: IProps) => {
  const vm = useVM();
  const [addAttachment] = useAddAttachment();

  const LineDoubleClickHandler = () => {
    vm.context.navigation.openForm({ entityId: task.id, entityName: taskMetadata.logicalName })
  }

  return (
    <Stack key={task.id + "item"} horizontal horizontalAlign="space-between" verticalAlign="center" styles={{ root: { maxWidth: "100%", width: "100%" } }} tokens={{ childrenGap: "0.5rem" }}>
      <Stack grow
        styles={{ root: { cursor: "pointer", maxWidth: "calc(100% - 6rem)", borderRadius: "5%", padding: "0.4rem", selectors: { ":hover": { background: "#99999922", }, ":active": { background: "#99999944", } } } }}
        horizontalAlign='start'
        onDoubleClick={LineDoubleClickHandler}
      >
        <Stack styles={{ root: { maxWidth: '100%' } }} >
          <Text variant="medium" styles={{ root: { fontWeight: 600, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: 'nowrap', } as IStyle }} >
            <TooltipHost content={task.title} directionalHint={DirectionalHint.bottomCenter}>{task.title}</TooltipHost>
          </Text>
        </Stack>
      </Stack>
      <Stack horizontal horizontalAlign="center" verticalAlign="center" tokens={{ childrenGap: '0.5rem' }}>
        <TooltipHost content={task.status === task_task_statecode.Open ? "Open" : task.status === task_task_statecode.Canceled ? "Canceled" : "Completed"}>
          <Icon
            styles={{ root: { color: task.status === task_task_statecode.Open ? "orange" : task.status === task_task_statecode.Canceled ? "red" : "#009900", fontWeight: 900 } }}
            iconName={task.status === task_task_statecode.Open ? "Warning" : task.status === task_task_statecode.Canceled ? "ErrorBadge" : "CompletedSolid"}
          />
        </TooltipHost>
        <TooltipHost content={task.documentName ? (
          <Stack>
            <Text variant="medium" styles={{ root: { fontWeight: 600, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: 'nowrap', } as IStyle }} >
              Attachment Added
            </Text>
            <Text variant="small" styles={{ root: { fontWeight: 600, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: 'nowrap', } as IStyle }} >
              {task.documentName}
            </Text>
          </Stack>
        ) : task.status === task_task_statecode.Completed ? (
          <Stack>
            <Text variant="medium" styles={{ root: { fontWeight: 600, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: 'nowrap', } as IStyle }} >
              Task Completed
            </Text>
          </Stack>
        ) : (
          <Stack>
            <Text variant="medium" styles={{ root: { fontWeight: 600, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: 'nowrap', } as IStyle }} >
              Add Attachment
            </Text>
          </Stack>
        )}>
          <Icon
            iconName="Attach"
            onClick={() => {
              if (task.documentName) return;
              if (task.status === task_task_statecode.Completed) return;
              addAttachment(task.id)
            }}
            styles={{
              root: {
                cursor: task.documentName || task.status === task_task_statecode.Completed ? "" : "pointer",
                fontWeight: '900',
                color: task.documentName || task.status === task_task_statecode.Completed ? "#77777799" : "#777",
                borderRadius: '4px',
                transition: "all 0.05s ease-in-out",
                padding: '0.3rem',
                backgroundColor: task.documentName ? "#00ff0055" : "#88888822",
                selectors: {
                  ":hover": { backgroundColor: task.documentName || task.status === task_task_statecode.Completed ? "" : "#88888844", },
                  ":active": { backgroundColor: task.documentName || task.status === task_task_statecode.Completed ? "" : "#88888866" }
                }
              }
            }}
          />
        </TooltipHost>
        <MarkButton task={task} />
      </Stack>
    </Stack >
  )
};

export default observer(TaskItem);
