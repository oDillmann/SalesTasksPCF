import { Task } from "./Task";

export type Department = {
  id: number;
  title: string;
  tasks: Task[];
}
