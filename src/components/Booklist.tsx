import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IBookItem } from "../redux/slices/searchbookSlice";
import Loader from "./Loader";
import BookItem from "./BookItem";

interface BooklistProps {
  books: IBookItem[];
}

const Booklist: FC<BooklistProps> = ({ books }) => {
  const isloading = useSelector<RootState, boolean>(
    (state) => state.searchbookSlice.isLoading
  );
  return (
    <div>
      {isloading ? (
        <Loader />
      ) : (
        <ul>
          {books.map((book) => {
            return <BookItem key={book.id} item={book} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Booklist;
