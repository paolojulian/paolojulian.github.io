import classNames from 'classnames';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import styles from './DraggableHorizontalScroll.module.scss';

export type DraggableHorizontalScrollProps = {
  children: React.ReactNode;
};

const DraggableHorizontalScroll: FunctionComponent<
  DraggableHorizontalScrollProps
> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef?.current) {
      return;
    }
    const gallery = containerRef.current;

    function scrollGallery() {
      const galleryWidth = gallery.offsetWidth;

      let scrollPosition = 0;

      function animateScroll() {
        scrollPosition += 1;

        if (scrollPosition >= galleryWidth) {
          scrollPosition = 0;
        }

        gallery.scrollTop = scrollPosition;
      }
      requestAnimationFrame(animateScroll);
    }

    scrollGallery();

    return () => {};
  }, []);

  return (
    <div className={classNames(styles.container, 'relative')}>
      <div
        className={classNames(
          'overflow-x-auto hidden-scrollbar relative w-screen',
          styles.slider
        )}
        ref={containerRef}
      >
        {children}
      </div>
    </div>
  );
};

export default DraggableHorizontalScroll;
