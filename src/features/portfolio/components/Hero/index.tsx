import classNames from 'classnames';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import styles from './index.module.scss';

export type HeroProps = {
  // No Props
};

const Hero: FunctionComponent<HeroProps> = (props) => {
  return (
    <>
      {/* Parallax */}
      <section id='home' className={classNames(styles.parallax)}>
        <div className='absolute inset-0 left-8'>
          <div className={classNames('sticky top-5 left-8')}>
            <Stack>
              <h1 className='font-black text-[62px] tracking-wider inter leading-[60px] flex flex-col md:flex-row'>
                <span className='text-[#5F5671CC]'>PAOLO</span>
                <span className='text-[#4B415F]'>JULIAN</span>
              </h1>
              <h2 className='text-[22px] tracking-[0.16em] text-[#2E3357] leading-6'>
                Software Engineer
              </h2>
            </Stack>
          </div>
        </div>
        <div
          className={classNames(styles.background, styles['parallax__8'])}
        ></div>
        <Image
          width={3012}
          height={1798}
          src='/assets/portfolio/parallax/parallax__7.png'
          quality={90}
          alt='Background'
          priority
          className={classNames(styles.background, styles['parallax__7'])}
        />
        <Image
          width={3012}
          height={1798}
          src='/assets/portfolio/parallax/parallax__6.png'
          quality={90}
          alt='Background'
          priority
          className={classNames(styles.background, styles['parallax__6'])}
        />
        <Image
          width={3012}
          height={1798}
          src='/assets/portfolio/parallax/parallax__5.png'
          quality={90}
          alt='Background'
          priority
          className={classNames(styles.background, styles['parallax__5'])}
        />
        <Image
          width={3012}
          height={1798}
          src='/assets/portfolio/parallax/parallax__4.png'
          quality={90}
          alt='Background'
          priority
          className={classNames(styles.background, styles['parallax__4'])}
        />
        <Image
          width={3012}
          height={1798}
          src='/assets/portfolio/parallax/parallax__3.png'
          quality={90}
          alt='Background'
          priority
          className={classNames(styles.background, styles['parallax__3'])}
        />
        <Image
          width={3012}
          height={1798}
          src='/assets/portfolio/parallax/parallax__2.png'
          quality={90}
          alt='Background'
          priority
          className={classNames(styles.background, styles['parallax__2'])}
        />
        <Image
          width={3012}
          height={1798}
          src='/assets/portfolio/parallax/parallax__1.png'
          quality={90}
          alt='Background'
          priority
          className={classNames(styles.background, styles['parallax__1'])}
        />
        <Image
          width={3012}
          height={1798}
          src='/assets/portfolio/parallax/parallax__0.png'
          quality={90}
          alt='Background'
          priority
          className={classNames(styles.background, styles['parallax__0'])}
        />
      </section>
    </>
  );
};

export default Hero;
