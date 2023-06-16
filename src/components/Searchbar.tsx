import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  search,
  updateKeyword,
  autoComplete,
} from "../redux/slices/searchbookSlice";
import { AppDispatch, RootState } from "../redux/store";
import style from "./searchbar.module.css";

const Searchbar = () => {
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const keyword = useSelector<RootState, string>(
    (state) => state.searchbookSlice.keyword
  );

  const suggestionList = useSelector<RootState, any[]>(
    (state) => state.searchbookSlice.suggestions
  );

  const handleSubmit = () => {
    dispatch(search());
  };

  return (
    <div>
      <input
        value={keyword}
        onChange={(e) => {
          if (e.target.value == "") {
            setShowSuggestion(false);
          } else {
            dispatch(autoComplete());
            setShowSuggestion(true);
          }
          dispatch(updateKeyword(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>search</button>
      {showSuggestion && (
        <ul className={style.suggestionList}>
          {suggestionList.map((item) => {
            return <li key={item.id}>{item.volumeInfo.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
