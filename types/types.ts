export type HomeLayoutProps = ResasDataType;

export type IndexProps = {
  prefectures: any[];
};

export type PrefectureListProps = {
  prefectureList: PrefectureType[];
};

export type GraphProps = {
  demographics: DemographicsType[];
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
  prefCode?: number;
  prefName?: string;
  message: string | null;
  result: DemographicsResultType;
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
