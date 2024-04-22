import ReceptsList from "../components/ReceptsList";
import {useCollection} from "../hooks/useCollection";
const Home = () => {
  const { data: recepts } = useCollection();
  console.log(recepts);
  return (
    <div>
      <h1>All Recepts</h1>
      {recepts && <ReceptsList recepts={recepts} />}
    </div>
  );
};
export default Home;
