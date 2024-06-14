import {
  InputChangeEventDetail,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { useStorage } from "../hooks/useStorage";
import { useRef, useState } from "react";
import {
  arrowUndoCircleSharp,
  checkmarkDoneCircleSharp,
  trashBinSharp,
} from "ionicons/icons";

const Home: React.FC = () => {
  const { todos, addTodo, updateTodoItem } = useStorage();
  const [task, setTask] = useState<string>("");
  const ionList = useRef(null as any)


  const handleChange = (e: CustomEvent<InputChangeEventDetail>) => {
    console.log("e.detail.value", e.detail.value);
    setTask(e.detail.value as string);
  };
  const CreateTodo = async () => {
    await addTodo(task);
    setTask("");
  };

  const UpdateTodo = async (id: string, status: boolean) => {
    ionList.current.closeSlidingItems()
    await updateTodoItem(id,status)
  };

  const DeleteTodo = async (id: string) => {
    ionList.current.closeSlidingItems()
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>My Todo's</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonInput
            value={task}
            onIonInput={handleChange}
            placeholder="Add a new todo"
          />
          <IonButton slot="end" fill="clear" onClick={() => CreateTodo()}>
            Add
          </IonButton>
        </IonItem>
        <IonList ref={ionList}>
          {todos?.map((todo, i) => (
            <IonItemSliding key={i}>
              <IonItem> 
                <IonLabel>
                {todo?.task}
                </IonLabel>
                {todo?.status ? 'Completed' : 'Pending'}
                </IonItem>
              <IonItemOptions side="start">
                <IonItemOption color={"danger"} onClick={() => DeleteTodo(todo?.id)}>
                  <IonIcon size="large" icon={trashBinSharp} />
                </IonItemOption>
              </IonItemOptions>
              <IonItemOptions side="end">
                <IonItemOption
                  color={"primary"}
                  onClick={() => UpdateTodo(todo?.id, false)}
                >
                  <IonIcon size="large" icon={arrowUndoCircleSharp} />
                </IonItemOption>
                <IonItemOption
                  color={"success"}
                  onClick={() => UpdateTodo(todo?.id, true)}
                >
                  <IonIcon size="large" icon={checkmarkDoneCircleSharp} />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
