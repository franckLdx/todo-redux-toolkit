import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibilityFilter } from '../../app/selectors';
import { DefaultContainer } from '../../common/Containers/DefaultContainer';
import { VisibilityFilterValues, changed } from './VisibiltyFilterSlice';
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
    (newFilter: any) => { dispatch(changed({ visibilityFilter: newFilter })) },
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
