export interface VitalInfoForm {
    patientId?: string
    height?: number
    weight?: number
    bloodGroup?: string
    bloodPressure?: number
    pulse?: number
    spo2?: number
    sugar?: number
    temperature?: number
    bmi?: number
  }
  
  export const VitalsDefaultValue = {
    patientId: '',
    height: undefined,
    weight: undefined,
    bloodGroup: '',
    bloodPressure: undefined,
    pulse: undefined,
    spo2: undefined,
    sugar: undefined,
    temperature: undefined,
    bmi: undefined,
  }
  