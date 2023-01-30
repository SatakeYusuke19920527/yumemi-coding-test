import type { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import HomeLayout from '../components/templates/HomeLayout';
import {
  get_demographics,
  get_prefectures_list,
  selectResasData,
} from '../features/resasSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { IndexProps } from '../types/types';
import { getDemographics, getJapanesePrefectures } from '../utils/resas';

export const getStaticProps: GetStaticProps = async () => {
  const prefectureList = await getJapanesePrefectures();
  return {
    props: {
      prefectures: prefectureList ? prefectureList : [],
    },
    revalidate: 10,
  };
};

const Home: NextPage<IndexProps> = ({ prefectures }) => {
  const dispatch = useAppDispatch();
  const { prefectureList, demographics } = useAppSelector(selectResasData);
  useEffect(() => {
    dispatch(get_prefectures_list(prefectures));
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, prefectures]);

  const getData = async () => {
    const res = await getDemographics(['1', '2', '3']);
    console.log('🚀 ~ file: index.tsx:31 ~ getData ~ res', res);
    dispatch(get_demographics(res));
  };
  return (
    <HomeLayout prefectureList={prefectureList} demographics={demographics} />
  );
};

export default Home;
