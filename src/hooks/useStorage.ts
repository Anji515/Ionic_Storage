import { Storage } from "@ionic/storage";
import { useEffect, useState } from "react";

const TODO_KEY = "my-todos";
export interface TODO_ITEM {
  id: string;
  task: string;
  status: boolean;
}
export const useStorage = () => {
  const [store, setStore] = useState<Storage>();
  const [todos, setTodos] = useState<TODO_ITEM[]>([]);
  useEffect(() => {
    const initialStorage = async () => {
      const newStore = new Storage({
        name: "Anji_Db",
        // version: "number",
        // size: "number",
        // storeName: "string",
        // description: "string",
        // driverOrder: "",
        // dbKey: "string",
      });
      const store = await newStore.create();
      setStore(store);
      const TodosStored = (await store.get(TODO_KEY)) || [];
      console.log("TodosStored", TodosStored);
      setTodos(TodosStored);
    };
    initialStorage();
  }, []);

  const addTodo = async (task: string) => {
    const newTodo = {
      id: "" + new Date().getTime(),
      status: true,
      task,
    };
    const UpdatedTodos = [...todos, newTodo]
    setTodos(UpdatedTodos);
    store?.set(TODO_KEY, UpdatedTodos);
  };

  return {
    todos,
    addTodo,
  };
};
