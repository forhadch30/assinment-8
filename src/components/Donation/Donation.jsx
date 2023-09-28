import { useLoaderData } from "react-router-dom";
import Parms from "../parms/Parms";
const Donation = () => {
    const parms = useLoaderData()
    return (
        <div>
            <div>
             <Parms parms={parms}></Parms>
            </div>
        </div>
    );
};

export default Donation;