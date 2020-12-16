import style from './Search.module.css';

export const SearchBar = () => {
  return (
    <div className={style.searchBar}>
      <div className={style.inputWrapper}>
        <div className={style.iconWrapper}>
          <i className="material-icons md-18">search</i>
        </div>
        <input type="text" placeholder="search location" />
      </div>
      <button>Search</button>
    </div>
  )
}
