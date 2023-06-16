import Row from 'layouts/Row';
import TypedInstance from 'lib/typed.js';
import React, { FunctionComponent, useEffect } from 'react';
import { TypedOptions } from 'typed.js';
import SectionHeader from '../common/SectionHeader';

export type AboutSectionHeader = {
  mounted: boolean;
};

const sectionHeaders: TypedOptions['strings'] = [
  'Software Engineer',
  'Front-end Developer',
  'Musician',
  'Gamer',
];

const AboutSectionHeader: FunctionComponent<AboutSectionHeader> = ({
  mounted = false,
}) => {
  useEffect(() => {
    if (!mounted) return;

    const typed = TypedInstance('#typed', {
      strings: sectionHeaders,
    });
    return () => {
      typed.destroy();
    };
  }, [mounted]);

  return (
    <SectionHeader
      title='HELLO THERE.'
      description={
        <Row>
          I am a&nbsp;
          <span id='typed' className='text-orange-300'></span>
        </Row>
      }
    ></SectionHeader>
  );
};

export default AboutSectionHeader;
