
export const UserTypeOptions = [
  { label: "Super Admin", value: "ROLE_ADMIN" },
  { label: "Center Admin", value: "ROLE_CENTER_ADMIN" },
  { label: "Patient Navigator", value: "ROLE_NAVIGATOR" },
  { label: "Doctor", value: "ROLE_DOCTOR" },
];

export const CampColumns = [
  { name: "Camp Name", key: "campName" },
  { name: "Location", key: "location" },
  { name: "Centre Name", key: "centreName" },
  { name: "Camp Date", key: "campDate" },
  { name: "Assigned to", key: "assignedTo" },
  { name: "Status", key: "status" },
  { name: "Actions", key: "actions" },
];

export const CenterColumns = [
  { name: "Name", key: "name" },
  { name: "Location", key: "location" },
  { name: "Center Admin", key: "centerAdmin" },
  { name: "Total Staff", key: "totalStaff" },
  { name: "Date of Creation", key: "dateOfCreation" },
  { name: "Actions", key: "actions" },
];

export const StaffColumns = [
  { name: "Staff ID", key: "id" },
  { name: "Employee Name", key: "name" },
  { name: "Age", key: "age" },
  { name: "Gender", key: "gender" },
  { name: "Contact Number", key: "contactNumber" },
  { name: "Email ID", key: "email" },
  { name: "DOJ", key: "dateOfJoining" },
  { name: "Designation", key: "role" },
  { name: "Performance", key: "performance" },
  { name: "Actions", key: "actions" },
];

export const PATIENT_FILTER_OPTIONS: Record<string, string[]> = {
  Age: ["10-20", "20-30", "30-40", "40-50", "50-60", "60-70"],
  Gender: ["MALE", "FEMALE", "OTHERS"],
  Disease: [
    "Diabetes",
    "General Physician",
    "Dermatology",
    "ENT",
    "Orthopaedic",
    "Oncology",
    "Ophthalmology",
    "Endocrinology (Diabetes)",
    "Cardiology",
    "Nephrology",
    "Dentistry",
    "Gastroenterology",
    "Gynaecology",
    "Neurology",
    "Psychology",
    "Nutritional",
    "Urology",
    "Respiratory",
    "Psychiatry",
  ],
  Speciality: [
    "Dental Surgeon",
    "Assosiate Director Onco Medicine",
    "Ayurvedic Consultant",
    "Cardiac Surgeon",
    "Community Medicine",
    "Dentist",
    "Dentist & Cosmetologist",
    "Dentistry",
    "Dermatologist",
    "Diabetes",
    "Gastroenterologist",
    "General Ayurvedic Physician",
    "General Physican + Surgeon",
    "General Physician",
    "General Physician + Paediatrician",
    "General Surgeon",
    "General Surgeon, Gastrointestinal Endo Surgeons",
    "Gynaecologist",
    "Gynaecology",
    "M.B.B.S., MD,  C.C.E.B.D.M (Diabetes Management)",
    "MBBS",
    "Medical Oncologist",
    "Medicine/ Dermatology",
    "NA",
    "Nephrology",
    "Neurologist",
    "Neurology",
    "Nutrition",
    "Nutritionist",
    "Oncologist",
    "Oncology",
    "Oncology + Neurology",
    "Ophthalmology",
    "Opthalmologist",
    "Orthopaedics",
    "Orthopedic",
    "Paediatric",
    "Paediatric Hemato-Oncologist",
    "Paediatrician",
    "Paediatrics",
    "Periodontics",
    "Physiotherapist",
    "Psychiatry",
    "Psychologist",
    "Psychology",
    "R.M.O. in the department of Medicine at BCM HOSPITAL, Sitapur.",
    "Radiation oncologist",
    "Surgical Oncology",
    "Urologist",
  ],
  "Consultation Date": [],
  "Followup Date": [],
};

