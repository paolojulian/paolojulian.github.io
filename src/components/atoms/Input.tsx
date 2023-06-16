import classNames from 'classnames';
import React, {
  FunctionComponent,
  InputHTMLAttributes,
  useMemo,
  useRef,
  useState
} from 'react';

export type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FunctionComponent<InputProps> = ({ label, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const isOpened = useMemo(() => {
    return !!inputRef.current?.value || isFocused;
  }, [isFocused, inputRef]);

  return (
    <div
      className={classNames(
        'relative overflow-hidden',
        'bg-gray-100',
        'border border-gray-100',
        'rounded-sm',
        'focus-within:ring-gray-600 focus-within:ring-2'
      )}
    >
      <div
        className={classNames(
          'absolute inset-0 flex items-center font-bold text-sm uppercase px-4',
          'text-gray-700',
          'transition-opacity',
          isOpened ? 'opacity-0' : 'opacity-100'
        )}
      >
        {label}
      </div>
      <label
        className={classNames(
          'transition-transform absolute top-2 left-2 text-xs font-bold text-gray-600 uppercase',
          'transition-transform',
          isOpened ? 'scale-100' : 'scale-0'
        )}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={classNames(
          'py-6 px-2 pb-2 transparent w-full z-10 ring-0 outline-none',
          'bg-transparent',
          'font-medium',
          'transition-opacity',
          isOpened ? 'opacity-100' : 'opacity-0'
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
