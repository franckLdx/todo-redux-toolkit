import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibilityFilter } from '../../state/selectors';
import { DefaultContainer } from '../../components/DefaultContainer';
import { VisibilityFilterValues, setVisibilityFilter } from './VisibiltyFilterState';
import { VisibilityCheck } from './VisibilityCheck';

interface VisibilityFilterProps {
  filter: VisibilityFilterValues;
  onChange: (newFilter: VisibilityFilterValues) => void;
}

export const VisibilityFilter: React.FC<VisibilityFilterProps> = ({ filter, onChange }) =>
  <FilterContainer>
    {filters.map(label =>
      <VisibilityCheck
        key={label}
        label={label}
        filter={filter}
        onChange={onChange}
      />
    )}
  </FilterContainer>

const filters: Array<VisibilityFilterValues> = ["ALL", "DONE", "UNDONE"];

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

const FilterContainer = styled(DefaultContainer).attrs(() => ({
  direction: "row",
  justifyContent: "center",
  shape: "rounded",
}))``;
