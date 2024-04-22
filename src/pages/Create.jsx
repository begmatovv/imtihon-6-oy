import { useEffect, useState } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";

import FormInput from "../components/FormInput";
import useCreate from "../hooks/useCreate";
export const action = async ({ request }) => {
  let formData = await request.formData();
  const title = formData.get("title");
  const cookingTime = formData.get("cookingTime");
  const method = formData.get("method");
  const image = formData.get("image");
  return { title, cookingTime, method, image };
};
function Create() {
  const { data, addNewDoc } = useCreate();
  const createData = useActionData();
  const navigate = useNavigate();
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (e) => {
    e.preventDefault();

    if (!ingredients.includes(ingredient)) {
      setIngredients((prev) => {
        return [...prev, ingredient];
      });
    }
    setIngredient("");
  };
  useEffect(() => {
    if (createData && !data) {
      const newRecept = { ...createData, ingredients };
      addNewDoc(newRecept);
    }

    if (data) {
      navigate("/");
    }
  }, [createData, data]);

  return (
    <div className="grid place-items-center">
      <div className="max-w-96 w-full">
        {" "}
        <h1 className="text-3xl text-center font-bold mb-10">
          Create New Recipie
        </h1>
        <Form method="POST">
          <FormInput label="Title" type="text" name="title" />
          <div className="flex justify-center flex-col">
            <div className="flex items-center gap-5 w-full">
              <label className="form-control w-full mb-3">
                <div className="label">
                  <span className="label-text">Ingredient</span>
                </div>
                <input
                  onChange={(e) => setIngredient(e.target.value)}
                  type="text"
                  name="ingredients"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  value={ingredient}
                />
              </label>
              <button
                onClick={addIngredient}
                className="btn btn-secondary flex"
              >
                Add
              </button>
            </div>
            <p className="text-left mt-2 mb-3">
              Ingredients:
              {ingredients.map((ing) => {
                return <span key={ing}>{ing},</span>;
              })}
            </p>
          </div>
          <FormInput label="Photo URL" type="url" name="image" />
          <FormInput label="Cooking Time" type="number" name="cookingTime" />
          <FormInput label="Method" type="text" name="method" />
          <div>
            <button className="btn btn-secondary w-full mb-3" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Create;
