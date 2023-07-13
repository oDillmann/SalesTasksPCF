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
      horizontalAlign='space-around'
      verticalAlign='center'
      styles={{ root: { width: '100%' } }}
    >
      <Stack
        grow
        styles={{ root: { cursor: "pointer" } }}
        horizontalAlign='start'
        onDoubleClick={() => { vm.context.navigation.openForm({ entityId: task.id, entityName: taskMetadata.logicalName }) }}
      >
        <TooltipHost
          content={task.title}
          directionalHint={DirectionalHint.bottomCenter}
        >
          <Text
            variant="medium"
            styles={{
              root: (() => {
                if (task.tradeIn) return ({
                  fontWeight: 600,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: 'nowrap',
                } as IStyle);
                return {
                  fontWeight: 600,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: 'nowrap',
                  color: "#aaa",
                } as IStyle
              })()
            }}
          >
            {task.title}
          </Text>
        </TooltipHost>
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
          <Icon
            iconName="CheckMark"
            color="#5555ff"
            onClick={async () => {
              setIsLoading(true);
              await vm.MarkTaskAsComplete(task.id)
              setIsLoading(false);
            }}
            styles={{
              root: {
                cursor: "pointer",
                borderRadius: '4px',
                transition: "all 0.05s ease-in-out",
                padding: '0.3rem',
                selectors: {
                  ":active": {
                    backgroundColor: "#5555ff44",
                    color: "#0000ff"
                  }
                }
              }
            }}
          />

        )}
      </Stack>
    </Stack >
  )
};

export default observer(TaskItem);
