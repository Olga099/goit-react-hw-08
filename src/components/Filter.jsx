import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../redux/filters/selectors';
import { setNameFilter } from '../redux/filters/slice';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={e => dispatch(setNameFilter(e.target.value))}
    />
  );
}
