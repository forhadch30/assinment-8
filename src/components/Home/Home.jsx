import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Mans from "../Mans/Mans";
const Home = () => {
    const mans = useLoaderData();
    return (
        <div>
           <Banner></Banner>
           <Mans mans={mans}></Mans>
        </div>
    );
};

export default Home;



echo "# assinment-8" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/forhadch30/assinment-8.git
git push -u origin main