import { PrefectureType } from '../../types/types';

const Label = ({ prefecture }: { prefecture: PrefectureType }) => {
  return (
    <label
      id={prefecture.prefCode.toString()}
      htmlFor={prefecture.prefCode.toString()}
    >
      {prefecture.prefName}
    </label>
  );
};

export default Label;
