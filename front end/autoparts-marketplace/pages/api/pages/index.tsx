import { useEffect, useState } from "react";

export default function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("/api/listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <div>
      <h1>AutoParts Marketplace</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
            <p>Price: ${listing.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
