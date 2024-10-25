import { ImCross } from "react-icons/im";
import { addStudentPropsType } from "./tabletypes";
import { useState } from "react";

function AddStudent({setAddStudentView,getStudents}:addStudentPropsType) {
  const[firstName,setFirstName] = useState("")
  const[id,setId] = useState("")
  const[emailId,setEmailId] = useState("")
  const[mobileNumber,setMobileNumber] = useState("")




  function close(){
    setAddStudentView(false)
  }

    async function saveStudent() {
      let response = await fetch("https://studentmgmtapi.vercel.app/api/createStudent", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          id: id,
          emailId: emailId,
          mobileNumber: mobileNumber,
        }),
      });
    
      let serverData = await response.json();
      console.log(serverData)
      if(serverData.message ===  "created") {
        getStudents() 
        setFirstName("")
        setId("")
        setEmailId("")
        setMobileNumber("")
      }

  }




  return (
    <div className="p-10">
      <div className="w-[25vw] h-[65vh] border">
        <div className="flex flex-row p-4 w-full h-16 text-lg font-bold justify-between items-center bg-slate-200">
          <div>Add Student</div>
          <ImCross className="cursor-pointer" onClick={()=>{close()}} />
        </div>
        <div className="p-5 ml-3 flex flex-col gap-5">
          <input value={firstName} onChange={(event)=>{setFirstName(event?.target?.value)}} className="w-60 h-10 border rounded-lg  p-3" placeholder="First Name " />
          <input value={id} onChange={(event)=>{setId(event?.target?.value)}} className="w-60 h-10 border rounded-lg  p-3" placeholder="ID " />
          <input value={emailId} onChange={(event)=>{setEmailId(event?.target?.value)}} className="w-60 h-10 border rounded-lg  p-3" placeholder="Email " />
          <input value={mobileNumber} onChange={(event)=>{setMobileNumber(event?.target?.value)}} className="w-60 h-10 border rounded-lg  p-3" placeholder="Mobile Number " />
        </div>
        <div className="flex w-full h-fit justify-center">
        <button className="w-40 h-10 bg-black rounded-lg text-white " onClick={saveStudent}  >Save</button>
        </div>
      </div>
    </div>
  );
}
export default AddStudent;
