import s from "./SearchBox.module.css";

const SearchBox = ({ setInputValue }) => {
  return (
    <div>
      <input
        type="search"
        className={s.searchInput}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
