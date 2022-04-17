import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import ItemCard from "../ItemCard";

//the page where we load the data
export const ViewItems = (props) => {
  const [items, setItems] = useState([]);
  const columnsPerRow = 3;

  const base_url = "http://localhost:3100";
  // eslint-disable-next-line
  useEffect(() => {
    setItems(props.items);
  });

  return (
    <div style={{ marginTop: "2rem", width: "100%", margin: "auto" }}>
      <Container>
        <Row xs={1} md={columnsPerRow}>
          {items.map((e) => {
            let image_url = `${base_url}/images/${e.item_pic}`;
            //console.log("image_url: ", image_url);
            return (
              <div>
                <div style={{ marginTop: "2rem" }}></div>
                <ItemCard
                  style={{ marginBottom: "4rem" }}
                  title={e.item_name}
                  description={e.item_desc}
                  price={e.item_price}
                  image={image_url}
                ></ItemCard>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
