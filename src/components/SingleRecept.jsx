import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const SingleRecept = () => {
  const { id } = useParams();
  const { data: recept } = useFetch("http://localhost:3000/recepts/" + id);

  return (
    <div>
      {recept && (
        <div>
          <h1 className="text-2xl mb-4 font-semibold">Recept elements</h1>
          <img
            src={recept.image}
            alt=""
            className="w-full h-80 object-cover rounded mb-5 "
          />
          <div>
            <h1 className="font-bold text-2xl mb-5">{recept.name}</h1>
          </div>
          <span className="flex gap-2 justify-start items-center">
            Ingredients:
            <span>{recept.ingredients}</span>
          </span>
          <span>
            <span>
              Cooking time:
              {recept.time} minutes
            </span>
          </span>
          <div>
            <span className="text-xl font-medium">Method</span>
            <p>{recept.body}</p>
          </div>
        </div>
      )}
      <Link to="/" className=" btn btn-primary">
        Back
      </Link>
    </div>
  );
};

export default SingleRecept;
