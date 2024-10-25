import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { tableFiltersPropsType } from "./tabletypes";

function TableFilters({setAddStudentView}:tableFiltersPropsType){

    function addStudentView(){
        setAddStudentView(true)


    }



    return(
        <div>
            <div className="p-5 flex flex-row w-[60vw] justify-between">
            <div className="flex flex-row  h-fit items-center gap-2 ">
                <div className="flex flex-row border w-[20vw] h-[7vh] rounded-md p-3 justify-between items-center">
                    <input className=" outline-none " placeholder="Search"/>
                    <ImCross className="cursor-pointer" />
                </div>
                <FaSearch className="cursor-pointer" />
            </div>
            <div onClick={()=>{addStudentView()}} className="w-[15vw] h-[7vh] cursor-pointer bg-black text-white rounded-md justify-center items-center flex" >Add Student</div>
        </div>
        
    
        </div>
    )
}
export default TableFilters