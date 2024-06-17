import {
  InputChangeEventDetail,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonToolbar,
  useIonLoading,
  useIonViewWillEnter,
} from "@ionic/react";
import { caretDownSharp } from "ionicons/icons";
import React, { useCallback, useState } from "react";
import StepProgressBar from "../components/StepProgressBar";
import ToastNotification from "../components/ToastNotification";
import { PatientNextStepsDefault } from "../utils/constants";
import { FollowupInfo } from "./NextSteps.types";
import { useStorage } from "../hooks/useStorage";
const INPUT_WIDTH = { minHeight: "56px", width: "586px" };

const NextStepForm: React.FC = () => {
  const [patientId] = useState(() => {
    const storedUserPatientId = localStorage.getItem("patientId");
    return storedUserPatientId ? JSON.parse(storedUserPatientId) : null;
  });
  const {addItem}= useStorage()
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [auth, setAuth] = useState(false);
  const [present, dismiss] = useIonLoading();
  const consultationId = localStorage.getItem("consultationId");
  const [followupInfo, setFollowupInfo] = useState<FollowupInfo>({
    patientId: patientId,
    consultationId: consultationId,
    ...PatientNextStepsDefault,
  });

  const [activeStep, setActiveStep] = useState<number>(4);

  const handleSave = async () => {
    setAuth(true)
    await present("Adding followup info...");
    localStorage.setItem('followupInfo', JSON.stringify(followupInfo))
    dismiss();
    setAlertMessage("Added followup info successfully");
  };

  const handleSubmit = async () => {
    setAuth(true)
    await present("Submitting the form ...");
    addItem()
    dismiss();
    setAlertMessage("Patient Information form submission completed successfully");
    localStorage.removeItem('patientInfo')
    localStorage.removeItem('vitalInfo')
    localStorage.removeItem('followupInfo')
  };

  const handleNextStepsChange = useCallback(
    (e: CustomEvent<InputChangeEventDetail>) => {
      const target = e.target as HTMLInputElement;
      let value: string | number | undefined;

      if (target?.name === "followUpDate") {
        value = e?.detail?.value ? e?.detail?.value?.slice(0, 10) : undefined;
      } else {
        value = e?.detail?.value ?? "";
      }
      setFollowupInfo((prevState) => ({
        ...prevState,
        [target?.name]: value,
      }));
    },
    [followupInfo]
  );

  const handleToast = useCallback(() => setIsOpenToast(false), []);

  useIonViewWillEnter(() => {
    setActiveStep(3);
  });

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
        <IonGrid style={{ paddingLeft: "25px" , paddingBottom:'70px'}} className="px-10 pb-24">
          <>
            <IonRow
              style={{
                marginTop: "25px",
                fontWeight: "bold",
              }}
              className="mb-2 items-start"
            >
              <IonLabel
                style={{ minHeight: "60px", width: "547px" }}
                className="text-gray-700 font-medium text-xl font-Poppins border-0 border-red-600 pt-4 pl-2"
              >
                Patients Followup Info
              </IonLabel>
            </IonRow>
            <IonRow className="mb-2" style={{ marginBottom: "10px" }}>
              <IonInput
                style={INPUT_WIDTH}
                color="dark"
                type="date"
                value={followupInfo.followUpDate}
                name="followUpDate"
                onIonChange={handleNextStepsChange}
                className={`bg-white custom-input ${
                  followupInfo.followUpDate == undefined
                    ? "text-gray-500"
                    : "text-black"
                }`}
              />
            </IonRow>

            <IonRow className="mb-2" style={{ marginBottom: "10px" }}>
              <IonSelect
                style={INPUT_WIDTH}
                value={followupInfo.treatmentStatus}
                color={"dark"}
                className={`always-flip bg-white ${
                  followupInfo?.treatmentStatus != ""
                    ? "text-black"
                    : "text-gray-500"
                } font-normal custom-select`}
                toggleIcon={caretDownSharp}
                interface="popover"
                label="Select Treatment Status"
                labelPlacement="floating"
                name="treatmentStatus"
                onIonChange={handleNextStepsChange}
              >
                <IonSelectOption value="TREATMENT_GOING_ON">
                  Treatment Going On
                </IonSelectOption>
                <IonSelectOption value="LAMA">Lama</IonSelectOption>
                <IonSelectOption value="PASSED_AWAY">
                  Passed Away
                </IonSelectOption>
                <IonSelectOption value="TREATMENT_COMPLETED">
                  Treatment Completed
                </IonSelectOption>
              </IonSelect>
            </IonRow>

            <IonRow className="mb-2" style={{ marginBottom: "10px" }}>
              <IonTextarea
                style={{
                  minHeight: "71px",
                  width: "586px",
                  color: "black",
                  backgroundColor: "white",
                }}
                color="dark"
                value={followupInfo.remarks}
                name="remarks"
                onIonChange={handleNextStepsChange}
                className="bg-white custom-input"
                placeholder="Remarks"
              />
            </IonRow>

            <IonRow className="mb-2" style={{ marginBottom: "10px" }}>
              <IonInput
                style={INPUT_WIDTH}
                color="dark"
                value={followupInfo.fee}
                name="fee"
                onIonChange={handleNextStepsChange}
                className="bg-white custom-input"
                placeholder="Fees Collected(In INR)"
              />
            </IonRow>

            <IonRow className="mb-2" style={{ marginBottom: "10px" }}>
              <IonInput
                style={INPUT_WIDTH}
                color="dark"
                value={followupInfo.investigations}
                name="investigations"
                onIonChange={handleNextStepsChange}
                className="bg-white custom-input"
                placeholder="Investigations"
              />
            </IonRow>

            <IonRow className="mb-2" style={{ marginBottom: "10px" }}>
              <IonInput
                style={INPUT_WIDTH}
                color="dark"
                value={followupInfo.advised}
                name="advised"
                onIonChange={handleNextStepsChange}
                className="bg-white custom-input"
                placeholder="Advised"
              />
            </IonRow>

            <IonRow className="mb-2" style={{ marginBottom: "10px" }}>
              <IonInput
                style={INPUT_WIDTH}
                color="dark"
                value={followupInfo.referral}
                name="referral"
                onIonChange={handleNextStepsChange}
                className="bg-white custom-input"
                placeholder="Referral"
              />
            </IonRow>
          </>
        </IonGrid>

        <div
          style={{
            height: "62px",
            position: "fixed",
            bottom: "0",
            left: "0",
            width: "100%",
            zIndex: "999",
            backgroundColor: "white"
          }}
          className="bg-teal4 flex justify-end items-center px-10"
        >
          <IonCol sizeXl="1" sizeMd="2">
            <IonButton fill="clear" color={"dark"}>
              Cancel
            </IonButton>
          </IonCol>

          <IonCol sizeXl="1" sizeMd="2">
            <IonButton onClick={handleSave} color={"body"}>
              Save
            </IonButton>
          </IonCol>
          <IonCol sizeXl="1" sizeMd="2">
            <IonButton onClick={handleSubmit} color={"teal"} disabled={!auth}>
              Final Submit
            </IonButton>
          </IonCol>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NextStepForm;
