import * as React from 'react';
import { Stack } from '@fluentui/react';
import { observer } from 'mobx-react';
import DepartmentItem from './DepartmentItem';
import { useVM } from '../../viewModel/context';

const DepartmentsList: React.FC = () => {
  const vm = useVM();

  return (
    <Stack horizontal tokens={{ childrenGap: "0.5rem" }} styles={{ root: { minHeight: "400px", margin: '0.5rem 0', overflowX: 'auto' } }}>
      {vm.Departments.map((item) => (
        <DepartmentItem
          key={item.id + "list"}
          department={item}
        />
      ))}
    </Stack>
  )
};

export default observer(DepartmentsList);
