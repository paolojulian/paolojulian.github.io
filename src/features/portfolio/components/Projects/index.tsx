import DraggableHorizontalScroll from 'components/UI/DraggableHorizontalScroll';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import AnimateOnIntersect from 'components/Animations/AnimateOnIntersect';
import Container from 'components/layouts/Container';

export type ProjectsProps = {
  // No Props
};

const Projects: FunctionComponent<ProjectsProps> = () => {
  return (
    <>
      <section
        id='portfolio'
        className='items-center bg-transparent text-white py-16 md:py-32 space-y-24 relative'
      >
        <Container>
          <Stack className='space-y-4'>
            <AnimateOnIntersect>
              <SectionHeader
                title='PROJECTS'
                description='Here are my recent works'
              />
            </AnimateOnIntersect>
          </Stack>
        </Container>
        <div className='absolute -top-20 left-0 h-full w-auto hidden md:block'>
          <Image
            draggable={false}
            src={'/assets/portfolio/projects/Background.png'}
            alt={'Background'}
            className='select-none'
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              backgroundPosition: 'center center'
            }}
            width={1727}
            height={1086}
            quality={90}
          />
        </div>
        <AnimateOnIntersect type='fade'>
          <DraggableHorizontalScroll>
            <Stack className='px-6 lg:px-12 xl:px-28 z-50 py-5'>
              <Row className='w-fit text-white items-center'>
                {/* Election App */}
                <ProjectCard
                  title='Election App'
                  description='NextJS, TailwindCSS'
                  type='mobile'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/Election.png'}
                    alt={'Election'}
                    width={69}
                    height={150}
                    quality={90}
                  />
                </ProjectCard>
                {/* Headless CMS Landing Page */}
                <ProjectCard
                  title='Landing Page & Blogsite'
                  description='NextJS, TailwindCSS, Contentful'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/Landing.png'}
                    alt={'Landing'}
                    width={300}
                    height={200}
                    quality={90}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </ProjectCard>
                {/* Reservation App */}
                <ProjectCard
                  title='Reservation App'
                  description='NextJS, TailwindCSS, fabricJS'
                  type='mobile'
                >
                  <Row className='space-x-2'>
                    <Image
                      draggable={false}
                      src={'/assets/portfolio/projects/Reservation1.png'}
                      alt={'Reservation'}
                      width={66}
                      height={143}
                      quality={90}
                    />
                    <Image
                      draggable={false}
                      src={'/assets/portfolio/projects/Reservation2.png'}
                      alt={'Reservation'}
                      width={66}
                      height={143}
                      quality={90}
                    />
                  </Row>
                </ProjectCard>
                {/* Web Business Management */}
                <ProjectCard
                  title='Web Management App'
                  description='Laravel, VueJS, StripeAPI'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/WebManagement.png'}
                    alt={'WebManagement'}
                    width={327}
                    height={180}
                    quality={90}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </ProjectCard>

                {/* Live Streaming App */}
                <ProjectCard
                  title='Live Streaming App'
                  description='ReactJS, Laravel, StripeAPI'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/Idols.png'}
                    alt={'Idols'}
                    width={300}
                    height={180}
                    quality={90}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </ProjectCard>

                {/* Adult Site */}
                <ProjectCard
                  title='Adult Site'
                  description='CakePHP, StripeAPI'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/Adult.png'}
                    alt={'Adult'}
                    width={327}
                    height={180}
                    quality={90}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </ProjectCard>
                <ProjectCard
                  title='Election App'
                  description='NextJS, TailwindCSS'
                  type='mobile'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/Election.png'}
                    alt={'Election'}
                    width={69}
                    height={150}
                    quality={90}
                  />
                </ProjectCard>
                {/* Headless CMS Landing Page */}
                <ProjectCard
                  title='Landing Page & Blogsite'
                  description='NextJS, TailwindCSS, Contentful'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/Landing.png'}
                    alt={'Landing'}
                    width={300}
                    height={200}
                    quality={90}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </ProjectCard>
                {/* Reservation App */}
                <ProjectCard
                  title='Reservation App'
                  description='NextJS, TailwindCSS, fabricJS'
                  type='mobile'
                >
                  <Row className='space-x-2'>
                    <Image
                      draggable={false}
                      src={'/assets/portfolio/projects/Reservation1.png'}
                      alt={'Reservation'}
                      width={66}
                      height={143}
                      quality={90}
                    />
                    <Image
                      draggable={false}
                      src={'/assets/portfolio/projects/Reservation2.png'}
                      alt={'Reservation'}
                      width={66}
                      height={143}
                      quality={90}
                    />
                  </Row>
                </ProjectCard>
                {/* Web Business Management */}
                <ProjectCard
                  title='Web Management App'
                  description='Laravel, VueJS, StripeAPI'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/WebManagement.png'}
                    alt={'WebManagement'}
                    width={327}
                    height={180}
                    quality={90}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </ProjectCard>

                {/* Live Streaming App */}
                <ProjectCard
                  title='Live Streaming App'
                  description='ReactJS, Laravel, StripeAPI'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/Idols.png'}
                    alt={'Idols'}
                    width={300}
                    height={180}
                    quality={90}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </ProjectCard>

                {/* Adult Site */}
                <ProjectCard
                  title='Adult Site'
                  description='CakePHP, StripeAPI'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/Adult.png'}
                    alt={'Adult'}
                    width={327}
                    height={180}
                    quality={90}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </ProjectCard>
                {/* Election App */}
                <ProjectCard
                  title='Election App'
                  description='NextJS, TailwindCSS'
                  type='mobile'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/Election.png'}
                    alt={'Election'}
                    width={69}
                    height={150}
                    quality={90}
                  />
                </ProjectCard>
                {/* Headless CMS Landing Page */}
                <ProjectCard
                  title='Landing Page & Blogsite'
                  description='NextJS, TailwindCSS, Contentful'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/Landing.png'}
                    alt={'Landing'}
                    width={300}
                    height={200}
                    quality={90}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </ProjectCard>
                {/* Reservation App */}
                <ProjectCard
                  title='Reservation App'
                  description='NextJS, TailwindCSS, fabricJS'
                  type='mobile'
                >
                  <Row className='space-x-2'>
                    <Image
                      draggable={false}
                      src={'/assets/portfolio/projects/Reservation1.png'}
                      alt={'Reservation'}
                      width={66}
                      height={143}
                      quality={90}
                    />
                    <Image
                      draggable={false}
                      src={'/assets/portfolio/projects/Reservation2.png'}
                      alt={'Reservation'}
                      width={66}
                      height={143}
                      quality={90}
                    />
                  </Row>
                </ProjectCard>
                {/* Web Business Management */}
                <ProjectCard
                  title='Web Management App'
                  description='Laravel, VueJS, StripeAPI'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/WebManagement.png'}
                    alt={'WebManagement'}
                    width={327}
                    height={180}
                    quality={90}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </ProjectCard>

                {/* Live Streaming App */}
                <ProjectCard
                  title='Live Streaming App'
                  description='ReactJS, Laravel, StripeAPI'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/Idols.png'}
                    alt={'Idols'}
                    width={300}
                    height={180}
                    quality={90}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </ProjectCard>

                {/* Adult Site */}
                <ProjectCard
                  title='Adult Site'
                  description='CakePHP, StripeAPI'
                >
                  <Image
                    draggable={false}
                    src={'/assets/portfolio/projects/Adult.png'}
                    alt={'Adult'}
                    width={327}
                    height={180}
                    quality={90}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                    }}
                  />
                </ProjectCard>
              </Row>
            </Stack>
          </DraggableHorizontalScroll>
        </AnimateOnIntersect>
      </section>
    </>
  );
};

export default Projects;
