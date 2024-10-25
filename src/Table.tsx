import TableFilters from "./TableFilters";
import TableRow from "./TableRow";
import { tablePropsType } from "./tabletypes";

function Table({studentsData,setAddStudentView,getStudents}:tablePropsType) {
  return (
    <div>
      <div>
        <TableFilters setAddStudentView={setAddStudentView} />
      </div>
      <div className="border-l border-r border-t">
      <div className="mt-[5vh] font-bold text-xl ">
        <TableRow c1="First Name" c2="ID" c3="Email" c4="Mobile Number" className="font-bold" c5="Action" getStudents={getStudents}/>
      </div>
      <div className=" h-ft overflow-auto">
        {studentsData.map((student)=> {return <TableRow c1={student.firstName} c2={student.id} c3={student.emailId} c4={student.mobileNumber} c5={student.delete} getStudents={getStudents}/>} )}
      </div>
      </div>
    </div>
  );
}
export default Table;
