import React from "react";
import { Department } from "../../types/Department";
import TaskItem from "./TaskItem";

interface IProps {
  department: Department;
}

const TasksList = ({ department }: IProps) => {
  return (
    <>
      {department.tasks.map(task => {
        console.log(task.title, task.tradeIn);
        return <TaskItem task={task} key={task.id + "taskItem"} />;
      })}
    </>
  );
};

export default TasksList;
