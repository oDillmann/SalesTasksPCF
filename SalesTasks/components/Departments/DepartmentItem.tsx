import React from 'react';
import { DirectionalHint, Icon, Stack, Text, TooltipHost } from '@fluentui/react';
import { task_task_statecode } from '../../cds-generated/enums/task_task_statecode';
import { Department } from '../../types/Department';
import { observer } from 'mobx-react';
import TasksList from '../Tasks/TasksList';

interface ListItemProps {
  department: Department;
  expanded: boolean;
  onClick: (item: Department) => void;
}

const DepartmentItem = ({ department, expanded, onClick }: ListItemProps) => {
  const departmentTitle = React.useMemo(
    () => `${department.title} (
    ${department.tasks.filter(t => t.status === task_task_statecode.Completed && t.tradeIn).length},
    ${department.tasks.filter(t => t.status === task_task_statecode.Open && t.tradeIn).length},
    ${department.tasks.filter(t => t.status === task_task_statecode.Canceled && t.tradeIn).length})`,
    [department])

  return (
    <Stack
      horizontalAlign="start"
      tokens={{ childrenGap: "0.5rem" }}
      styles={{
        root: {
          width: expanded ? "300px" : "3ch",
          height: "100%",
          background: "rgba(255,73, 51, 0.1)",
          borderRadius: '3px',
          userSelect: 'none',
          overflowX: 'hidden',
          transition: 'width 0.1s ease-in-out',
          padding: expanded ? '0.5rem' : '0.5rem 0'
        }
      }}
    >
      <TopPart expanded={expanded} departmentTitle={departmentTitle} department={department} onClick={onClick} />
      <BottomPart expanded={expanded} departmentTitle={departmentTitle} department={department} onClick={onClick} />
    </Stack >
  );
}

interface IPartProps {
  department: Department;
  departmentTitle: string;
  expanded: boolean;
  onClick: (item: Department) => void;
}

const BottomPart = ({ department, departmentTitle, expanded, onClick }: IPartProps) => {
  return (
    <>
      {expanded ? (
        <TasksList department={department} />
      ) : (
        <Stack
          onClick={() => onClick(department)}
          horizontalAlign='center'
          styles={{
            root: {
              cursor: 'pointer',
              width: "100%",
              height: "100%",
            }
          }}
        >
          {department.tasks.some(task => task.status === task_task_statecode.Canceled) ? (
            <Icon styles={{ root: { color: "red", fontWeight: '900' } }} iconName="ErrorBadge" />
          ) : department.tasks.some(task => task.status === task_task_statecode.Open) ? (
            <Icon styles={{ root: { color: "orange", fontWeight: '900' } }} iconName="Warning" />
          ) : (
            <Icon styles={{ root: { color: "#009900", fontWeight: '900' } }} iconName="CompletedSolid" />
          )}
          <Text
            variant="medium"
            styles={{
              root: {
                fontWeight: 600,
                transform: "translate(-0.1em, 165px) rotate(-90deg)",
                width: '320px',
                writingMode: "vartical-lr",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: 'nowrap'
              }
            }}
          >
            <TooltipHost
              content={departmentTitle}
              directionalHint={DirectionalHint.bottomCenter}
            >
              {departmentTitle}
            </TooltipHost>
          </Text>
        </Stack>
      )}
    </>
  )
}

const TopPart = ({ department, departmentTitle, expanded, onClick }: IPartProps) => {
  return (
    <Stack
      onClick={() => onClick && onClick(department)}
      horizontal
      horizontalAlign={expanded ? "space-between" : "center"}
      verticalAlign="center"
      styles={{
        root: {
          cursor: "pointer",
          width: "100%",
          height: '3ch',
          borderBottom: '1px solid #8884',
          paddingBottom: '0.5rem',
        }
      }}
      tokens={{ childrenGap: '0.5rem' }}
    >
      {expanded && (
        <Text
          variant="medium"
          styles={{
            root: {
              fontWeight: 600,
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }
          }}
        >
          <TooltipHost
            content={departmentTitle}
            directionalHint={DirectionalHint.bottomCenter}
          >
            {departmentTitle}
          </TooltipHost>
        </Text>
      )}
      <Icon
        iconName="DoubleChevronRight12"
        styles={{
          root: {
            transition: 'all 0.2s ease-in-out',
            transform: expanded ? "rotate(-180deg)" : "rotate(0deg)",
          }
        }}
      />
    </Stack>
  )
}

export default observer(DepartmentItem)
