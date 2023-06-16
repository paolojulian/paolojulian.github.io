import Stack from 'layouts/Stack';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import SectionHeader from '../common/SectionHeader';
import TextHighlight from '../common/TextHighlight';
import CareerCard from './CareerCard';
import AnimateOnIntersect from 'components/Animations/AnimateOnIntersect';
import Container from 'components/layouts/Container';

export type CareerProps = {
  // No Props
};

const Career: FunctionComponent<CareerProps> = () => {
  return (
    <section id='career' className='my-32 relative'>
      <Container>
        <Stack className='bg-transparent text-white py-32 space-y-24 relative z-20'>
          <AnimateOnIntersect>
            <SectionHeader
              title='CAREER'
              description={"A Software Engineer's tale"}
            />
          </AnimateOnIntersect>

          <Stack>
            <CareerCard
              HeaderComponent={
                <CareerCard.Header
                  year={2017}
                  title='Beijing Bangnishou'
                  flag={<></>}
                ></CareerCard.Header>
              }
              DescriptionComponent={
                <p>
                  Still a clumsy{' '}
                  <TextHighlight textColor='text-orange-300'>
                    Junior Software Application Developer
                  </TextHighlight>{' '}
                  who thinks he knows it all. Got a huge experience in
                  implementing a{' '}
                  <TextHighlight textColor='text-green-600'>
                    VueJS
                  </TextHighlight>{' '}
                  single page application project back when it was still new.
                </p>
              }
              TechIcons={[
                '/assets/portfolio/TechIcons/HTML5.png',
                '/assets/portfolio/TechIcons/CSS3.png',
                null,
                '/assets/portfolio/TechIcons/Javascript.png',
                '/assets/portfolio/TechIcons/Vue.png',
              ]}
              apps={['School Management System']}
            />
            <CareerCard
              HeaderComponent={
                <CareerCard.Header
                  year={2019}
                  title='YNS Philippines Inc.'
                  flag={<></>}
                ></CareerCard.Header>
              }
              DescriptionComponent={
                <p>
                  Promoted to a{' '}
                  <TextHighlight textColor='text-orange-300'>
                    Mid Full-Stack Developer
                  </TextHighlight>
                  . I was still a flashy and over-engineered coder, but I was
                  able to gain experience in integrating third-party APIs such
                  as{' '}
                  <TextHighlight textColor='text-slate-200'>
                    FacebookAPI, Stripe, Twilio, and more.
                  </TextHighlight>
                </p>
              }
              TechIcons={[
                '/assets/portfolio/TechIcons/Laravel.png',
                '/assets/portfolio/TechIcons/CakePHP.png',
                '/assets/portfolio/TechIcons/Docker.png',
                '/assets/portfolio/TechIcons/React.png',
                '/assets/portfolio/TechIcons/Sass.png',
              ]}
              apps={[
                'Live Streaming Service',
                'Gambling Site',
                'Room for rent',
                'IT Management System',
              ]}
            />
            <CareerCard
              HeaderComponent={
                <CareerCard.Header
                  year={2021}
                  title='Yondu'
                  flag={<></>}
                ></CareerCard.Header>
              }
              DescriptionComponent={
                <p>
                  Specializing in{' '}
                  <TextHighlight textColor='text-orange-300'>
                    Front-end Development
                  </TextHighlight>{' '}
                  and being deeply passionate about
                  <TextHighlight textColor='text-sky-300'>
                    {' '}
                    TailwindCSS
                  </TextHighlight>
                  . I have made concerted efforts to adhere to the{' '}
                  <TextHighlight>
                    “KISS” (Keep it simple, stupid)
                  </TextHighlight>{' '}
                  principle in most projects. .
                </p>
              }
              TechIcons={[
                '/assets/portfolio/TechIcons/Next.png',
                '/assets/portfolio/TechIcons/Nuxt.png',
                null,
                '/assets/portfolio/TechIcons/AWS.png',
                '/assets/portfolio/TechIcons/Tailwind.png',
              ]}
              apps={[
                'Gambling Site',
                'Reservation App (Parking, Seats, Room)',
                'Election App',
                'Microfrontend',
                'Single Codebase App (React-native-web)',
                'Deployment App (using Terraform)',
              ]}
            />
          </Stack>
        </Stack>
      </Container>
      <Image
        draggable={false}
        className='absolute -bottom-60 -right-3/4 z-0'
        src='/assets/portfolio/Galaxy.jpg'
        alt='Galaxy'
        quality={90}
        width={1580}
        height={1024}
      />
    </section>
  );
};

export default Career;
