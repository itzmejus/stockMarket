import React, { useState } from "react";
import Axios from 'axios'
import { InputGroup, FormControl, Button } from "react-bootstrap";
function CreateStock() {
  const [companyName, setCompanyName] = useState("");
  const [marketCap, setMarketCaap] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [stockPE, setStockPE] = useState("");
  const [dividendYield, setDividendYield] = useState("");
  const [roce, setRoce] = useState("");
  const [roe, setRoe] = useState("");
  const [recerves, setRecerves] = useState("");
  const [debt, setDebt] = useState("");

  const create=()=>{
    Axios.post('http://localhost:5000/insert',
    {companyName,marketCap,currentPrice,stockPE,dividendYield,roce,roe,recerves,debt})
    alert('data saved')
  }
  return (
    <div className="container">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="company name"
          aria-label="company name"
          type="text"
          aria-describedby="basic-addon1"
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="marketCap"
          type="number"
          aria-label="marketCap"
          aria-describedby="basic-addon1"
          onChange={(e) => setMarketCaap(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="currentPrice"
          type="number"
          aria-label="currentPrice"
          aria-describedby="basic-addon1"
          onChange={(e) => setCurrentPrice(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="stockPE"
          type="number"
          aria-label="stockPE"
          aria-describedby="basic-addon1"
          onChange={(e) => setStockPE(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="dividendYield"
          type="number"
          aria-label="dividendYield"
          aria-describedby="basic-addon1"
          onChange={(e) => setDividendYield(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="roce"
          type="number"
          aria-label="roce"
          aria-describedby="basic-addon1"
          onChange={(e) => setRoce(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="roe"
          type="number"
          aria-label="roe"
          aria-describedby="basic-addon1"
          onChange={(e) => setRoe(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="recerves"
          type="number"
          aria-label="recerves"
          aria-describedby="basic-addon1"
          onChange={(e) => setRecerves(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="debt"
          type="number"
          aria-label="debt"
          aria-describedby="basic-addon1"
          onChange={(e) => setDebt(e.target.value)}
        />
      </InputGroup>
      <Button onClick={create}>ADD stock</Button>
    </div>
  );
}

export default CreateStock;
