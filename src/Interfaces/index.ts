export interface IUser {
  id?: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface IPersonalInfo {
  id: number;
  name: string;
  last_name: string;
  second_last_name: string;
  gender: string;
  gender_other: string | null;
  date_of_birth: Date;
  city_of_birth: string;
  state_of_birth: string;
  country_of_birth: string;
}

export interface IAddress {
  id: number;
  street: string;
  in_between_street_a: string;
  in_between_street_b: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  proof_of_address: string;
}

export interface IProfile {
  id: number;
  phone: string;
  country_code: string;
  email: string;
  alt_email: string;
  reference: string;
  other_reference: string;
}

export interface IAcademicInfo {
  id: number;
  software_devel_comments: string;
  degree_level: string;
  informal_education: string;
  other_education: string;
}

export interface IFormalEducationInfo {
  id: number;
  university_name: string;
  state: string;
  country: string;
  career_name: string;
  classes_completed: boolean;
  proof_classes_completed: string;
  degree_completed: boolean;
  proof_degree_completed: string;
  license_completed: boolean;
  proof_license_completed: string;
}

export interface IScholarshipInfo {
  id: number;
  level: string;
  kind: string;
  period: number;
}

export interface IBankAccountInfo {
  id: number;
  acc_number: bigint;
  clabe: bigint;
  bank: string;
}

export interface ISkills {
  id: number;
  preferred_programming_language: string;
  experience: string;
  disability: string;
}

export interface IAddressExtraInfo {
  id: number;
  type_of_residency: string;
  other_residency: string;
  people: string;
}

export interface IGovernmentInfo {
  id: number;
  curp: string;
  identification_number: string;
}
