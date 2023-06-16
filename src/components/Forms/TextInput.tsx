import classNames from 'classnames';
import CloseIcon from 'components/atoms/CloseIcon';
import EyeIcon from 'components/Icons/EyeIcon';
import EyeSlashIcon from 'components/Icons/EyeSlashIcon';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, {
  FunctionComponent,
  InputHTMLAttributes,
  useMemo,
  useRef,
} from 'react';

type RoundedCorner =
  | 'full'
  | 'bottom'
  | 'top'
  | 'none'
  | 'top-right'
  | 'top-left';
type TextInputTheme = 'default' | 'white' | 'outlined';

export type TextInputProps = {
  label: string;
  name: string;
  value: string;
  LabelPrependComponent?: React.ReactNode;
  clearable?: boolean;
  error?: string | boolean;
  showErrorMessage: boolean;
  openOnDefault?: boolean;
  rounded?: RoundedCorner;
  theme?: TextInputTheme;
  onClear?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const colorTheme: Record<TextInputTheme, string> = {
  default: 'bg-slate-100 hover:bg-slate-200/80',
  white: 'bg-white hover:bg-slate-200',
  outlined: 'bg-none border border-slate-500 hover:bg-slate-700',
};

const roundedMap: Record<RoundedCorner, string> = {
  full: 'rounded-3xl',
  bottom: 'rounded-b-3xl',
  top: 'rounded-t-3xl',
  'top-left': 'rounded-tl-3xl',
  'top-right': 'rounded-tr-3xl',
  none: '',
};

const labelColorTheme: Record<TextInputTheme, string> = {
  default: 'text-primary-800',
  white: 'text-primary-800',
  outlined: 'text-primary-500',
};
const inputColorTheme: Record<TextInputTheme, string> = {
  default: 'text-slate-800',
  white: 'text-slate-800',
  outlined: 'text-slate-300',
};

const TextInput: FunctionComponent<TextInputProps> = ({
  label,
  name,
  value,
  type,
  LabelPrependComponent = null,
  clearable = false,
  error = false,
  showErrorMessage = true,
  openOnDefault = false,
  rounded = 'none',
  theme = 'default',
  onClear = () => {
    /** Placeholder */
  },
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const willShow = React.useMemo(
    () => !!openOnDefault || isFocused || !!value,
    [isFocused, value]
  );
  const localType = useMemo(
    () => (showPassword ? 'text' : type),
    [showPassword, type]
  );

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    onClear();
  };

  const handleTogglePasswordClick = () => setShowPassword((prev) => !prev);

  return (
    <Stack className='space-y-1 w-full'>
      <div
        className={classNames(
          'transition-colors relative group',
          !!error ? 'bg-red-100 hover:bg-red-200/80' : colorTheme[theme],
          !!error ? 'border-2 border-red-500' : '',
          roundedMap[rounded]
        )}
      >
        <Stack className='absolute inset-0 h-full justify-center px-5 z-0 pointer-events-none text-left w-fit'>
          <Row
            className={classNames(
              'items-center space-x-2',
              'transition-transform',
              willShow ? 'opacity-0 scale-0' : 'opacity-1 scale-100'
            )}
          >
            {LabelPrependComponent}
            <label
              className={classNames(
                'font-extrabold tracking-wide',
                'text-slate-500 text-sm'
              )}
              htmlFor={name}
            >
              {label}
            </label>
          </Row>
        </Stack>
        <Stack className='z-10'>
          <label
            className={classNames(
              'transition-transform',
              'absolute top-2 left-4',
              willShow ? 'opacity-1 scale-100' : 'opacity-0 scale-0',
              'uppercase font-extrabold text-xs',
              !!error ? 'text-red-500' : labelColorTheme[theme]
            )}
            htmlFor={name}
          >
            {label}
          </label>

          <div className='absolute top-1/2 -translate-y-1/2 right-3'>
            {!props.disabled && clearable && inputRef.current?.value ? (
              <button
                className={classNames(
                  'ring-0 outline-0 select-none rounded-full',
                  value
                    ? 'opacity-100'
                    : 'opacity-0 group-focus-within:opacity-100'
                )}
                type='button'
                onClick={handleClear}
                tabIndex={-1}
              >
                <CloseIcon className='fill-slate-600 hover:fill-slate-700 transition-colors h-6 w-6' />
              </button>
            ) : null}
            {type === 'password' ? (
              <button
                className={classNames(
                  'ring-0 outline-0 select-none',
                  value
                    ? 'opacity-100'
                    : 'opacity-0 group-focus-within:opacity-100'
                )}
                type='button'
                onClick={handleTogglePasswordClick}
                tabIndex={-1}
              >
                {localType === 'password' ? (
                  <>
                    <EyeSlashIcon className='stroke-slate-600 w-6 h-6' />
                  </>
                ) : (
                  <EyeIcon className='stroke-slate-600 w-6 h-6' />
                )}
              </button>
            ) : null}
          </div>

          <input
            ref={inputRef}
            className={classNames(
              'transition-opacity',
              'bg-transparent pt-7 pb-2 px-4',
              'font-medium',
              willShow ? 'opacity-1' : 'opacity-0',
              inputColorTheme[theme],
              roundedMap[rounded]
            )}
            {...props}
            name={name}
            value={value}
            type={localType}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </Stack>
      </div>
      {showErrorMessage ? (
        <div className='text-sm text-red-500'>{error}</div>
      ) : null}
    </Stack>
  );
};

export default TextInput;
