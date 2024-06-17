export interface PatientProfile {
    name: string
    dob?: string | Date
    age?: number
    email?: string
    gender: string
    contactNumber: string
    emergencyNumber: string
    address: string
    state: string
    motherTongue: string
    patientAvatar: string
    pincode?: number | string
    identityType?: string
    identityNumber?: string
    occupation?: string
    category?: string
    village?: string
    gramPanchayat?: string
    postOffice?: string
    block?: string
    policeStation?: string
    tahseel?: string
    district?: string
    mandal?: string
    country?: string
    relationWithIdentificationHolder?: string
    nameOfIdentificationHolder?: string
    voterIdNumber?: string
  }
  
  export interface ErrorResponse {
    status: string
    data: null
    error: {
      message: string
    }
  }
  
  export interface Address {
    Block: string
    BranchType: string
    Circle: string
    Country: string
    DeliveryStatus: string
    Description: string | null
    District: string
    Division: string
    Name: string
    Pincode: string
    Region: string
    State: string
  }
  