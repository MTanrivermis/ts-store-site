import axios from "axios";
import SearchComp from "../components/SearchComp";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchFail,
  fetchStart,
  getSuccessProduct,
} from "../features/productSlice";
import { EventFunc, Products } from "../models/models";

const Home = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { loading, error, productsList } = useAppSelector(
    (state) => state.products
  );

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/products/search?q=${search}`
      );
      console.log(data);
      dispatch(getSuccessProduct(data.products));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value)
  // }

  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchComp handleChange={handleChange} />
      {loading ? (
        error ? (
          <div>
            <p className="text-center text-red-600"> Something went wrong...</p>
          </div>
        ) : (
          <div>
            <p className="text-center text-red-600"> Products Loading...</p>
          </div>
        )
      ) : (
        <div>
          {productsList.map((item) => (
            <p>{item.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
