import React from "react";
import SalesTasksVM from "./SalesTasksVM";

export const SalesTasksVMcontext = React.createContext<SalesTasksVM>(
  {} as SalesTasksVM
);

export interface props {
  value: SalesTasksVM;
  children: JSX.Element;
}

const ContextProvider = ({ value, children }: props) => {
  return (
    <SalesTasksVMcontext.Provider value={value}>
      {children}
    </SalesTasksVMcontext.Provider>
  );
};

export const useVM = () => React.useContext(SalesTasksVMcontext);

export default ContextProvider;
