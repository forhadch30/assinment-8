import MansCard from "./MansCard";
const Mans = ({mans}) => {
    console.log(mans)
    return (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {
            mans?.map(man=><MansCard key={man.id} man={man}></MansCard>)
           }
          </div>
        </div>
    );
};

export default Mans;