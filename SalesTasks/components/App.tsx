import { MessageBar, MessageBarType } from '@fluentui/react';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import ServiceProvider from '../ServiceProvider';
import ContextProvider from '../viewModel/context';
import SalesTasksVM from '../viewModel/SalesTasksVM';

interface props {
  serviceProvider: ServiceProvider;
  entityId: string;
}

const App = ({ entityId, serviceProvider }: props) => {
  const vm = serviceProvider.get<SalesTasksVM>(SalesTasksVM.serviceName);

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
          <></>
        </ContextProvider >
      )}
    </>
  )
}

export default observer(App)
