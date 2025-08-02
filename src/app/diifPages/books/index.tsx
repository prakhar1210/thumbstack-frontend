import { useEffect, useState } from "react";
import API from "@/lib/api";
import { getUserCookie, removeUserCookie } from "@/lib/auth";
import BookCard from "@/components/BookCard";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const user = getUserCookie();

  const fetchBooks = async () => {
    const res = await API.get("/books");
    setBooks(res.data);
  };

  const logout = async () => {
    await API.post("/auth/logout");
    removeUserCookie();
    location.href = "/";
  };

  useEffect(() => {
    if (!user) location.href = "/auth/login";
    else fetchBooks();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">📚 Your Book Collection</h1>
        <button onClick={logout} className="text-red-500 underline">
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book: any) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}
