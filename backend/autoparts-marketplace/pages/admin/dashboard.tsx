import { useEffect, useState } from "react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function AdminDashboard() {
  const [session, loading] = useSession();
  const [users, setUsers] = useState([]);
  const [listings, setListings] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!loading && session?.user?.role !== "admin") {
      router.push("/");
    }

    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch("/api/admin/listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, [loading, session]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email} - {user.role}
          </li>
        ))}
      </ul>
      <h2>Listings</h2>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            {listing.title} - ${listing.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
