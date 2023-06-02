import Book from "./Book";

const BookList = () => {
  return (
    <div className="block  sm:w-2/5 w-full h-screen overflow-y-scroll">
      <div className="p-2">
        <h1 className=" text-3xl font-bold text-center text-black">
          <span className="text-red-500">Book</span> List
        </h1>
      </div>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

export default BookList;
