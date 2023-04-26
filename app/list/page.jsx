export default function Home() {
  let product = ["Tomatoes", "Pasta", "Cocount"];
  return (
    <>
      <h2>Products</h2>
      {product.map((el, idx) => {
        return (
          <div className="food" key={`product_${idx}`}>
            <img src={`/images/food${idx}.png`} className="food-img" />
            <h4>{el} $40</h4>
          </div>
        );
      })}
    </>
  );
}
