import Base from "../BasePage/Base";
import { AppState } from "../Context/AppProvider";
import CrumBar from "./CrumBar";
import StudentCart from "./StudentCart";

function StudentList({CrumState, setCrumState}){
    const {data} = AppState();
    return(
<Base>
<CrumBar
CrumState={CrumState}
setCrumState={setCrumState}/>

{data.map((stud, idx)=>(
        <StudentCart
        student={stud}
        key={idx}
        CrumState={CrumState}
        setCrumState={setCrumState}/>
    ))} 
</Base>
    )
}
export default StudentList;