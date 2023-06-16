import classNames from 'classnames';
import Container from 'components/container';
import Button from 'components/UI/Button';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import ComponentCard from '../components/ComponentCard';
import ComponentGroup from '../components/ComponentGroup';
import ComponentSection from '../components/ComponentSection';

export type ComponentsPageProps = {
  // No Props
};

const ComponentsPage: FunctionComponent<ComponentsPageProps> = (props) => {
  return (
    <Stack className='p-20 2xl:p-32 gap-20'>
      <Row className='items-center justify-start gap-10 xl:gap-52'>
        <Stack className='gap-10 max-w-2xl'>
          <Stack className='gap-1'>
            <h4 className='text-base font-semibold text-gray-800'>
              Crafted by Paolo Vincent Julian
            </h4>
            <h1 className='text-5xl font-black text-gray-900'>
              My own Beautiful UI components, crafted mostly with TailwindCSS
            </h1>
            <p className='text-base text-gray-500'>
              Professionally designed, fully responsive, expertly crafted
              components that you can just drop into your Tailwind projects and
              customize to your heart’s content.
            </p>
          </Stack>
          <div>
            <Button variant='primary'>Request a design</Button>
          </div>
        </Stack>
        <div>
          <Image
            src={require('../assets/images/SampleComponents.png')}
            alt={'Sample Components'}
          />
        </div>
      </Row>

      <ComponentGroup title='Marketing Websites'>
        <ComponentSection title='Sections'>
          <li>
            <ComponentCard name='Hero' numberOfComponents={4} />
          </li>
          <li>
            <ComponentCard name='Features' numberOfComponents={8} />
          </li>
          <li>
            <ComponentCard name='CTA' numberOfComponents={1} />
          </li>
          <li>
            <ComponentCard name='Hero' numberOfComponents={4} />
          </li>
          <li>
            <ComponentCard name='Hero' numberOfComponents={4} />
          </li>
          <li>
            <ComponentCard name='Features' numberOfComponents={8} />
          </li>
          <li>
            <ComponentCard name='CTA' numberOfComponents={1} />
          </li>
          <li>
            <ComponentCard name='Hero' numberOfComponents={4} />
          </li>
          <li>
            <ComponentCard name='Hero' numberOfComponents={4} />
          </li>
          <li>
            <ComponentCard name='Features' numberOfComponents={8} />
          </li>
          <li>
            <ComponentCard name='CTA' numberOfComponents={1} />
          </li>
          <li>
            <ComponentCard name='Hero' numberOfComponents={4} />
          </li>
        </ComponentSection>
      </ComponentGroup>
    </Stack>
  );
};

export default ComponentsPage;
