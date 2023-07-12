import * as React from 'react';
import { DirectionalHint, Icon, Stack, Text, TooltipHost } from '@fluentui/react';
import { task_task_statecode } from '../cds-generated/enums/task_task_statecode';
import { task_task_prioritycode } from '../cds-generated/enums/task_task_prioritycode';

interface ITask {
  id: string;
  title: string;
  status: task_task_statecode;
  priority: task_task_prioritycode;
}

interface IDepartment {
  id: number;
  title: string;
  tasks: ITask[];
}

//this is a horizontal list of thin vertical lines that have text rotated 90deg, when one is clicked, it expands horizontally to become a card and show details
const MyList: React.FC = () => {
  const [expandedItem, setExpandedItem] = React.useState<IDepartment | null>(null);

  const data: IDepartment[] = [
    {
      id: 1, title: 'this is the first title test test testse test this is the first title test test testse test ', tasks: [
        { id: '1', title: 'the first', status: task_task_statecode.Completed, priority: task_task_prioritycode.Low },
        { id: '2', title: 'the second', status: task_task_statecode.Completed, priority: task_task_prioritycode.High },
        { id: '3', title: 'the third', status: task_task_statecode.Open, priority: task_task_prioritycode.High },
      ]
    },
    {
      id: 2, title: 'the second', tasks: [
        { id: '1', title: 'the first', status: task_task_statecode.Canceled, priority: task_task_prioritycode.Low },
        { id: '2', title: 'the second', status: task_task_statecode.Completed, priority: task_task_prioritycode.High },
        { id: '3', title: 'the third', status: task_task_statecode.Open, priority: task_task_prioritycode.High },
        { id: '4', title: 'the fourth', status: task_task_statecode.Canceled, priority: task_task_prioritycode.Normal }
      ]
    },
    {
      id: 4, title: 'this is a new one to test all completed', tasks: [
        { id: '1', title: 'this is completed', status: task_task_statecode.Completed, priority: task_task_prioritycode.Normal },
        { id: '2', title: 'this as well', status: task_task_statecode.Completed, priority: task_task_prioritycode.Low }
      ]
    },
    {
      id: 3, title: 'and finally the third', tasks: [
        { id: '1', title: 'the title', status: task_task_statecode.Open, priority: task_task_prioritycode.Normal },
        { id: '2', title: 'another title', status: task_task_statecode.Completed, priority: task_task_prioritycode.Low }
      ]
    },
  ];

  const onItemClick = (item: IDepartment) => {
    setExpandedItem(item.id === expandedItem?.id ? null : item);
  };

  return (
    <Stack horizontal tokens={{ childrenGap: "0.5rem" }} styles={{ root: { height: "400px", margin: '0.5rem' } }}>
      {data.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          expanded={item.id === expandedItem?.id}
          onClick={onItemClick}
        />
      ))}
    </Stack>
  )
};

export default MyList;

interface ListItemProps {
  item: IDepartment;
  expanded: boolean;
  onClick: (item: IDepartment) => void;
}

//this is a list item for the horizontal list
const ListItem = ({ item, expanded, onClick }: ListItemProps) => {
  const itemTitle = React.useMemo(
    () => `${item.title} (${item.tasks.filter(t => t.status === task_task_statecode.Completed).length}, ${item.tasks.filter(t => t.status === task_task_statecode.Open).length}, ${item.tasks.filter(t => t.status === task_task_statecode.Canceled).length})`,
    [item])

  return (
    <Stack
      onClick={() => onClick(item)}
      horizontalAlign="start"
      tokens={{ childrenGap: "0.5rem" }}
      styles={{
        root: {
          cursor: 'pointer',
          width: expanded ? "300px" : "3ch",
          height: "100%",
          background: "rgba(255,73, 51, 0.1)",
          borderRadius: '3px',
          transition: 'all 0.1s ease-in-out',
          padding: expanded ? '0.5rem' : '0.5rem 0'
        }
      }}
    >
      <Stack
        horizontal
        horizontalAlign={expanded ? "space-between" : "center"}
        verticalAlign="center"
        styles={{ root: { width: "100%", height: '3ch', borderBottom: '1px solid #8884', paddingBottom: '0.5rem' } }}
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
                whiteSpace: 'nowrap'
              }
            }}
          >
            <TooltipHost
              content={itemTitle}
              directionalHint={DirectionalHint.bottomCenter}
            >
              {itemTitle}
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
      {expanded ? item.tasks.map((task, index) => (
        <Stack horizontal horizontalAlign='space-around' styles={{ root: { width: '100%' } }}>
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
        : (
          <Stack horizontalAlign='center' styles={{ root: { width: "100%", height: "100%" } }}>
            {item.tasks.some(task => task.status === task_task_statecode.Canceled) ? (
              <Icon styles={{ root: { color: "red" } }} iconName="ErrorBadge" />
            ) : item.tasks.some(task => task.status === task_task_statecode.Open) ? (
              <Icon styles={{ root: { color: "orange" } }} iconName="Warning" />
            ) : (
              <Icon styles={{ root: { color: "#009900" } }} iconName="CheckMark" />
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
                content={itemTitle}
                directionalHint={DirectionalHint.bottomCenter}
              >
                {itemTitle}
              </TooltipHost>
            </Text>
          </Stack>
        )}
    </Stack >
  );
}
