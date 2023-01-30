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
  const { prefectureList, demographics, showPrefectures } =
    useAppSelector(selectResasData);
  useEffect(() => {
    dispatch(get_prefectures_list(prefectures));
    getDemographicsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, prefectures, showPrefectures]);

  const getDemographicsData = async () => {
    const res = await getDemographics(showPrefectures ? showPrefectures : []);
    dispatch(get_demographics(res));
  };
  return (
    <HomeLayout prefectureList={prefectureList} demographics={demographics} />
  );
};

export default Home;
