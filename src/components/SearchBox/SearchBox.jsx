import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ inputValue, updateInputValue }) {
    const searchByName = useId();
  return (
    <div className={css.searchBoxContainer}>
      <label htmlFor={searchByName}>Find contacts by name</label>
      <input
        type="text"
        className={css.searchByName}
        id={searchByName}
        name="searchByName"
        value={inputValue}
        onChange={(event) => updateInputValue(event.target.value)}
      />
    </div>
  );
}
