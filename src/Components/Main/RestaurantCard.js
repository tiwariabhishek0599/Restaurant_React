const RestaurantCard = ({ item }) => {
  const StarRating = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? "#ffcc00" : "#ddd" }}>
          &#9733;
        </span>
      );
    }

    return (
      <>
        {stars} {rating} / 5
      </>
    );
  };

  return (
    <div className="card">
      <div className="title">
        <h3>{item.name}</h3>
        <div className="ratings">{StarRating(item.rating)}</div>
      </div>
      <div className="address">
        <p>
          <svg
            width="14"
            height="14"
            viewBox="0 0 384 512"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
          </svg>{" "}
          {item.address}, {item["address line 2"]}
        </p>
      </div>
      <div className="post">
        <span>
          {item.outcode} {item.postcode}
        </span>
      </div>
      <div className="base">
        <div className="food-type">{item["type_of_food"]}</div>
        <a href={item.URL}>Visit Menu</a>
      </div>
    </div>
  );
};

export default RestaurantCard;
