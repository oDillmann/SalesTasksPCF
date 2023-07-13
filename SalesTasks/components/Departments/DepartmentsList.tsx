import * as React from 'react';
import { Stack } from '@fluentui/react';
import { Department } from '../../types/Department';
import { observer } from 'mobx-react';
import DepartmentItem from './DepartmentItem';
import { useVM } from '../../viewModel/context';

const DepartmentsList: React.FC = () => {
  const vm = useVM();
  const [expandedItem, setExpandedItem] = React.useState<Department | null>(null);

  const onItemClick = (item: Department) => {
    setExpandedItem(item.id === expandedItem?.id ? null : item);
  };

  return (
    <Stack horizontal tokens={{ childrenGap: "0.5rem" }} styles={{ root: { height: "400px", margin: '0.5rem' } }}>
      {vm.Departments.map((item) => (
        <DepartmentItem
          key={item.id + "list"}
          department={item}
          expanded={item.id === expandedItem?.id}
          onClick={onItemClick}
        />
      ))}
    </Stack>
  )
};

export default observer(DepartmentsList);
