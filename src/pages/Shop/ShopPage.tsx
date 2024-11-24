import { useDispatch } from "react-redux";
import { StyledShopPage } from "./StyledShopPage";
import { AppDispatch } from "../../Redux/store";
import { resetProducts } from "../../Redux/Actions/ProductActions";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductList from "../../components/Product/ProductList";
const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || ""; // Get the query from the URL
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(resetProducts());
  }, [dispatch]);
  return (
    <StyledShopPage>
      <div className="shop-content">
        <div className="shop-content-wrapper">
          <div className="shop-page">
            <h1>Products</h1>
            {/* Pass the query to ProductList */}
            <ProductList query={query} />
          </div>
        </div>
      </div>
    </StyledShopPage>
  );
  };
  
  export default ShopPage;