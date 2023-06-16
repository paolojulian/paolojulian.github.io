import classNames from 'classnames';
import Container from 'components/layouts/Container';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';

export type NavbarProps = {
  // No Props
};

const NavbarItem: FunctionComponent<{
  name: string;
  href: string;
  isActive: boolean;
}> = ({ name, href, isActive }) => (
  <ul
    className={classNames(
      isActive ? 'text-orange-300' : 'text-slate-500',
      'font-medium text-base'
    )}
  >
    <Link href={href}>{name}</Link>
  </ul>
);

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState('home');

  const isActive = (hash?: string) => {
    if (!hash) {
      return router.asPath === '/portfolio';
    }
    return router.asPath === `/portfolio#${hash}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            // setIsAboutSectionActive(entry.isIntersecting);
          },
          { threshold: 0.5 } // Adjust the threshold as needed
        );
        observer.observe(aboutSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Stack className='items-center justify-center sticky top-0 inset-x-0 py-4 bg-bg z-40'>
      <Container>
        <Row className='justify-start items-center w-full'>
          <Row className='space-x-7'>
            <NavbarItem name='Home' href='#home' isActive={isActive('')} />
            <NavbarItem
              name='About'
              href='#about'
              isActive={isActive('about')}
            />
            <NavbarItem
              name='Portfolio'
              href='#portfolio'
              isActive={isActive('portfolio')}
            />
            <NavbarItem
              name='Career'
              href='#career'
              isActive={isActive('career')}
            />
            <NavbarItem
              name='Contact'
              href='#contact'
              isActive={isActive('contact')}
            />
          </Row>
        </Row>
      </Container>
    </Stack>
  );
};

export default Navbar;
