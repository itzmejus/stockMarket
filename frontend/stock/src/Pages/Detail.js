import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../styles/HomePage.css";

function Detail() {
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/read").then((response) => {
      setStocks(response.data);
    });
    console.log(stocks);
  }, []);
  return (
    <div className="container2">
      {stocks.map((stock, key) => {
        return (
          <div  key={key} className="item">
            <div className="item">
              <Card border="primary" style={{ width: "10rem" }}>
                <Card.Header>Company Name {stock.companyName}</Card.Header>
                <Card.Body>
                  <Card.Title>Market Cap </Card.Title>
                  <Card.Text>${stock.marketCap}</Card.Text>
                </Card.Body>
              </Card>
              <Card border="primary" style={{ width: "10rem" }}>
                <Card.Body>
                  <Card.Title>Current Price </Card.Title>
                  <Card.Text>${stock.currentPrice}</Card.Text>
                </Card.Body>
              </Card>
              <Card border="primary" style={{ width: "10rem" }}>
                <Card.Body>
                  <Card.Title>Stock P/E </Card.Title>
                  <Card.Text>${stock.stockPE}</Card.Text>
                </Card.Body>
              </Card>
              <Card border="primary" style={{ width: "10rem" }}>
                <Card.Body>
                  <Card.Title>Dividend Yield </Card.Title>
                  <Card.Text>0.{stock.dividendYield}%</Card.Text>
                </Card.Body>
              </Card>
              <Card border="primary" style={{ width: "10rem" }}>
                <Card.Body>
                  <Card.Title>ROCE </Card.Title>
                  <Card.Text>{stock.roce}%</Card.Text>
                </Card.Body>
              </Card>
              <Card border="primary" style={{ width: "10rem" }}>
                <Card.Body>
                  <Card.Title>ROE </Card.Title>
                  <Card.Text>{stock.roe}%</Card.Text>
                </Card.Body>
              </Card>
              <Card border="primary" style={{ width: "10rem" }}>
                <Card.Body>
                  <Card.Title>Reserves </Card.Title>
                  <Card.Text>{stock.recerves}</Card.Text>
                </Card.Body>
              </Card>
              <Card border="primary" style={{ width: "10rem" }}>
                <Card.Body>
                  <Card.Title>Debt </Card.Title>
                  <Card.Text>{stock.debt}Cr</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Detail;
