import { Stack } from "@fluentui/react";
import React from "react";
import { Department } from "../../types/Department";
import TaskItem from "./TaskItem";

interface IProps {
  department: Department;
}

const TasksList = ({ department }: IProps) => {
  return (
    <Stack styles={{ root: { paddingTop: "0.5rem", width: '100%' } }}>
      {department.tasks.map(task => <TaskItem task={task} key={task.id + "taskItem"} />)}
    </Stack>
  );
};

export default TasksList;
