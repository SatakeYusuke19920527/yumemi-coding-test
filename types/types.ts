import { ReactNode } from 'react';

export type HomeLayoutProps = {
  children: ReactNode;
};

export type IndexProps = {
  prefectureList: any[];
};

export type PrefectureType = {
  prefCode: number;
  prefName: string;
};

export type PrefecturesListType = {
  message: string | null;
  result: PrefectureType[];
};

export type ResasDataType = {
  prefectureList: PrefectureType[];
  demographics: DemographicsType[];
};

export type DemographicsType = {
  message: string | null;
  result: DemographicsResultType[];
};

export type DemographicsResultType = {
  boundaryYear: number;
  data: DemographicsDataType[];
};

export type DemographicsDataType = {
  label: string;
  data: {
    year: number;
    value: number;
  }[];
};
