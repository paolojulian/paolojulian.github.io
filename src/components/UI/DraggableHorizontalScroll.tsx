import classNames from 'classnames';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

export type DraggableHorizontalScrollProps = {
  children: React.ReactNode;
};

const DraggableHorizontalScroll: FunctionComponent<
  DraggableHorizontalScrollProps
> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (!containerRef?.current) {
      return;
    }
    const container = containerRef.current;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleMouseLeave = (e) => {
      setIsDragging(false);
    };

    const handleMouseUp = (e) => {
      setIsDragging(false);
    };
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const scrollingSpeed = 1;
      const walk = (x - startX) * scrollingSpeed;
      container.scrollLeft = scrollLeft - walk;
    };
    const handleClick = (e) => {
      // Check if the user was dragging or clicking
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
    };
  }, [isDragging, startX, scrollLeft]);

  console.log({ isDragging, startX, scrollLeft });

  return (
    <div
      className={classNames(
        {
          active: isDragging,
          'cursor-grabbing': isDragging,
          'cursor-grab': !isDragging,
        },
        'overflow-x-auto hidden-scrollbar'
      )}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default DraggableHorizontalScroll;
