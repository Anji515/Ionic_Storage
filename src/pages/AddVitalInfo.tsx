import {
  InputChangeEventDetail,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonToolbar,
  useIonLoading,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import FormSubmitButtons from "../components/FormSubmitButtons";
import StepProgressBar from "../components/StepProgressBar";
import ToastNotification from "../components/ToastNotification";
import { ADD_CONSULTATION, APP_PATIENTS } from "../constants/routes";
import { calculateBMI } from "../utils/calculateBmi";
import { ACTUAL_VITAL_INFO } from "../utils/constants";
import { VitalInfoForm, VitalsDefaultValue } from "./AddVitalInfo.types";
import { useStorage } from "../hooks/useStorage";

const MIN_WIDTH = { width: "60%", minHeight: "56px", marginBottom: '10px' };
const ACTUAL_WIDTH = {
  width: "100%",
  fontSize: '12px'
};
const COL_WIDTH = { width: "35%" };

export const vitalsInputFields = [
  {
    id: 1,
    type: "text",
    name: "patientId",
    placeholder: "Patient Id",
    readonly: true,
  },
  {
    id: 2,
    type: "number",
    name: "height",
    placeholder: "Height (cm)",
    readonly: false,
  },
  {
    id: 3,
    type: "number",
    name: "weight",
    placeholder: "Weight (kg)",
    readonly: false,
  },
  {
    id: 4,
    type: "text",
    name: "bloodGroup",
    placeholder: "Blood Group",
    readonly: false,
  },
  {
    id: 5,
    type: "text",
    name: "bloodPressure",
    placeholder: "Blood Pressure",
    readonly: false,
  },
  {
    id: 6,
    type: "number",
    name: "pulse",
    placeholder: "Pulse (bpm)",
    readonly: false,
  },
  {
    id: 7,
    type: "number",
    name: "spo2",
    placeholder: "SPO2 (%)",
    readonly: false,
  },
  {
    id: 8,
    type: "number",
    name: "sugar",
    placeholder: "Sugar",
    readonly: false,
  },
  {
    id: 9,
    type: "number",
    name: "temperature",
    placeholder: "Temperature (Celsius)",
    readonly: false,
  },
  {
    id: 10,
    type: "number",
    name: "bmi",
    placeholder: "BMI",
    readonly: true,
  },
];

const VitalInformation: React.FC = () => {
  const history = useHistory();
  const [activeNext, setActiveNext] = useState(false);
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [present, dismiss] = useIonLoading();
  const [alertMessage, setAlertMessage] = useState("");
  const [auth, setAuth] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [vitalInfo, setVitalInfo] = useState<VitalInfoForm>(VitalsDefaultValue);
  const totalSteps = 4;
  const patientId = localStorage.getItem("patientId") ?? undefined;
  const handleOnChange = useCallback(
    (e: CustomEvent<InputChangeEventDetail>) => {
      const target = e.target as HTMLInputElement;
      let value: string | number | undefined;

      if (target?.name === "bloodGroup" || target?.name === "bloodPressure") {
        value = e?.detail?.value ?? "";
      } else {
        value = e?.detail?.value ? parseInt(e?.detail?.value, 10) : undefined;
        if (target?.name === "height" || target?.name === "weight") {
          const height = target.name === "height" ? value : vitalInfo.height;
          const weight = target.name === "weight" ? value : vitalInfo.weight;
          const bmi = calculateBMI(weight, height);
          setVitalInfo((prevState) => ({
            ...prevState,
            bmi: bmi,
          }));
        }
      }
      setVitalInfo((prevState) => ({
        ...prevState,
        [target?.name]: value,
      }));
    },
    [vitalInfo]
  );

  const handleSubmit = async () => {
    await present("Adding Patient Vitals...!");
    localStorage.setItem('vitalInfo', JSON.stringify(vitalInfo))
    dismiss();
  };

  const handleNext = () => {
    const nextStep = activeStep + 1;
    if (nextStep < totalSteps) {
      setActiveStep(nextStep);
    }
    history.push(ADD_CONSULTATION);
  };

  const onCancel = () => {
    history.push(APP_PATIENTS);
  };

  useIonViewWillEnter(() => {
    setActiveStep(1);
    setActiveNext(false);
  });
  const handleToast = useCallback(() => setIsOpenToast(false), []);
  return (
    <IonPage className="bg-gray-100 h-full">
      <div className="bg-tealBody">
        <IonToolbar className="py-2" color={"body"}>
          <StepProgressBar
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            totalSteps={4}
          />
        </IonToolbar>
      </div>
      <IonContent className="ion-no-padding" color={"body"}>
        <ToastNotification
          isOpenToast={isOpenToast}
          alertMessage={alertMessage}
          auth={auth}
          handleToast={handleToast}
        />
        <IonGrid className="px-10 flex" style={{display: 'flex'}}>
          <IonCol className="mb-24 border-0 border-red-600 ">
          <IonRow
              className="mb-2 items-start"
              style={{
                marginTop: "25px",
                fontWeight: "bold",
              }}
            >
              <IonLabel
                style={MIN_WIDTH}
                className="text-gray-700 font-medium text-xl font-Poppins border-0 border-red-600 pt-4 pl-2"
              >
                Patients Vitals
              </IonLabel>
            </IonRow>
            {vitalsInputFields?.map((field) => (
              <IonRow className="mb-2" key={field?.id}>
                <IonInput
                  style={MIN_WIDTH}
                  color="dark"
                  type={field.type as "text" | "number" | undefined}
                  onIonChange={handleOnChange}
                  name={field.name}
                  value={vitalInfo[field?.name as keyof VitalInfoForm]}
                  className={`bg-white custom-input text-base}`}
                  placeholder={field.placeholder}
                  readonly={field.readonly}
                />
                <h1 className="text-red-600 text-2xl ml-2">*</h1>
              </IonRow>
            ))}
          </IonCol>
          <div
          style={{
            marginTop: "35px",
            width: "40%",
            
          }}
            className="bg-white border-0 border-red-500 mt-[6.5%] p-4 h-[90%] rounded-lg"
          >
            <IonLabel
              style={{
                marginTop: "35px",
                fontWeight: "bold"
              }}

              className="text-gray-700 font-medium text-xl font-Poppins border-0 border-red-600"
            >
              Actual Vital Info
            </IonLabel>
            {ACTUAL_VITAL_INFO?.map((field) => (
              <div
                key={field?.name}
                style={{width: "100%",
                    fontSize: '12px', display: 'flex', marginTop: "15px"}}
                className="text-gray-400 flex py-4 font-medium text-sm font-Poppins border-0 border-red-600 mb-2 mt-2 ml-2"
              >
                <h1 className="w-[50%]" style={{fontSize:'16px'}}>{field?.name}</h1>
                <h1 className="w-[5%]" style={{fontSize:'16px'}}>{":"}</h1>
                <h1 className="w-[45%]" style={{fontSize:'16px'}}>{field?.range}</h1>
              </div>
            ))}
          </div>
        </IonGrid>
        <FormSubmitButtons
          handleSubmit={handleSubmit}
          handleNext={handleNext}
          activeNext={activeNext}
          onCancel={onCancel}
        />
      </IonContent>
    </IonPage>
  );
};

export default VitalInformation;
