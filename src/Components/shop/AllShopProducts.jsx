import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination";
import SingleCard from "../common/SingleCard";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../SearchSlice";

const AllShopProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const reduxProduct = useSelector((state) => state.searchProduct.value);
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  // ...navigation to product page
  const navigate = useNavigate();
  const showProductPage = (item) => {
    navigate(`/product/${item.id}`);
  };

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        if (!reduxProduct) return setProducts(res.data);
        const filteredProduct = res.data.filter(
          (item) => item.title == reduxProduct
        );
        setProducts(filteredProduct);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reduxProduct]);

  // add to card.........

  const addToCart = (item) => {
    const proDuctids = JSON.parse(localStorage.getItem("proId")) || [];
    proDuctids.push(item);
    localStorage.setItem("proId", JSON.stringify(proDuctids));
    // console.log(JSON.parse(localStorage.getItem("proId")));
    dispatch(addTocart(item));
  };

  const start = (page - 1) * itemsPerPage;
  const currentItems = products.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  return (
    <section className="flex mt-7  flex-col">
      <div className="right justify-center flex flex-wrap gap-3">
        {currentItems?.map((singleData) => (
          <div key={singleData.id}>
            <SingleCard
              addToCart={() => addToCart(singleData.id)}
              showProductPage={() => showProductPage(singleData)}
              title={singleData.title}
              img={singleData.images[0]}
              price={singleData.price}
              category={singleData.category.slug}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          setPage={setPage}
        />
      </div>
    </section>
  );
};

export default AllShopProducts;
