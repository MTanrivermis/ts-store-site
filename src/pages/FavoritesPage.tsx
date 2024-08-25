import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import { removeFavorites } from "../features/productSlice";
import { toastSuccessNotify } from "../helper/Toastify";
import { Product, VoidFunc } from "../models/models";

const FavoritesPage = ({}) => {
  const { favorites } = useAppSelector((state) => state.products);
  const dispatch =useAppDispatch();




  const handleRemove: VoidFunc = (product) => {
    const newData:Product[] = favorites.filter(item => item.id !== product.id);
    dispatch(removeFavorites(newData));
    toastSuccessNotify("Product removed..")
  };

  return (
    <div>
      Favorites Page
      <div className="flex justify-center items-center flex-wrap gap-5 p-5">
        {favorites.map((item) => (
          <Card
            key={item.id}
            text="Remove"
            item={item}
            handleFunc={handleRemove}
          />
        ))}
        {favorites.length && (
          <h3 className="font-bold- text-2xl text-white text-centerm-3">
            No favorites...
          </h3>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
function dispatch(arg0: { payload: import("../models/models").Product[]; type: "products/removeFavorites"; }) {
  throw new Error("Function not implemented.");
}

