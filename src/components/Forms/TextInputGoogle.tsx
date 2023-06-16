import classNames from "classnames";
import CloseIcon from "components/atoms/CloseIcon";
import EyeIcon from "components/Icons/EyeIcon";
import EyeSlashIcon from "components/Icons/EyeSlashIcon";
import Row from "layouts/Row";
import Stack from "layouts/Stack";
import React, {
  FunctionComponent,
  InputHTMLAttributes,
  useMemo,
  useRef,
} from "react";

type TextInputGoogleTheme = "default" | "white";

export type TextInputGoogleProps = {
  label: string;
  name: string;
  value: string;
  LabelPrependComponent?: React.ReactNode;
  theme?: TextInputGoogleTheme;
  error?: string | boolean;
  clearable?: boolean;
  onClear?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const colorTheme: Record<TextInputGoogleTheme, string> = {
  default: "bg-gray-100 hover:bg-gray-200/80",
  white: "bg-white",
};

const TextInputGoogle: FunctionComponent<TextInputGoogleProps> = ({
  label,
  name,
  value,
  LabelPrependComponent = null,
  type,
  clearable = false,
  error = false,
  theme = "default",
  onClear = () => {
    /** Placeholder */
  },
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const willShow = React.useMemo(
    () => isFocused || !!value,
    [isFocused, value]
  );
  const localType = useMemo(
    () => (showPassword ? "text" : type),
    [showPassword, type]
  );

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onClear();
  };

  const handleTogglePasswordClick = () => setShowPassword((prev) => !prev);

  return (
    <Stack className="space-y-1">
      <div
        className={classNames(
          'border-2 border-gray-400',
          "rounded-lg transition-colors relative group",
          !!error ? "bg-red-100 hover:bg-red-200/80" : colorTheme[theme],
          !!error ? "ring-2 ring-red-500" : ""
        )}
      >
        <Stack className="absolute inset-0 h-full justify-center px-5 z-0 pointer-events-none text-left w-fit">
          <Row
            className={classNames(
              "items-center space-x-2",
              "transition-transform",
              willShow ? "opacity-0 scale-0" : "opacity-1 scale-100"
            )}
          >
            {LabelPrependComponent}
            {/* <label
              className={classNames(
                "font-medium tracking-wide",
                "text-gray-500"
              )}
              htmlFor={name}
            >
              {label}
            </label> */}
          </Row>
        </Stack>
        <Stack className="z-10">
          <label
            className={classNames(
              "transition-transform",
              "absolute left-3 top-1/2 bg-white px-[8px]",
              willShow ? "-translate-y-[35px]" : "-translate-y-1/2",
              "font-bold text-sm tracking-wide",
              "text-primary-800"
            )}
            htmlFor={name}
          >
            <span className={classNames(
              willShow ? "scale-50" : "scale-100",
            )}>

            {label}
            </span>
          </label>

          <div className="absolute top-1/2 -translate-y-1/2 right-3">
            {!props.disabled && clearable && inputRef.current?.value ? (
              <button
                className={classNames(
                  "ring-0 outline-0 select-none rounded-full",
                  value
                    ? "opacity-100"
                    : "opacity-0 group-focus-within:opacity-100"
                )}
                type="button"
                onClick={handleClear}
                tabIndex={-1}
              >
                <CloseIcon className="fill-gray-600 hover:fill-gray-700 transition-colors h-6 w-6" />
              </button>
            ) : null}
            {type === "password" ? (
              <button
                className={classNames(
                  "ring-0 outline-0 select-none",
                  value
                    ? "opacity-100"
                    : "opacity-0 group-focus-within:opacity-100"
                )}
                type="button"
                onClick={handleTogglePasswordClick}
                tabIndex={-1}
              >
                {localType === "password" ? (
                  <>
                    <EyeSlashIcon className="stroke-gray-600 w-6 h-6" />
                  </>
                ) : (
                  <EyeIcon className="stroke-gray-600 w-6 h-6" />
                )}
              </button>
            ) : null}
          </div>

          <input
            ref={inputRef}
            className={classNames(
              "transition-opacity",
              "rounded-lg bg-transparent py-4 px-3 text-gray-800",
              "font-medium",
              willShow ? "opacity-1" : "opacity-0"
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
      <div className="text-sm text-red-500">{error}</div>
    </Stack>
  );
};

export default TextInputGoogle;
