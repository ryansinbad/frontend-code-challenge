import React from 'react';
import './Datepicker.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export const Datepicker: React.FC<Props> = (props) => {
  return (
    <div className="datepicker-container">
      <label className="datepicker-label">{props.label}</label>
      <input
        type="date"
        className="datepicker-input"
        value={props.value}
        onChange={(e) =>
          props.onChange(
            e.target.value
              ? new Date(e.target.value).toISOString().split('T')[0]
              : ''
          )
        }
      />
    </div>
  );
};