export const DOCTOR_FILTER_OPTIONS: Record<string, string[]> = {
  Status: ["In", "Out", "OnLeave"],
  Availability: [],
  "Doctor Speciality": [
    "Dental Surgeon",
    "Assosiate Director Onco Medicine",
    "Ayurvedic Consultant",
    "Cardiac Surgeon",
    "Community Medicine",
    "Dentist",
    "Dentist & Cosmetologist",
    "Dentistry",
    "Dermatologist",
    "Diabetes",
    "Gastroenterologist",
    "General Ayurvedic Physician",
    "General Physican + Surgeon",
    "General Physician",
    "General Physician + Paediatrician",
    "General Surgeon",
    "General Surgeon, Gastrointestinal Endo Surgeons",
    "Gynaecologist",
    "Gynaecology",
    "M.B.B.S., MD,  C.C.E.B.D.M (Diabetes Management)",
    "MBBS",
    "Medical Oncologist",
    "Medicine/ Dermatology",
    "NA",
    "Nephrology",
    "Neurologist",
    "Neurology",
    "Nutrition",
    "Nutritionist",
    "Oncologist",
    "Oncology",
    "Oncology + Neurology",
    "Ophthalmology",
    "Opthalmologist",
    "Orthopaedics",
    "Orthopedic",
    "Paediatric",
    "Paediatric Hemato-Oncologist",
    "Paediatrician",
    "Paediatrics",
    "Periodontics",
    "Physiotherapist",
    "Psychiatry",
    "Psychologist",
    "Psychology",
    "R.M.O. in the department of Medicine at BCM HOSPITAL, Sitapur.",
    "Radiation oncologist",
    "Surgical Oncology",
    "Urologist",
  ],
};

export const CAMPS_FILTER_OPTIONS: Record<string, string[]> = {
  "Camp Location": ["In", "Out", "OnLeave"],
  "Centre Name": ["DS1", "DS2", "DS3"],
  "Camp Status": ["Completed", "Pending"],
};

export const CENTER_FILTER_OPTIONS: Record<string, string[]> = {
  "Center Location": ["In", "Out", "OnLeave"],
  "Center Admins": ["Admin", "Center Admin"],
};
export const STAFF_FILTER_OPTIONS: Record<string, string[]> = {
  "Staff Age": ["10-20", "20-30", "30-40", "40-50", "50-60", "60-70"],
  "Staff Gender": ["MALE", "FEMALE", "OTHERS"],
  "Joining date": [],
  Performance: [],
};
export const LANGUAGES = [
  "HINDI",
  "ENGLISH",
  "BENGALI",
  "MARATHI",
  "TELUGU",
  "TAMIL",
  "GUJARATI",
  "URDU",
  "KANNADA",
  "ODIA",
  "MALAYALAM",
  "PUNJABI",
  "ASSAMESE",
];

export const CATEGORIES = ["SC", "ST", "OBC", "GENERAL"];
export const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export const DOCTOR_SPECIALIZATION = [
  "Dental Surgeon",
  "Assosiate Director Onco Medicine",
  "Ayurvedic Consultant",
  "Cardiac Surgeon",
  "Community Medicine",
  "Dentist",
  "Dentist & Cosmetologist",
  "Dentistry",
  "Dermatologist",
  "Diabetes",
  "Gastroenterologist",
  "General Ayurvedic Physician",
  "General Physican + Surgeon",
  "General Physician",
  "General Physician + Paediatrician",
  "General Surgeon",
  "General Surgeon, Gastrointestinal Endo Surgeons",
  "Gynaecologist",
  "Gynaecology",
  "M.B.B.S., MD,  C.C.E.B.D.M (Diabetes Management)",
  "MBBS",
  "Medical Oncologist",
  "Medicine/ Dermatology",
  "Nephrology",
  "Neurologist",
  "Neurology",
  "Nutrition",
  "Nutritionist",
  "Oncologist",
  "Oncology",
  "Oncology + Neurology",
  "Ophthalmology",
  "Opthalmologist",
  "Orthopaedics",
  "Orthopedic",
  "Paediatric",
  "Paediatric Hemato-Oncologist",
  "Paediatrician",
  "Paediatrics",
  "Periodontics",
  "Physiotherapist",
  "Psychiatry",
  "Psychologist",
  "Psychology",
  "R.M.O. in the department of Medicine at BCM HOSPITAL, Sitapur.",
  "Radiation oncologist",
  "Surgical Oncology",
  "Urologist",
];

