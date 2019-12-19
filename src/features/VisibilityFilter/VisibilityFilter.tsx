import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibilityFilter } from '../../state/selectors';
import { DefaultContainer } from '../../components/DefaultContainer';
import { VisibilityFilterValues, setVisibilityFilter } from './VisibiltyFilterState';
import { LabeledRadioButton } from '../../components/LabeledRadioButton';

interface VisibilityFilterProps {
  filter: VisibilityFilterValues;
  onChange: (newFilter: VisibilityFilterValues) => void;
}

export const VisibilityFilter: React.FC<VisibilityFilterProps> = ({ filter, onChange }) =>
  <DefaultContainer direction="row" justifyContent="center" shape="rounded">
    {filters.map(label =>
      <VisibilityCheck
        key={label}
        label={label}
        filter={filter}
        onChange={onChange}
      />
    )}
  </DefaultContainer >

const filters: Array<VisibilityFilterValues> = ["ALL", "DONE", "UNDONE"];

interface VisibilityLabelProps {
  label: VisibilityFilterValues;
  filter: VisibilityFilterValues;
  onChange: (visibilityFilter: any) => void;
}

const VisibilityCheck: React.FC<VisibilityLabelProps> = ({ label, filter, onChange }) =>
  <LabeledRadioButton
    id={label}
    text={label}
    smMarginLeft={0} smMarginRight={0}
    mdMarginLeft={1} mdMarginRight={1}
    marginLeft={3} marginRight={3}
    shape="rounded"
    onChange={onChange}
    checked={label === filter}
  />;

const ConnectedVisibilityFilter: React.FC = () => {
  const filter = useSelector(getVisibilityFilter)
  const dispatch = useDispatch();
  const onChange = useCallback(
    (newFilter: any) => { dispatch(setVisibilityFilter({ visibilityFilter: newFilter })) },
    [dispatch]
  );
  return <VisibilityFilter filter={filter} onChange={onChange} />;
}

export default ConnectedVisibilityFilter;
