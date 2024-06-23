import {  Drivers, Storage } from "@ionic/storage";
import { useEffect, useState, useId } from "react";
import { PatientProfile } from "../pages/AddPatientProfile.types";
import { VitalInfoForm } from "../pages/AddVitalInfo.types";
import { FollowupInfo } from "../pages/NextSteps.types";
import cordovaSQLiteDriver from 'localforage-cordovasqlitedriver'
const PATIENTS_KEY = "patients";
export interface PatientInfo {
  id: string;
  profile: PatientProfile;
  vitals: VitalInfoForm;
  // consultation: {};
  nextSteps: FollowupInfo;
}

export const useStorage = () => {
  const [store, setStore] = useState<Storage>();
  const  patientProfile = JSON.parse(localStorage.getItem('patientInfo')!)
  const  patientVitals = JSON.parse(localStorage.getItem('vitalInfo')!)
  const  patientNextSteps = JSON.parse(localStorage.getItem('followupInfo')!)
  const [patients, setPatients] = useState<PatientInfo[]>([]);

  useEffect(() => {
    const initialStorage = async () => {
      const newStore = new Storage({
        name: "Anji_Db",
        driverOrder: [cordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
      });
      await newStore.defineDriver(cordovaSQLiteDriver)
      const store = await newStore.create();
      setStore(store);
      const patientsStored = (await store.get(PATIENTS_KEY)) || [];
      setPatients(patientsStored);
    };
    initialStorage();
  }, []);
  const addItem = async () => {
    if (!patientProfile || !patientVitals || !patientNextSteps) {
      console.error("All form data must be provided before adding item");
      return;
    }
    
    const newPatientInfo: PatientInfo = {
      id: ""+new Date().getTime() + Math.floor(Math.random() * 1000),
      profile: patientProfile,
      vitals: patientVitals,
      nextSteps: patientNextSteps,
    };
    
    
    const UpdatedPatients = [...patients, newPatientInfo];
    setPatients(UpdatedPatients);
    store?.set(PATIENTS_KEY, UpdatedPatients);
  };

  return {
    patients,
    addItem,
  };
};

// const updateTodoItem = async (id: string, status: boolean)=>{
//   const toUpdate = [...patients]
//   let patient = toUpdate.filter(patient => patient.id === id)[0]
//   patient.status = status
//   setPatients(toUpdate)
//   return store?.set(PATIENTS_KEY, toUpdate)
// }
