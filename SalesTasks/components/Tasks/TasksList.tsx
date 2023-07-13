
import React from 'react';
import { Stack, Text, Icon, TooltipHost, DirectionalHint } from '@fluentui/react';
import { task_task_statecode } from '../../cds-generated/enums/task_task_statecode';
import { Department } from '../../types/Department';
import { observer } from 'mobx-react';

interface IProps {
  department: Department
}

const TasksList = ({ department }: IProps) => {
  return (
    <>
      {department.tasks.map((task) => (
        <Stack horizontal horizontalAlign='space-around' styles={{ root: { width: '100%' } }} key={task.id + "item"}>
          <Stack grow horizontalAlign='start'>
            <Text
              variant="medium"
              styles={{
                root: {
                  fontWeight: 600,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: 'nowrap'
                }
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
          <Stack>
            <Icon
              styles={{ root: { color: task.status === task_task_statecode.Open ? "orange" : task.status === task_task_statecode.Canceled ? "red" : "#009900", fontWeight: 900 } }}
              iconName={
                task.status === task_task_statecode.Open ? "Warning" : task.status === task_task_statecode.Canceled ? "ErrorBadge" : "CheckMark"
              }
            />
          </Stack>
        </Stack>
      ))
      }
    </>
  )
};

export default observer(TasksList);
