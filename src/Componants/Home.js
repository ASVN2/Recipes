import axios from "axios";
import { useEffect, useState } from "react";
import Recipes from "./Recipes/Recipes";
function Home() {
  const title = "All Respes";
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3005/resipes").then((res) => {
      setData(res.data);
    });
  }, []);

  return <div className="Home ">{data && <Recipes data={data} title={title} />}</div>;
}

export default Home;