export const ACTUAL_VITAL_INFO = [
  { name: "BP (Systolic)", range: "120 mm Hg" },
  { name: "BP (Diastolic)", range: "80 mm Hg" },
  { name: "Heart Rate", range: "60-100 bpm" },
  { name: "Respirations", range: "12-20 breath/min" },
  { name: "SPO2", range: "95-100%" },
  { name: "Sugar", range: "< 140 mg/dL" },
  { name: "Temperature", range: "36.1 - 37.2°C" },
  { name: "BMI", range: "18.5 - 24.9" },
];
export const RELATIONS = [
  { key: "Son", value: "SON" },
  { key: "Daughter", value: "DAUGHTER" },
  { key: "Daughter In Law", value: "DAUGHTER_IN_LAW" },
  { key: "Father", value: "FATHER" },
  { key: "Mother", value: "MOTHER" },
  { key: "Brother", value: "BROTHER" },
  { key: "Son In Law", value: "SON_IN_LAW" },
  { key: "Friend Of", value: "FRIEND_OF" },
  { key: "Own", value: "OWN" },
];

export const PatientDefaultValues = {
  name: "",
  dob: undefined,
  email: "",
  gender: "",
  contactNumber: "",
  emergencyNumber: "",
  address: "",
  state: "",
  motherTongue: "",
  patientAvatar: "",
  pincode: undefined,
  identityType: "AADHAR_NUMBER",
  identityNumber: "",
  occupation: "",
  category: "",
  village: "",
  gramPanchayat: "",
  postOffice: "",
  block: "",
  policeStation: "",
  tahseel: "",
  district: "",
  mandal: "",
  country: "",
  relationWithIdentificationHolder: "",
  nameOfIdentificationHolder: "",
  voterIdNumber: "",
};

export const ConsultationDefaultValues = {
  doctorName: "",
  centerName: "",
  campName: "",
  doctorEmail: "",
  chiefComplaint: [],
  suspectedDiagnosis: "",
  confirmedDiagnosis: "",
  historyOfAllergy: [],
  consultationType: "",
  startTime: "",
  endTime: "",
  diseases: [
    {
      diseaseName: "",
      startDate: "",
    },
  ],
  consultationMedicines: [],
};

export const PatientNextStepsDefault = {
  followUpDate: undefined,
  treatmentStatus: "",
  remarks: "",
  fee: undefined,
  investigations: "",
  advised: "",
  referral: "",
};

export const DefaultMedicineValues = {
  dosage: undefined,
  frequency: "",
  noOfDays: undefined,
  quantity: undefined,
  medicine: "",
  time: "",
};

export const DISEASES = [
  "General Physician",
  "Opthalmology",
  "Hepatology",
  "Diabetes",
  "Dermatology",
  "ENT",
  "Orthopaedic",
  "Oncology",
  "Ophthalmology",
  "Endocrinology (Diabetes)",
  "Cardiology",
  "Nephrology",
  "Dentistry",
  "Gastroenterology",
  "Gynaecology",
  "Neurology",
  "Psychology",
  "Nutritional",
  "Urology",
];

export const CenterNames = ["DS5", "DS4", "DS3", "DS2", "DS1"];

export const CampName = [
  "DS5 Camp",
  "DS4 Camp",
  "DS3 Camp",
  "DS2 Camp",
  "DS1 Camp",
];
export const MEDICINE_TIME = [
  { value: "MORNING", key: "Morning" },
  { value: "AFTERNOON", key: "Afternoon" },
  { value: "EVENING", key: "Evening" },
  { value: "NIGHT", key: "Night" },
];
export const MedicineAvailable = [
  "dolo 650",
  "dolo 651",
  "dolo 652",
  "dolo653",
  "dolo654",
];



// Admin Side Contsants

export const DefaultCenterValues = {
  name: "",
  village: "",
  state: "",
  district: "",
  country: "",
  contactNumber: "",
  supportMailId: "",
  pincode: "",
  address: "",
  date: "",
};


export const DefaultCampValues = {
  name: "",
  date: "",
  centerName: "",
  address: "",
  village: "",
  gramPanchayat: "",
  postOffice: "",
  block: "",
  policeStation: "",
  tehseel: "",
  district: "",
  mandal: "",
  state: "",
  country: "",
  pincode: "",
  assignTo: "",
  assignToEmail: "",
  pocName: "",
  position: "",
  pocContactNumber: "",
  day: "",
  callingDate: "",
  letterSent: "",
  letterLink: "",
  campStatus: "",
  campStaffs: [],
  campStaffsEmail: [],
};


export const DefaultDoctorDetails = {
  name: "",
  email: "",
  gender: "",
  city: "",
  specializations: [],
  experience: undefined,
  education: [],
  contactNumber: "",
  hospitalName: "",
  registrationNo: "",
  fee: "",
};
