import React, { useCallback } from 'react';
import { Box } from 'gestalt';
import { useSelector, useDispatch } from 'react-redux';
import { visibilityFilterSelect } from '../../state/selectors';
import { DefaultContainer } from '../../components/DefaultContainer';
import { VisibilityFilterValues, setVisibilityFilter } from './VisibiltyFilterModel';
import { LabeledRadioButton } from '../../components/LabeledRadioButton';

export const VisibilityFilter: React.FC = () => {
  const filter = useSelector(visibilityFilterSelect)
  const dispatch = useDispatch();
  const onChange = useCallback(
    (newFilter: any) => dispatch(setVisibilityFilter({ visibilityFilter: newFilter })),
    [dispatch]
  );
  return (
    <Box
      display="flex"
      direction="row"
      width={"100%"}
      justifyContent="center"
      marginTop={3}
    >
      <DefaultContainer direction="row" justifyContent="center">
        {filters.map(label =>
          <VisibilityCheck
            key={label}
            label={label}
            filter={filter}
            onChange={onChange}
          />
        )}
      </DefaultContainer >
    </Box>
  );
}

const filters: Array<VisibilityFilterValues> = ["ALL", "DONE", "UNDONE"];

interface VisibilityLabelProps {
  label: VisibilityFilterValues;
  filter: VisibilityFilterValues;
  onChange: (visibilityFilter: any) => void;
}

const VisibilityCheck: React.FC<VisibilityLabelProps> = React.memo(({ label, filter, onChange }) =>
  <LabeledRadioButton
    id={label}
    text={label}
    smMarginLeft={0} smMarginRight={0}
    mdMarginLeft={1} mdMarginRight={1}
    marginLeft={3} marginRight={3}
    shape="rounded"
    onChange={onChange}
    checked={label === filter}
  />
);