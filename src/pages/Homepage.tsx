import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Homepage = () => {
  return (
    <div>
      <h2>Homepage</h2>
      <Link to={"/about"}>
        <Button>Shad CN</Button>
      </Link>
    </div>
  );
};

export default Homepage;
