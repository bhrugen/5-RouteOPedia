import ProductList from "../ProductList";

function AllProducts() {
  return (
    <ProductList
      filterType="all"
      title="All Products"
      description="Complete product catalog:"
    />
  );
}

export default AllProducts;
