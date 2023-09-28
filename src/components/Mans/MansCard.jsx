import { Link } from "react-router-dom";
const MansCard = ({man}) => {
  const {image,title,id, button} = man || {}
    return (
      <Link to={`/mans/${id}`}>
      <div  className="relative  mt-10 flex w-[312px] h-[280px] flex-col rounded-xl bg-[#79C23F;] bg-clip-border text-gray-700 shadow-md" >
       
       <div className="relative overflow-hidden rounded-t bg-white bg-clip-border text-gray-700">
       
        <img
          src={image}
          className="h-full w-full object-cover"
        />
          
      </div>
     
      <div className="p-6">
      <button className="text-xl font-medium bg-[blue] text-white rounded py-1 px-2">{button}</button>
      <h3 className="text-1xl font-bold mt-3 text-white">{title}</h3>
      </div>
      
    </div>
    </Link>
    );
};

export default MansCard;