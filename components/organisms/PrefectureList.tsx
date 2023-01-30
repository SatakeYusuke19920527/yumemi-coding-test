import { FC } from 'react';
import styles from '../../styles/components/organisms/PrefectureList.module.css';
import { PrefectureListProps } from '../../types/types';
import CheckboxAreaForPrefectures from '../molecules/CheckboxAreaForPrefectures';

const PrefectureList: FC<PrefectureListProps> = ({ prefectureList }) => {
  return (
    <section className={styles.container}>
      <main className={styles.prefContainer}>
        {prefectureList.map((prefecture, index) => {
          return (
            <CheckboxAreaForPrefectures key={index} prefecture={prefecture} />
          );
        })}
      </main>
    </section>
  );
};

export default PrefectureList;
