import {
  InputChangeEventDetail,
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
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import FormSubmitButtons from "../components/FormSubmitButtons";

import { ADD_PATIENT_VITALS, APP_PATIENTS } from "../constants/routes";
import {
  CATEGORIES,
  LANGUAGES,
  PatientDefaultValues,
  RELATIONS,
} from "../utils/constants";
import { PatientProfile } from "./AddPatientProfile.types";
import ToastNotification from "../components/ToastNotification";
import { useStorage } from "../hooks/useStorage";
import StepProgressBar from "../components/StepProgressBar";
const INPUT_WIDTH = { minHeight: "56px", width: "586px" };
const TEXT_AREA_WIDTH = {
  minHeight: "71px",
  width: "586px",
  color: "black",
  backgroundColor: "white",
};

const AddPatientProfile: React.FC = () => {
  const history = useHistory();
  const [present, dismiss] = useIonLoading();
  const [activeNext, setActiveNext] = useState(false);
  const [isOpenToast, setIsOpenToast] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [auth, setAuth] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const patientId = localStorage.getItem("patientId") ?? undefined;
  const [villageInput, setVillageInput] = useState("");
  const totalSteps = 4;
  const [patientInfo, setPatientInfo] =
    useState<PatientProfile>(PatientDefaultValues);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOnChange = useCallback(
    (e: CustomEvent<InputChangeEventDetail>) => {
      const target = e.target as HTMLInputElement;
      const value = e?.detail?.value;
      if (target?.name == "relationWithIdentificationHolder" && value) {
        setSelectedOption(value);
        if (value === "OWN") {
          setPatientInfo((prevState) => ({
            ...prevState,
            nameOfIdentificationHolder: "",
          }));
        }
      }
      setPatientInfo((prevState) => ({
        ...prevState,
        [target?.name]: value,
      }));
    },
    []
  );

  const handleSubmit = async () => {
    await present("Adding Patient Profile...!");
    localStorage.setItem('patientInfo', JSON.stringify(patientInfo))
    setVillageInput("");
    dismiss();
    setAlertMessage("Added Patient Profile Successfully");
  };

  const handleNext = () => {
    const nextStep = activeStep + 1;
    if (nextStep < totalSteps) {
      setActiveStep(nextStep);
    }
    history.push(ADD_PATIENT_VITALS);
  };

  const onCancel = () => {
    history.push(APP_PATIENTS);
  };
  useIonViewWillEnter(() => {
    setActiveStep(0);
  });

  const handleToast = useCallback(() => setIsOpenToast(false), []);
  return (
    <IonPage className="bg-gray-100 h-full">
      <IonToolbar style={{ backgroundColor: "white" }}>
        <StepProgressBar
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          totalSteps={totalSteps}
        />
      </IonToolbar>

      <IonContent color={"body"}>
        <ToastNotification
          isOpenToast={isOpenToast}
          alertMessage={alertMessage}
          auth={auth}
          handleToast={handleToast}
        />

        <IonGrid
          className="px-14 ion-no-padding pb-24"
          style={{ margin: "20px", paddingBottom: "70px" }}
        >
          <IonCol size="8">
            <IonRow
              className="mb-2 items-start"
              style={{
                marginTop: "25px",
                marginBottom: "15px",
                fontWeight: "bold",
              }}
            >
              <IonLabel className="text-gray-700 font-medium text-xl font-Poppins  pt-4 pl-2">
                Patients Identifying Info
              </IonLabel>
            </IonRow>
            <IonRow style={{ marginBottom: "10px" }}>
              <IonInput
                style={INPUT_WIDTH}
                color="dark"
                value={patientInfo?.name}
                placeholder="Patient Name"
                onIonInput={handleOnChange}
                className="bg-white custom-input text-base"
                name="name"
                required
              />
            </IonRow>

            <IonRow style={{ marginBottom: "10px" }}>
              <IonInput
                style={INPUT_WIDTH}
                color="dark"
                type="number"
                name="age"
                placeholder="Patient age"
                value={patientInfo?.age}
                onIonInput={handleOnChange}
                className={`bg-white custom-input`}
              />
            </IonRow>

            <IonRow style={{ marginBottom: "10px" }}>
              <IonSelect
                style={INPUT_WIDTH}
                value={patientInfo?.gender}
                name="gender"
                color={"dark"}
                className={`always-flip bg-white ${
                  patientInfo?.gender ? "text-black" : "text-gray-500"
                } font-normal ion--border-width custom-select`}
                toggleIcon={caretDownSharp}
                interface="popover"
                label="Select Gender"
                labelPlacement="floating"
                onIonChange={handleOnChange}
              >
                <IonSelectOption value="MALE">Male</IonSelectOption>
                <IonSelectOption value="FEMALE">Female</IonSelectOption>
                <IonSelectOption value="OTHER">Others</IonSelectOption>
              </IonSelect>
            </IonRow>

            <IonRow style={{ marginBottom: "10px" }}>
              <IonInput
                style={INPUT_WIDTH}
                color="dark"
                maxlength={12}
                value={patientInfo?.identityNumber}
                placeholder="Aadhar Number ( Identity Number )"
                onIonInput={handleOnChange}
                className="bg-white custom-input text-base"
                name="identityNumber"
                required
              />
            </IonRow>
            <IonRow style={{ marginBottom: "10px" }}>
              <IonInput
                style={INPUT_WIDTH}
                color="dark"
                name="contactNumber"
                maxlength={10}
                value={patientInfo?.contactNumber}
                onIonInput={handleOnChange}
                className="bg-white custom-input"
                placeholder="Contact Number"
              />
            </IonRow>
            <IonRow style={{ marginBottom: "10px" }}>
              <IonInput
                style={INPUT_WIDTH}
                color="dark"
                name="voterIdNumber"
                maxlength={10}
                value={patientInfo?.voterIdNumber}
                onIonInput={handleOnChange}
                className="bg-white custom-input"
                placeholder="VoterId Number"
              />
            </IonRow>
            <IonRow style={{ marginBottom: "10px" }}>
              <IonSelect
                style={INPUT_WIDTH}
                className={`always-flip ${
                  patientInfo?.relationWithIdentificationHolder != ""
                    ? "text-black"
                    : "text-gray-500"
                } font-normal custom-select`}
                toggleIcon={caretDownSharp}
                interface="popover"
                name={"relationWithIdentificationHolder"}
                label={"Select Relation With Identity Holder"}
                labelPlacement="floating"
                color={"dark"}
                value={patientInfo?.relationWithIdentificationHolder}
                onIonChange={handleOnChange}
              >
                {RELATIONS.map((relation) => (
                  <IonSelectOption key={relation?.key} value={relation?.value}>
                    {relation?.key}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonRow>
            {selectedOption && selectedOption !== "OWN" && (
              <IonRow style={{ marginBottom: "10px" }}>
                <IonInput
                  style={INPUT_WIDTH}
                  color="dark"
                  value={patientInfo?.nameOfIdentificationHolder}
                  placeholder="Name Of Identification Holder"
                  onIonChange={handleOnChange}
                  className="bg-white custom-input text-base"
                  name="nameOfIdentificationHolder"
                  required
                />
              </IonRow>
            )}
            <IonCol className="mb-2 gap-2">
              <IonRow style={{marginBottom: '10px'}} className="mb-2">
                <IonInput
                  style={INPUT_WIDTH}
                  color="dark"
                  maxlength={6}
                  type="text"
                  value={patientInfo?.pincode}
                  onIonChange={handleOnChange}
                  className="bg-white custom-input text-base"
                  name="pincode"
                  placeholder="Pincode"
                  required
                />
              </IonRow>
              <IonRow style={{marginBottom: '10px'}} className="mb-2">
                <IonTextarea
                  style={TEXT_AREA_WIDTH}
                  color="dark"
                  name="address"
                  value={patientInfo?.address}
                  onIonChange={handleOnChange}
                  className="bg-white custom-input"
                  placeholder="Address"
                />
              </IonRow>
              <IonRow
                style={{
                  display: "flex",
                  width: "586px",
                  justifyContent: "space-between",
                }}
                className="w-[586px] flex justify-between border-0 border-red-500"
              >
                <IonInput
                  type="text"
                  value={patientInfo?.village}
                  name="village"
                  color={"dark"}
                  style={{
                    minHeight: "56px",
                    width: "49%",
                    marginBottom: "10px",
                  }}
                  className="w-[49%] font-normal mb-2 custom-input text-black bg-white"
                  onIonChange={handleOnChange}
                  placeholder="Enter Village"
                />

                <IonInput
                  color="dark"
                  style={{
                    minHeight: "56px",
                    width: "24%",
                    marginBottom: "10px",
                  }}
                  value={patientInfo?.gramPanchayat}
                  name="gramPanchayat"
                  className="bg-white custom-input mb-2 text-base w-[24%]"
                  placeholder="Gram Panchayat"
                  onIonChange={handleOnChange}
                />

                <IonInput
                  color="dark"
                  style={{
                    minHeight: "56px",
                    width: "24%",
                    marginBottom: "10px",
                  }}
                  value={patientInfo?.postOffice}
                  name="postOffice"
                  className="bg-white custom-input mb-2 text-base w-[24%]"
                  placeholder="PostOffice"
                  onIonChange={handleOnChange}
                />

                <IonInput
                  color="dark"
                  style={{
                    minHeight: "56px",
                    width: "24%",
                    marginBottom: "10px",
                  }}
                  value={patientInfo?.policeStation}
                  name="policeStation"
                  className="bg-white custom-input mb-2 text-base w-[24%]"
                  placeholder="Police Station"
                  onIonChange={handleOnChange}
                />
                <IonInput
                  color="dark"
                  style={{
                    minHeight: "56px",
                    width: "24%",
                    marginBottom: "10px",
                  }}
                  value={patientInfo?.tahseel}
                  name={"tahseel"}
                  className="bg-white custom-input mb-2 text-base w-[24%]"
                  placeholder="Tahseel"
                  onIonChange={handleOnChange}
                />
                <IonInput
                  color="dark"
                  style={{
                    minHeight: "56px",
                    width: "24%",
                    marginBottom: "10px",
                  }}
                  value={patientInfo?.block}
                  name="block"
                  className="bg-white custom-input mb-2 text-base w-[24%]"
                  placeholder="Block"
                  onIonChange={handleOnChange}
                />

                <IonInput
                  color="dark"
                  style={{
                    minHeight: "56px",
                    width: "24%",
                    marginBottom: "10px",
                  }}
                  value={patientInfo?.mandal}
                  name="mandal"
                  className="bg-white custom-input mb-2 text-base w-[24%]"
                  placeholder="Mandal"
                  onIonChange={handleOnChange}
                />
              </IonRow>
              <IonRow
                className="gap-2 w-[586px] border-0 border-red-500"
                style={{
                  display: "flex",
                  width: "586px",
                  justifyContent: "left",
                  gap:'8px',
                }}
              >
                <IonInput
                  color="dark"
                  style={{ minHeight: "56px", width: "24%",
                    marginBottom: "10px", }}
                  value={patientInfo?.district}
                  name="district"
                  className="bg-white custom-input mb-2 text-base w-[24%]"
                  placeholder="District"
                  onIonChange={handleOnChange}
                />
                <IonInput
                  color="dark"
                  style={{ minHeight: "56px", width: "24%",
                    marginBottom: "10px", }}
                  value={patientInfo?.state}
                  name="state"
                  className="bg-white custom-input mb-2 text-base w-[24%]"
                  placeholder="State"
                  readonly={true}
                />
                <IonInput
                  color="dark"
                  style={{ minHeight: "56px", width: "24%",
                    marginBottom: "10px", }}
                  value={patientInfo?.country}
                  name="country"
                  className="bg-white custom-input mb-2 text-base w-[24%]"
                  placeholder="Country"
                  readonly={true}
                />
              </IonRow>
            </IonCol>

            <IonRow style={{ marginBottom: "10px" }}>
              <IonSelect
                style={INPUT_WIDTH}
                value={patientInfo?.motherTongue}
                color={"dark"}
                className={`always-flip bg-white ${
                  patientInfo?.motherTongue ? "text-black" : "text-gray-500"
                } font-normal ion--border-width custom-select`}
                toggleIcon={caretDownSharp}
                interface="popover"
                name="motherTongue"
                label="Select Language"
                labelPlacement="floating"
                onIonChange={handleOnChange}
              >
                {LANGUAGES?.map((lang: string) => (
                  <IonSelectOption value={lang} key={lang}>
                    {lang?.charAt(0)?.toUpperCase() +
                      lang?.slice(1)?.toLowerCase()}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonRow>

            <IonRow style={{ marginBottom: "10px" }}>
              <IonInput
                style={INPUT_WIDTH}
                color="dark"
                type="text"
                name="occupation"
                placeholder="Occupation"
                value={patientInfo?.occupation}
                onIonInput={handleOnChange}
                className={`bg-white custom-input`}
              />
            </IonRow>

            <IonRow style={{ marginBottom: "10px" }}>
              <IonSelect
                style={INPUT_WIDTH}
                value={patientInfo?.category}
                color={"dark"}
                className={`always-flip bg-white ${
                  patientInfo?.category ? "text-black" : "text-gray-500"
                } font-normal ion--border-width custom-select`}
                toggleIcon={caretDownSharp}
                interface="popover"
                name="category"
                label="Select Category"
                labelPlacement="floating"
                onIonChange={handleOnChange}
              >
                {CATEGORIES?.map((category: string) => (
                  <IonSelectOption value={category} key={category}>
                    {category}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonRow>
          </IonCol>
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

export default AddPatientProfile;
