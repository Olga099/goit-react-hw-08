import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        Search contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
