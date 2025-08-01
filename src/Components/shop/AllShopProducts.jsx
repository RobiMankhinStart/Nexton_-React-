import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination";
import SingleCard from "../common/SingleCard";
import { useNavigate } from "react-router";

const AllShopProducts = () => {
  const [products, setProducts] = useState([]);
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
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // add to card.........

  const addToCart = (item) => {
    const proDuctids = JSON.parse(localStorage.getItem("proId")) || [];
    proDuctids.push(item);
    localStorage.setItem("proId", JSON.stringify(proDuctids));

    // console.log(JSON.parse(localStorage.getItem("proId")));
  };

  const start = (page - 1) * itemsPerPage;
  const currentItems = products.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  return (
    <section className="flex flex-col">
      <div className="right flex flex-wrap gap-3">
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
