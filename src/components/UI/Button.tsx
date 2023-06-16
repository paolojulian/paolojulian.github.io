import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

type ButtonVariants = 'primary' | 'gray';

export type ButtonProps = {
  variant?: ButtonVariants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonColorMap: Record<ButtonVariants, string> = {
  primary: 'bg-primary-500 text-white',
  gray: 'bg-gray-600 text-white',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, variant = 'primary' } = props;

    return (
      <button
        className={classNames(
          'py-5 px-14',
          'rounded-[30px]',
          'font-bold text-base',
          buttonColorMap[variant]
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
