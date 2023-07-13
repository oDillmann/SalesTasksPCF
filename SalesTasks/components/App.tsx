import { CommandBar, ICommandBarStyles, MessageBar, MessageBarType, Spinner, Stack, Text } from '@fluentui/react';
import { observer } from 'mobx-react';
import React, { useEffect, useMemo } from 'react';
import ServiceProvider from '../ServiceProvider';
import ContextProvider from '../viewModel/context';
import SalesTasksVM from '../viewModel/SalesTasksVM';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import DepartmentsList from './Departments/DepartmentsList';
import { TaskAttributes, taskMetadata } from '../cds-generated/entities/Task';
import HorizontalDivider from './UI/HorizontalDivider';
initializeIcons();

interface props {
  serviceProvider: ServiceProvider;
  entityId: string;
}

const App = ({ entityId, serviceProvider }: props) => {
  const vm = serviceProvider.get<SalesTasksVM>(SalesTasksVM.serviceName);

  const CommandBarItems = useMemo(() => {
    if (vm.isLoading) {
      return [
        {
          key: "refresh",
          text: "Refresh",
          iconProps: { iconName: "Refresh" },
          onClick: () => {
            console.log('initing')
            vm.init()
          },
        },
      ];
    }
    return [
      {
        key: "newItem",
        text: "New Task",
        iconProps: { iconName: "Add" },
        onClick: () => {
          /* redirect to new question form*/
          vm.context.navigation.openForm({
            entityName: taskMetadata.logicalName,
            useQuickCreateForm: true,
          }, {
            [TaskAttributes.axa_SalesFulfillmentStatus]: vm.EntityId
          });
        }
      },
      {
        key: "refresh",
        text: "Refresh",
        iconProps: { iconName: "Refresh" },
        onClick: () => vm.init(),
      },
    ];
  }, [vm.isLoading]);

  // this calls the init function again if the entityId changes, which eliminates the need for a refresh
  useEffect(() => {
    vm.EntityId = entityId || "";
    vm.init();
  }, [entityId]);

  return (
    <>
      {vm.PCFerror ? (
        <MessageBar messageBarType={MessageBarType.error}>
          {vm.PCFerror}
        </MessageBar>
      ) : (
        <ContextProvider value={vm}>
          <>
            <Stack horizontal horizontalAlign='space-between' verticalAlign='center'>
              <Text variant='large'>Tasks</Text>
              <CommandBar
                styles={{ root: { padding: "0" } } as ICommandBarStyles}
                items={[]}
                farItems={CommandBarItems}
              />
            </Stack>
            <HorizontalDivider />
            {vm.isLoading ? (
              <Spinner label='Loading...' styles={{ root: { margin: "5rem" } }} />
            ) : (
              <>
                {vm.errorMessage && (
                  <MessageBar messageBarType={MessageBarType.error} onDismiss={() => { vm.setError(undefined) }}>
                    {vm.errorMessage}
                  </MessageBar>
                )}
                {vm.Departments.length === 0 ? (
                  <Stack
                    horizontal
                    horizontalAlign='center'
                    verticalAlign='center'
                    styles={{ root: { margin: "3rem" } }}
                  >
                    <Text variant='medium'>No data available</Text>
                  </Stack>
                ) : (
                  <DepartmentsList />
                )}
              </>
            )}
          </>
        </ContextProvider >
      )}
    </>
  )
}

export default observer(App)
