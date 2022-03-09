import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import Axios from "axios";
function Homepage() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:5000/read").then((response) => {
      setCompanies(response.data);
    });
    console.log(companies);
  }, []);
  return (
    <div className="container ">
      <h1>Stock with us</h1>
      <div class="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="search for a company"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button className="btn btn-outline-success" id="inputGroup-sizing-lg">
          Search
        </button>
      </div>
      {companies
        .filter((val) => {
          if (searchTerm === " ") {
            return val;
          } else if (
            val.companyName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <div key={key} className="company">
              <button type="button" class="btn btn-outline-dark">
                {val.companyName}
              </button>
            </div>
          );
        })}

      <div className="container-1">
        <h1>Available companies</h1>

        {companies.map((companie,key) => {
          return (
            <div key={key}  className="company">
              <button type="button" className="btn btn-outline-dark">
                {companie.companyName}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
