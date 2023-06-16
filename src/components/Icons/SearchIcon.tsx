import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type SearchIconProps = {
  // No Props
} & React.SVGProps<SVGSVGElement>;

const SearchIcon: FunctionComponent<SearchIconProps> = ({ ...props }) => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_183_1509)">
        <path
          d="M15.0259 14.3473L18.5951 17.9157L17.4159 19.0948L13.8476 15.5257C12.5199 16.59 10.8684 17.1689 9.16675 17.1665C5.02675 17.1665 1.66675 13.8065 1.66675 9.6665C1.66675 5.5265 5.02675 2.1665 9.16675 2.1665C13.3067 2.1665 16.6667 5.5265 16.6667 9.6665C16.6692 11.3682 16.0903 13.0196 15.0259 14.3473ZM13.3542 13.729C14.4118 12.6414 15.0025 11.1835 15.0001 9.6665C15.0001 6.44317 12.3892 3.83317 9.16675 3.83317C5.94341 3.83317 3.33341 6.44317 3.33341 9.6665C3.33341 12.889 5.94341 15.4998 9.16675 15.4998C10.6838 15.5022 12.1417 14.9116 13.2292 13.854L13.3542 13.729Z"
          fill="#8070FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_183_1509">
          <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
