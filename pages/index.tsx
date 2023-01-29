import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useEffect } from 'react';
import HomeLayout from '../components/templates/HomeLayout';
import { get_demographics, get_prefectures_list } from '../features/resasSlice';
import { useAppDispatch } from '../hooks/useRTK';
import styles from '../styles/Home.module.css';
import { IndexProps } from '../types/types';
import { getDemographics, getJapanesePrefectures } from '../utils/resas';

export const getStaticProps: GetStaticProps = async () => {
  const prefectureList = await getJapanesePrefectures();
  return {
    props: {
      prefectureList: prefectureList ? prefectureList : [],
    },
    revalidate: 10,
  };
};

const Home: NextPage<IndexProps> = ({ prefectureList }) => {
  console.log('🚀 ~ file: index.tsx:20 ~ prefectureList', prefectureList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(get_prefectures_list(prefectureList));
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, prefectureList]);

  const getData = async () => {
    const res = await getDemographics(['1', '2', '3']);
    dispatch(get_demographics(res));
    console.log('🚀 ~ file: index.tsx:31 ~ getData ~ res', res);
  };
  return (
    <HomeLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>test</h1>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </HomeLayout>
  );
};

export default Home;
