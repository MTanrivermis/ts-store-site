import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import { removeFavorites } from "../features/productSlice";
import { toastSuccessNotify } from "../helper/Toastify";
import { Product, VoidFunc } from "../models/models";

const FavoritesPage = ({}) => {
  const { favorites } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handleRemove: VoidFunc = (product) => {
    const newData: Product[] = favorites.filter(
      (item) => item.id !== product.id
    );
    dispatch(removeFavorites(newData));
    toastSuccessNotify("Product removed..");
  };

  return (
    <div>
      <h1 className="font-bold-text-2xl text-white text-center m-3">
        My Favorites Page
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-5 p-5">
        {favorites.map((item) => (
          <Card
            key={item.id}
            text="Remove"
            item={item}
            handleFunc={handleRemove}
          />
        ))}
        {favorites.length === 0 && (
          <h3 className="font-bold- text-2xl text-red-500 text-center mt-52">
            No favorites...
          </h3>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
function dispatch(arg0: {
  payload: import("../models/models").Product[];
  type: "products/removeFavorites";
}) {
  throw new Error("Function not implemented.");
}
