export type tableRowPropsType = {
  c1: string;
  c2: string;
  c3: string;
  c4: string;
  c5:string;
  className?: string;
  getStudents : any;
};
export type studentsDataType = {
  firstName: string;
  id: string;
  emailId: string;
  mobileNumber: string;
  delete:string;
}[];

export type tablePropsType = {
  studentsData: studentsDataType;
  setAddStudentView: React.Dispatch<React.SetStateAction<boolean>>;
  getStudents? : any;
};
export type tableFiltersPropsType = { setAddStudentView: React.Dispatch<React.SetStateAction<boolean>>;}

export type addStudentPropsType = { setAddStudentView: React.Dispatch<React.SetStateAction<boolean>>; getStudents:any} 