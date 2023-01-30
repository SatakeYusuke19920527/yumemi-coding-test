import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { FC } from 'react';
import { GraphProps } from '../../types/types';

const Graph: FC<GraphProps> = ({ demographics }) => {
  let series: Highcharts.SeriesOptionsType[] = [];
  let categories: string[] = [];

  for (const demographic of demographics) {
    const {
      result: { data },
    } = demographic;
    const populationData = data.find((d) => d.label === '総人口');
    if (!populationData) continue;

    const dataValues = populationData.data.map((d) => ({
      value: d.value,
      year: d.year.toString(),
    }));
    categories = [...categories, ...dataValues.map((d) => d.year)];
    series.push({
      type: 'line',
      name: demographic.prefName,
      data: dataValues.map((d) => d.value),
    });
  }

  const options: Highcharts.Options = {
    title: {
      text: '',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    series:
      series.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Graph;
