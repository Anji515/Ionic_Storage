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
import { useHistory } from "react-router";
import { ADD_PATIENT_PROFILE } from "../constants/routes";
import useNetworkStatus from "../hooks/useNetworkDetector";


const Home: React.FC = () => {
  const isOnline = useNetworkStatus()
  console.log('isOnline',isOnline);

  
  
  const { patients, addItem } = useStorage();
  const [task, setTask] = useState<string>("");
  const ionList = useRef(null as any);
  const history = useHistory();

  // const handleChange = (e: CustomEvent<InputChangeEventDetail>) => {
  //   console.log("e.detail.value", e.detail.value);
  //   setTask(e.detail.value as string);
  // };
  const handleAddPatient = async () => {
    history.push(ADD_PATIENT_PROFILE);
  };

  // const UpdateTodo = async (id: string, status: boolean) => {
  //   ionList.current.closeSlidingItems()
  //   await updateTodoItem(id,status)
  // };

  // const DeleteTodo = async (id: string) => {
  //   ionList.current.closeSlidingItems()
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonTitle>My Todo's</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem style={{ width: "80%", margin: "auto" }}>
          <IonInput
            value={task}
            // onIonInput={handleChange}
            placeholder="Search Patient by id, name and identity..."
            clearInput
          />
          <IonButton style={{ width: "20%" }} onClick={handleAddPatient}>
            Add Patients
          </IonButton>
        </IonItem>
        <IonList
          ref={ionList}
          className="ion-no-padding"
          style={{
            width: "70%",
            margin: "auto",
            marginTop: "30px",
            border: "0px solid gray",
            padding: "20px",
          }}
        >
          <IonItem>
            <IonLabel>Name</IonLabel>
            <IonLabel>Gender</IonLabel>
            <IonLabel>Age</IonLabel>
            <IonLabel>Contact Nuber</IonLabel>
            <IonLabel>Identity Type</IonLabel>
            <IonLabel>Identity Number</IonLabel>
            <IonLabel>Email</IonLabel>
          </IonItem>
          {patients?.map((todo, i) => (
            <IonItemSliding key={i}>
              <IonItem>
                <IonLabel>{todo?.profile?.name}</IonLabel>
                <IonLabel>{todo?.profile?.gender}</IonLabel>
                <IonLabel>{todo?.profile?.age}</IonLabel>
                <IonLabel>{todo?.profile?.contactNumber}</IonLabel>
                <IonLabel>{todo?.profile?.identityType?.toLocaleLowerCase()}</IonLabel>
                <IonLabel>{todo?.profile?.identityNumber}</IonLabel>
                <IonLabel>{todo?.profile?.email}</IonLabel>
              </IonItem>
              <IonItemOptions side="start">
                <IonItemOption
                  color={"danger"}
                  // onClick={() => DeleteTodo(todo?.id)}
                >
                  <IonIcon size="large" icon={trashBinSharp} />
                </IonItemOption>
              </IonItemOptions>
              <IonItemOptions side="end">
                <IonItemOption
                  color={"primary"}
                  // onClick={() => UpdateTodo(todo?.id, false)}
                >
                  <IonIcon size="large" icon={arrowUndoCircleSharp} />
                </IonItemOption>
                <IonItemOption
                  color={"success"}
                  // onClick={() => UpdateTodo(todo?.id, true)}
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
