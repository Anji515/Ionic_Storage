export interface FollowupInfo {
    patientId?: string
    consultationId?: string | null
    followUpDate?: string
    treatmentStatus: string
    remarks: string
    fee?: number
    investigations: string
    advised: string
    referral: string
  }
  