import Header from "./components/Header";
import Form from "./components/Form";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <Header />
      <div className="w-full sm:flex sm:justify-around block mt-5 ">
        <Form />
        <BookList />
      </div>
    </>
  );
}

export default App;
