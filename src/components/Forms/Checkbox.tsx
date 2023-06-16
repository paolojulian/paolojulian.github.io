import classNames from 'classnames';
import React, { FC, useCallback, useEffect, useState } from 'react';
import CheckIcon from '../Icons/CheckIcon';

export type CheckboxProps = {
  id: string;
  defaultChecked?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
};

const Checkbox: FC<CheckboxProps> = ({
  id,
  defaultChecked = false,
  disabled = false,
  onChange = () => {
    /** Placeholder */
  },
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleCheck = () => {
    if (!disabled) {
      setChecked((prev) => !prev);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedOnChange = useCallback(onChange, []);

  useEffect(() => {
    memoizedOnChange(checked);
  }, [checked, memoizedOnChange]);

  return (
    <label
      htmlFor={id}
      className={classNames(
        'flex items-center cursor-pointer w-8 h-8 relative',
        disabled ? 'pointer-events-none' : 'pointer-events-auto'
      )}
    >
      <input
        type="checkbox"
        id={id}
        className={classNames('sr-only rounded-full w-8 h-8')}
        checked={checked}
        onChange={handleCheck}
      />
      <div
        className={classNames(
          `${
            checked
              ? 'bg-primary-500 hover:bg-primary-600'
              : 'bg-gray-200 hover:bg-gray-300 border-2 border-gray-300'
          } absolute inset-0  w-8 h-8 rounded-full transition-colors active:scale-95`,
          disabled ? 'bg-gray-300': ''
        )}
      />
      <CheckIcon
        className={classNames(
          checked ? 'block' : 'hidden',
          'w-[14px] h-[10px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  stroke-white'
        )}
      />
    </label>
  );
};

export default Checkbox;
