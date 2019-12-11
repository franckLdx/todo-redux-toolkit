import React from 'react';
import { LabeledCheckBox } from '../../components/LabeledCheckBox';
import { useSelector } from 'react-redux';
import { visibilityFilterSelect } from '../../state/selectors';
import { DefaultContainer } from '../DefaultContainer';

export const VisibilityFilter: React.FC = () => {
  const filter = useSelector(visibilityFilterSelect)
  const onChange = () => { }
  return (
    <DefaultContainer>
      <LabeledCheckBox
        key="All" id="ALL"
        text="ALL"
        checked={filter === "ALL"}
        onChange={onChange} shape="rounded"
      />
      <LabeledCheckBox
        key="DONE" id="DONE"
        text="DONE"
        checked={filter === "DONE"}
        onChange={onChange} shape="rounded"
      />
      <LabeledCheckBox
        key="UNDONE" id="UNDONE"
        text="UNDONE"
        checked={filter === "UNDONE"}
        onChange={onChange} shape="rounded"
      />
    </DefaultContainer>
  );
}