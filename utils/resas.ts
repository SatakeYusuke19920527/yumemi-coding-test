import axios from 'axios';
import { PrefecturesListType } from '../types/types';

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
export const getDemographics = async (prefCodes: string[]) => {
  // requestするURLを作成
  const requestUrls = prefCodes.map((pfc) => {
    return `/population/composition/perYear?prefCode=` + pfc;
  });

  // 並列処理で人口数を取得
  const result = await axios.all(
    requestUrls.map((requestUrl) => {
      return fetchDemographicsData(requestUrl);
    })
  );
  return result.map((data: any, index: number) => {
    return { ...data, prefCode: prefCodes[index], ...data };
  });
};

/**
 * 引数に与えられたURLで人口数を取得する
 * @param requestUrl
 * @returns 人口数
 */
export const fetchDemographicsData = (requestUrl: string) => {
  return new Promise((resolve, reject) => {
    resasAPI
      .get(requestUrl, resasApiHeaders)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
