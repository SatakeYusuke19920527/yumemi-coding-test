import { FC } from 'react';
import { GraphProps } from '../../types/types';

const Graph: FC<GraphProps> = ({ demographics }) => {
  console.log('🚀 ~ file: Graph.tsx:5 ~ demographics', demographics);
  return (
    <section>
      <h2>Graph</h2>
    </section>
  );
};

export default Graph;
