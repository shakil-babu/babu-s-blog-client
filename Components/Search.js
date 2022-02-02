import { useContext } from 'react';
import {FaSearch} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';
import styles from '../styles/Home.module.css';
import { darkmodeContext } from './Layout';

const Search = ({changeHandler, toggle, isSearch,val}) => {
    const [darkmode, setDarkmode] = useContext(darkmodeContext);

    return (
        <>
         {/* search bar area */}
         <div className={styles.searchbar_icons}>
                <div className={styles.iconsArea}>
                    {!isSearch ? <FaSearch onClick={toggle} className={darkmode ? styles.searchIcon : styles.searchIcon_light}/> :<ImCross onClick={toggle} className={styles.crossIcon} />}
                </div>
                {
                isSearch && (
                    <div className={darkmode ? styles.flex_input: styles.flex_light_input}>
                        <h4>সার্চ করুন :</h4>
                        <input value={val} onChange={changeHandler} type="text" placeholder='এখানে খুজুন যেমন : var-let-const' />
                    </div>
                )
                }
            </div>
        </>
    )
}

export default Search
