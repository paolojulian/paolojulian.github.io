import React, { FunctionComponent } from 'react';

export type UnknownBoxProps = {
  // No Props
} & React.SVGProps<SVGSVGElement>;

const UnknownBox: FunctionComponent<UnknownBoxProps> = (props) => {
  return (
    <svg width="70" height="57" viewBox="0 0 70 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35.997 13.722C35.971 13.462 35.971 13.358 35.971 13.228C35.971 12.214 36.309 11.278 37.115 10.732L38.311 9.926C39.819 8.912 40.963 7.482 40.963 5.402C40.963 2.75 38.909 0.175999 35.269 0.175999C31.265 0.175999 29.523 3.114 29.523 5.506C29.523 5.974 29.575 6.39 29.679 6.754L32.201 7.066C32.097 6.78 32.019 6.234 32.019 5.792C32.019 4.154 33.007 2.464 35.269 2.464C37.349 2.464 38.363 3.894 38.363 5.428C38.363 6.442 37.869 7.378 36.985 7.976L35.841 8.756C34.307 9.796 33.683 11.096 33.683 12.812C33.683 13.15 33.683 13.41 33.709 13.722H35.997ZM33.137 17.44C33.137 18.376 33.891 19.13 34.827 19.13C35.763 19.13 36.543 18.376 36.543 17.44C36.543 16.504 35.763 15.724 34.827 15.724C33.891 15.724 33.137 16.504 33.137 17.44Z"
        fill="#798393"
      />
      <g clipPath="url(#clip0_113_5283)">
        <path
          d="M61.6901 28.95V45.63L35.0701 55.63V29.01L61.6901 19.01"
          stroke="#798393"
          strokeWidth="1.75"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.29999 19.01L0.98999 26.01L27.61 36.01L34.93 29.01L42.38 36.01L69.01 26.01L61.69 19.01L44.15 12.88"
          stroke="#798393"
          strokeWidth="1.75"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.30005 19.01L34.93 29.01V55.63L8.30005 45.63V28.54"
          stroke="#798393"
          strokeWidth="1.75"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.30005 19.01L27.45 12.75"
          stroke="#798393"
          strokeWidth="1.75"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_113_5283">
          <rect width="69.52" height="44.38" fill="white" transform="translate(0.23999 12)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UnknownBox;
