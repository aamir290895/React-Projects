import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "../CustomHooks/UseFetch";

const Item = () => {
  const {data} = useFetch('https://fakestoreapi.com/products');

  const [originalData, setOriginalData] = useState([]);

  const searchItem = useSelector((state) => state.fi.data);

  console.log("bhai yyyy", searchItem);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (searchItem !== "") {
      const filterData = originalData.filter((item) =>
        item.title.toLowerCase().includes(searchItem.toLowerCase())
      );
       setOriginalData(filterData);
    } else {
      if (data) {
        setOriginalData(data);
      }
    }
  }, [searchItem, originalData]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("https://fakestoreapi.com/products");

  //     const data = await response.json();
  //     setOriginalData(data);
  //   } catch {
  //     console.error("Error fetching data:");
  //   }
  // };

  return (
    <div className="body-container">
      <div className="sidebar">
        <ul>
          <li>hiijais</li>
          <li>hiijais</li>
          <li>hiijais</li>
          <li>hiijais</li>
        </ul>
      </div>
      <div className={"flex card-container"}>
        {originalData.map(
          (
            item // Note the parentheses here to return the JSX
          ) => (
            <Card key={item.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} className={"img"} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>{" "}
                {/* Use 'title' instead of 'description' */}
                <Card.Text>
                  <strong>{`$` + item.price}</strong>
                </Card.Text>
                <button
                  variant="primary"
                  className={"add-to-cart-btn w3-circle"}
                >
                  Add To Cart
                </button>
              </Card.Body>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default Item;
