import axios from 'axios';
import { PrefecturesListType, PrefectureType } from '../types/types';

const resasAPI = axios.create({
  baseURL: 'https://opendata.resas-portal.go.jp/api/v1',
});

const resasApiHeaders = {
  headers: {
    'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY,
  },
};

/**
 * 都道府県一覧を取得する
 * @returns 都道府県一覧
 */
export const getJapanesePrefectures = async () => {
  const res = await resasAPI.get<PrefecturesListType>(
    '/prefectures',
    resasApiHeaders
  );
  return res.data.result;
};

/**
 * 指定した都道府県の人口数を取得する
 * @param prefCodes
 * @returns 指定した都道府県の人口数
 */
export const getDemographics = async (prefectures: PrefectureType[]) => {
  // requestするURLを作成
  const requestUrls = prefectures.map(({ prefCode }) => {
    return `/population/composition/perYear?prefCode=${prefCode}`;
  });

  // 並列処理で人口数を取得
  const result = await Promise.all(requestUrls.map(fetchDemographicsData));
  return result.map((data, index) => ({
    ...data,
    prefCode: prefectures[index].prefCode,
    prefName: prefectures[index].prefName,
  }));
};

/**
 * 引数に与えられたURLで人口数を取得する
 * @param requestUrl
 * @returns 人口数
 */
export const fetchDemographicsData = async (requestUrl: string) => {
  const res = await resasAPI.get(requestUrl, resasApiHeaders);
  return res.data;
};
