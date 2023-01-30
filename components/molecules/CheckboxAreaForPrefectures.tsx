import styles from '../../styles/components/molecules/CheckboxAreaForPrefectures.module.css';
import { PrefectureType } from '../../types/types';
import Checkbox from '../atoms/Checkbox';
import Label from '../atoms/Label';
const CheckboxAreaForPrefectures = ({
  prefecture,
}: {
  prefecture: PrefectureType;
}) => {
  return (
    <div className={styles.container}>
      <Checkbox prefecture={prefecture} />
      <Label prefecture={prefecture} />
    </div>
  );
};

export default CheckboxAreaForPrefectures;
