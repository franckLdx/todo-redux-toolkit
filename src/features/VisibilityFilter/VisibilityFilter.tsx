import React from 'react';
import { Box } from 'gestalt';
import { useSelector } from 'react-redux';
import { LabeledCheckBox } from '../../components/LabeledCheckBox';
import { visibilityFilterSelect } from '../../state/selectors';
import { DefaultContainer } from '../../components/DefaultContainer';
import { VisibilityFilterValues } from '../../components/VisibilityFilter/VisibiltyFilterModel';

export const VisibilityFilter: React.FC = () => {
  const filter = useSelector(visibilityFilterSelect)
  const onChange = () => { }
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
  onChange: () => void;
}

const VisibilityCheck: React.FC<VisibilityLabelProps> = ({ label, filter, onChange }) =>
  <LabeledCheckBox
    key={filter} id={filter}
    text={label}
    // marginLeft={3} marginRight={3}
    smMarginLeft={0} smMarginRight={0}
    mdMarginLeft={1} mdMarginRight={1}
    marginLeft={3} marginRight={3}
    shape="rounded"
    onChange={onChange}
    checked={label === filter}
  />