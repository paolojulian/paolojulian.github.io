import classNames from 'classnames';
import React, {
  FunctionComponent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useMemo,
  useRef,
  useState
} from 'react';

export type TextAreaProps = {
  canResize?: boolean;
  openByDefault?: boolean;
  label?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: FunctionComponent<TextAreaProps> = ({
  label,
  canResize = false,
  openByDefault = false,
  ...props
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const isOpened = useMemo(
    () => openByDefault || !!textAreaRef.current?.value || isFocused,
    [isFocused, textAreaRef, openByDefault]
  );

  return (
    <div
      className={classNames(
        'relative overflow-hidden',
        'bg-gray-100',
        'border border-gray-100',
        'rounded-sm',
        'focus-within:ring-gray-800 focus-within:ring-2'
      )}
    >
      <div
        className={classNames(
          'absolute inset-0 flex items-center font-bold text-sm uppercase px-4',
          'text-gray-700',
          'transition-transform duration-75',
          isOpened ? 'scale-0' : 'scale-100'
        )}
      >
        {label}
      </div>
      <label
        className={classNames(
          'transition-transform absolute top-2 left-2 text-xs font-bold text-gray-600 uppercase',
          'transition-transform duration-100',
          isOpened ? 'scale-100' : 'scale-0'
        )}
      >
        {label}
      </label>
      <textarea
        ref={textAreaRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={classNames(
          'py-6 px-2 pb-2 transparent w-full z-10 ring-0 outline-none',
          'bg-transparent',
          'font-medium',
          'transition-opacity',
          canResize ? '' : 'resize-none',
          isOpened ? 'opacity-100' : 'opacity-0'
        )}
        {...props}
      ></textarea>
    </div>
  );
};

export default TextArea;
