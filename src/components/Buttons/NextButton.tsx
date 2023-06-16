import classNames from 'classnames';
import Stack from 'layouts/Stack';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

export type NextButtonProps = {
  // No Props
} & ButtonHTMLAttributes<HTMLButtonElement>;

const NextButton: FunctionComponent<NextButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={classNames(
        'w-20 h-20',
        'rounded-3xl',
        'transition-colors bg-yellow-500 hover:bg-yellow-400 active:scale-95'
      )}
    >
      <Stack className="justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </Stack>
    </button>
  );
};

export default NextButton;
