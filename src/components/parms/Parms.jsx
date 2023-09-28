import { useState } from "react";
import ParmsCard from "../ParmsCard/ParmsCard";
const Parms = ({parms}) => {
    const [data,setData] = useState(4)
    return (
        <div>
           <div className="grid md:grid-cols-2 gap-5">
            {
                parms?.slice(0,data).map(parm=><ParmsCard key={parm.id} parm={parm}></ParmsCard>)
            }
            </div> 
            <div className={data === parms && "hidden"}>
                <button
                 onClick={()=>setData()} className="text-white bg-[#009444] py-2 px-6 rounded ">See All
                 </button>
            </div>
        </div>
    );
};

export default Parms;