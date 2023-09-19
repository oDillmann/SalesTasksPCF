import React from 'react';
import { Stack, Text, Icon, TooltipHost, DirectionalHint, IStyle, Spinner, SpinnerSize } from '@fluentui/react';
import { task_task_statecode } from '../../cds-generated/enums/task_task_statecode';
import { observer } from 'mobx-react';
import { useVM } from '../../viewModel/context';
import { Task } from '../../types/Task';
import { taskMetadata } from '../../cds-generated/entities/Task';

interface IProps {
  task: Task;
}

const TaskItem = ({ task }: IProps) => {
  const vm = useVM();
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Stack
      key={task.id + "item"}
      horizontal
      horizontalAlign='space-between'
      verticalAlign='center'
      styles={{ root: { maxWidth: '100%', width: '100%' } }}
      tokens={{ childrenGap: '0.5rem' }}
    >
      <Stack
        grow
        styles={{ root: { cursor: "pointer", maxWidth: '81%' } }}
        horizontalAlign='start'
        onDoubleClick={() => { vm.context.navigation.openForm({ entityId: task.id, entityName: taskMetadata.logicalName }) }}
      >
        <Stack
          styles={{ root: { maxWidth: '100%' } }}
        >
          <Text
            variant="medium"
            styles={{
              root: (() => {
                return {
                  fontWeight: 600,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: 'nowrap',
                } as IStyle
              })()
            }}
          >
            <TooltipHost
              content={task.title}
              directionalHint={DirectionalHint.bottomCenter}
            >
              {task.title}
            </TooltipHost>
          </Text>
        </Stack>
      </Stack>
      <Stack horizontal horizontalAlign="center" verticalAlign="center" tokens={{ childrenGap: '0.5rem' }}>
        <Icon
          styles={{ root: { color: task.status === task_task_statecode.Open ? "orange" : task.status === task_task_statecode.Canceled ? "red" : "#009900", fontWeight: 900 } }}
          iconName={
            task.status === task_task_statecode.Open ? "Warning" : task.status === task_task_statecode.Canceled ? "ErrorBadge" : "CompletedSolid"
          }
        />
        {isLoading ? (
          <Spinner size={SpinnerSize.small} styles={{ root: { padding: '0.24rem' } }} />
        ) : (
          <TooltipHost content={task.status === task_task_statecode.Completed ? "" : "Mark as complete"}>
            <Icon
              iconName="CheckMark"
              onClick={async () => {
                if (task.status === task_task_statecode.Completed) return;
                setIsLoading(true);
                await vm.MarkTaskAsComplete(task.id)
                setIsLoading(false);
              }}
              styles={{
                root: {
                  cursor: task.status === task_task_statecode.Completed ? "" : "pointer",
                  fontWeight: '900',
                  color: task.status === task_task_statecode.Completed ? "#999999" : "#5555ff",
                  borderRadius: '4px',
                  transition: "all 0.05s ease-in-out",
                  padding: '0.3rem',
                  backgroundColor: task.status === task_task_statecode.Completed ? "#99999933" : "#5555ff11",
                  selectors: task.status === task_task_statecode.Completed ? {} : {
                    ":hover": {
                      backgroundColor: "#5555ff22",
                    },
                    ":active": {
                      backgroundColor: "#5555ff44",
                      color: "#0000ff"
                    }
                  }
                }
              }}
            />
          </TooltipHost>
        )}
      </Stack>
    </Stack >
  )
};

export default observer(TaskItem);
