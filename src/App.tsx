import { useEffect, useState } from "react";
import Table from "./Table";
import { studentsDataType } from "./tabletypes";
import AddStudent from "./AddStudent";

function App() {
  const[studentsData,setStudentsData]= useState<studentsDataType>()

  const [addStudentView,setAddStudentView] = useState<boolean>(false)

  async function getStudents() {
    let response = await fetch(" https://studentmgmtapi.vercel.app/api/allStudents");
    let serverData = await response.json();
    setStudentsData(serverData.students)
    

    return serverData;
  }

  useEffect(()=>{
    getStudents()
  },[])
  
 if(studentsData === undefined)  return<div>Data Fenching.....</div>



  return (
    <div className="flex flex-row">
      
      <div className="p-5"><Table studentsData={studentsData} setAddStudentView={setAddStudentView} getStudents={getStudents}/></div> 
      {
        true && <div><AddStudent getStudents={getStudents} setAddStudentView={setAddStudentView}/></div>
      }
    </div>
   
  )
}

export default App
