import classNames from 'classnames';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';

type SectionHeaderThemes = 'light' | 'dark';

export type SectionHeaderProps = {
  title: string;
  description: string | React.ReactNode;
  theme?: SectionHeaderThemes;
};

const titleThemeColor: Record<SectionHeaderThemes, string> = {
  dark: 'text-slate-600',
  light: 'text-slate-400',
};
const descriptionThemeColor: Record<SectionHeaderThemes, string> = {
  dark: 'text-slate-50',
  light: 'text-slate-800',
};

const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
  title,
  description,
  theme = 'dark',
}) => {
  return (
    <Stack>
      <h4
        className={classNames(
          'font-extrabold tracking-widest text-lg md:text-xl',
          titleThemeColor[theme]
        )}
      >
        {title}
      </h4>
      <h2
        className={classNames(
          'font-bold tracking-wide text-2xl md:text-4xl',
          descriptionThemeColor[theme]
        )}
      >
        {description}
      </h2>
    </Stack>
  );
};

export default SectionHeader;
