import React from 'react';
import { VisibilityFilterValues } from './VisibiltyFilterState';
import { LabeledRadioButton } from '../../components/LabeledRadioButton';

interface VisibilityCheckProps {
  label: VisibilityFilterValues;
  filter: VisibilityFilterValues;
  onChange: (visibilityFilter: any) => void;
}

export const VisibilityCheck: React.FC<VisibilityCheckProps> = ({ label, filter, onChange }) =>
  <LabeledRadioButton
    id={label}
    text={label}
    smMarginLeft={0}
    smMarginRight={0}
    mdMarginLeft={1}
    mdMarginRight={1}
    marginLeft={3}
    marginRight={3}
    shape="rounded"
    onChange={onChange}
    checked={label === filter}
  />;
