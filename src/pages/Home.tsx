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
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { useStorage } from "../hooks/useStorage";
import { useState } from "react";
import {
  arrowBackCircleSharp,
  arrowUndoCircleSharp,
  checkmarkDoneCircleSharp,
  closeCircle,
  closeCircleOutline,
  eyeOffSharp,
  trashBinSharp,
} from "ionicons/icons";

const Home: React.FC = () => {
  const { todos, addTodo } = useStorage();
  const [task, setTask] = useState<string>("");
  const handleChange = (e: CustomEvent<InputChangeEventDetail>) => {
    console.log("e.detail.value", e.detail.value);
    setTask(e.detail.value as string);
  };
  const CreateTodo = async () => {
    await addTodo(task);
    await setTask("");
  };

  const UpdateTodo = async (id: string, status: boolean) => {
    // setTask('')
  };

  const DeleteTodo = async (id: string) => {
    // setTask('')
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
        <IonList>
          {todos?.map((todo, i) => (
            <IonItemSliding key={i}>
              <IonItem>{todo?.task}</IonItem>
              <IonItemOptions side="start">
                <IonItemOption color={"danger"}>
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
