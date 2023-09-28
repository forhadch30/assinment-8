const Banner = () => {
    return (
        <div className="h-[50vh] text-center mt-52">
                    <div className="form-control">
                    <h2 className="text-4xl font-bold mb-8">I Grow By Helping People In Need</h2>
                     <label className="label">
                    </label>
                    <label className="input-group">
                    <input  type="text" placeholder="Search here...." className="input input-bordered w-[25%] h-[35px]" />
                    <span className="bg-[#FF444A;] py-2 px-4 rounded text-white">Search</span>
                     </label>
                     </div>
        </div>
    );
};

export default Banner;