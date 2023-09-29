import React, { useState, useEffect } from "react";
import axios from "axios";

const COHORT_NAME = "2302-ACC-CT-WEB-PT-B";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/posts`);
        setListings(response.data.data.posts);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <h1>Listings</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing._id}>{listing.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
