import { tableRowPropsType } from "./tabletypes"
import { MdDelete } from "react-icons/md";


function TableRow({c1,c2,c3,c4,className,c5,getStudents}:tableRowPropsType){
    function afterDelete(){
        getStudents()
    }


    async function deleteStudent() {
        let response = await fetch("https://studentmgmtapi.vercel.app/api/deleteStudent", {
          method: "POST",
          body: JSON.stringify({
            emailId: c3,
          }),
        });
      
        let serverData = await response.json();
        console.log(serverData)

        if(serverData.message === "success"){
            getStudents()
        }
       
        return serverData;
      }
    return(
        <div className="flex flex-row w-[60vw]  p-4 border-b">
            <div className="w-[27%]">{c1?c1:"-"}</div>
            <div className="w-[20%]">{c2?c2:"-"}</div>
            <div className="w-[35%]">{c3?c3:"-"}</div>
            <div className="w-[27%] ">{c4?c4:"-"}</div>
            <div className="w-[27%] ">{c5 === "Action"? c5:<MdDelete className="cursor-pointer" onClick={deleteStudent} />}</div>
            
        </div>
    )
       
    
}
export default TableRow