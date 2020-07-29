import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const { Circle, label, onChange, checked, name, value, className } = props;
  return (
    <div className={className}>
      <label className='action-selecAll'>
        {label}
        <input
          name={name}
          type='checkbox'
          value={value}
          onChange={onChange}
          checked={checked}
        />

        <span className={Circle === false ? 'checkAll' : 'checkCircle'} />
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  Circle: false,
  label: '',
  className: 'item-checkAll',
};

Checkbox.propTypes = {
  Circle: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
};
export default Checkbox;
