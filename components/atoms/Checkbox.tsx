import { useRef } from 'react';
import {
  delete_showPrefectures,
  set_showPrefectures,
} from '../../features/resasSlice';
import { useAppDispatch } from '../../hooks/useRTK';
import { PrefectureType } from '../../types/types';

const Checkbox = ({ prefecture }: { prefecture: PrefectureType }) => {
  const checkBoxRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (checkBoxRef.current?.checked) {
      dispatch(
        set_showPrefectures({
          prefCode: prefecture.prefCode,
          prefName: prefecture.prefName,
        })
      );
    } else {
      dispatch(
        delete_showPrefectures({
          prefCode: prefecture.prefCode,
          prefName: prefecture.prefName,
        })
      );
    }
  };

  return (
    <input
      type="checkbox"
      name={prefecture.prefName}
      id={prefecture.prefCode.toString()}
      onChange={handleClick}
      ref={checkBoxRef}
    />
  );
};

export default Checkbox;
