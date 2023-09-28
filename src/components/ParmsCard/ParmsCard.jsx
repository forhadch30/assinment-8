const ParmsCard = ({parm}) => {
  const {image,title,price, button, description} = parm
  return (
<div>
<div>
<div className="relative flex w-full max-w-[48rem] mt-10 flex-row rounded-xl bg-blue-200 bg-clip-border text-gray-700 shadow-md">
<div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
  <img
    src={image}
    alt="image"
    className="h-full w-full object-cover"
  />
</div>
<div className="p-6">
  <p><button className="bg-[#0052FF;] text-white py-1 px-2 rounded">{button}</button></p>
  <h3 className="mt-2 text-2xl font-bold">{title}</h3>
  <p className="mt-2 text-1xl text-blue-500 font-bold">{price}</p>
  <button className="bg-[#0052FF;] text-white py-2 rounded px-6 mt-5">{description}</button>
</div>
</div> 
</div> 
</div>
  );
};

export default ParmsCard;