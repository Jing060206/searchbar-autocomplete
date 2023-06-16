import React, { FC } from "react";
import { IBookItem } from "../redux/slices/searchbookSlice";
import { useDispatch } from "react-redux";

interface BookItemProps {
  item: IBookItem;
}

const BookItem: FC<BookItemProps> = ({ item }) => {
  const {
    id,
    volumeInfo: {
      title = "N/A",
      publishedDate = "N/A",
      description = "N/A",
      authors,
      imageLinks: { smallThumbnail, thumbnail } = {
        smallThumbnail: "",
        thumbnail: "",
      },
    },
  } = item;

  return (
    <li className="book-item">
      <ul>
        <li>
          <b>title: </b>
          {title}
        </li>
        <li>
          <b>published date: </b>
          {publishedDate}
        </li>
        <li>
          <b>authors: </b>
          {authors?.join(", ") ?? "N/A"}
        </li>
        <li>
          <b>description: </b>
          {description}
        </li>
      </ul>
    </li>
  );
};

export default BookItem;
