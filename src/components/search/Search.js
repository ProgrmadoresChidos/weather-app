import style from './Search.module.css';
import { SearchBar } from './SearchBar';
import { LocationList } from './LocationList';

export const Search = ({ handleClose = () => { } }) => {
  return (
    <section className={style.search}>
      <div className={style.closeBtnWrapper}>
        <i className="material-icons md-18 md-light" onClick={handleClose}>close</i>
      </div>
      <SearchBar />
      <LocationList />
    </section>
  )
}