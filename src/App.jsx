import Header from "./components/Header";
import Form from "./components/Form";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <>
      <Header />
      <div className="w-full md:flex md:justify-around block mt-5 ">
        <Form books={books} setBooks={setBooks} />
        <BookList books={books} />
      </div>
    </>
  );
}

export default App;
