import { useEffect, useState } from 'react';
import {
  delete_showPrefectures,
  set_showPrefectures,
} from '../../features/resasSlice';
import { useAppDispatch } from '../../hooks/useRTK';
import { PrefectureType } from '../../types/types';

const Checkbox = ({ prefecture }: { prefecture: PrefectureType }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isChecked) {
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
  }, [isChecked]);

  return (
    <input
      type="checkbox"
      name={prefecture.prefName}
      id={prefecture.prefCode.toString()}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};

export default Checkbox;
