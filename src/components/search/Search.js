import style from './Search.module.css';
import { SearchBar } from './SearchBar';
import { LocationList } from './LocationList';

export const Search = ({ closeFunction = () => { } }) => {
  return (
    <section className={style.search}>
      <div className={style.closeBtnWrapper}>
        <i className="material-icons md-18 md-light" onClick={closeFunction}>close</i>
      </div>
      <SearchBar />
      <LocationList />
    </section>
  )
}