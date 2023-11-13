import Loading from "../components/Loading";
import Card from "../components/Card";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

const MainPage = () => {
  // subscribe to context structure
  // provides access to data specified as value in the context structure
  const { products } = useContext(ProductContext);

  return (
    <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4">
      {/* if there is no data, show loading  */}
      {!products && <Loading />}

      {/* when the data come print it */}
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MainPage;
