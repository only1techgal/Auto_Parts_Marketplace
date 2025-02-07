import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Define Types for Users and Listings
interface User {
  id: string;
  email: string;
  role: string;
}

interface Listing {
  id: string;
  title: string;
  price: number;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  // Use State with Types
  const [users, setUsers] = useState<User[]>([]);
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    if (loading) return; // Wait for session to load
    if (!session?.user || session.user.role !== "admin") {
      router.push("/");
    }
  }, [loading, session]);

  useEffect(() => {
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data));

    fetch("/api/admin/listings")
      .then((res) => res.json())
      .then((data: Listing[]) => setListings(data));
  }, []);

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
