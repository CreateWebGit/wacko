import style from "./searchform.module.scss"
import { BiSearch } from 'react-icons/bi';

const SearchForm = () => {
    return (
        <div className={style.searchForm}>
            <input  style={{ backgroundImage: `url(${BiSearch})` }} className={style.test} type="text" name="search" placeholder="Search.." />
        </div>
    )
}

export default SearchForm