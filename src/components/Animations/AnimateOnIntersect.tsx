import classNames from 'classnames';
import React, { createContext, useContext, useEffect } from 'react';

type AnimateOnIntersectTypes =
  | 'fade'
  | 'fadeFromDown'
  | 'fadeFromRight'
  | 'flip'
  | 'popOut';

const optionsPerType: Record<
  AnimateOnIntersectTypes,
  IntersectionObserverInit
> = {
  fade: {
    root: null,
    rootMargin: '0px 0px 100px 0px',
    threshold: 1.0,
  },
  fadeFromDown: {
    root: null,
    rootMargin: '0px 0px 100px 0px',
    threshold: 1.0,
  },
  fadeFromRight: {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0,
  },
  flip: {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 1.0,
  },
  popOut: {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 1.0,
  },
};

const initialPositionPerType: Record<
  AnimateOnIntersectTypes,
  { from: string; to: string }
> = {
  fade: {
    from: 'transition-opacity opacity-0',
    to: 'opacity-1',
  },
  fadeFromDown: {
    from: 'transition opacity-0 translate-y-24',
    to: 'opacity-1 translate-y-0',
  },
  fadeFromRight: {
    from: 'transition opacity-0 -translate-x-24',
    to: 'opacity-1 translate-x-0',
  },
  flip: {
    from: 'transition opacity-0 ',
    to: 'opacity-1 translate-x-0',
  },
  popOut: {
    from: 'transition opacity-0 scale-0',
    to: 'opacity-1 scale-1',
  },
};

interface IAnimateOnIntersect {
  type?: AnimateOnIntersectTypes;
  children?: React.ReactNode;
  persist?: boolean;
  duration?: number;
  delay?: number;
}

interface IAnimateOnIntersectContext {
  isInView: boolean;
}

export const AnimateOnIntersectContext =
  createContext<IAnimateOnIntersectContext>({
    isInView: false,
  });

const AnimateOnIntersect: React.FC<IAnimateOnIntersect> = ({
  type = 'fadeFromDown',
  persist = true,
  duration = 1000,
  delay = 0,
  children,
}) => {
  const containerRef = React.useRef<HTMLDivElement>();
  const [isInView, setIsInView] = React.useState<boolean>(false);

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsInView((prev) => {
      if (prev === true && persist === true) {
        return true;
      }
      return entry.isIntersecting;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      callbackFunction,
      optionsPerType[type]
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [type]);

  return (
    <AnimateOnIntersectContext.Provider value={{ isInView }}>
      <div
        ref={containerRef}
        className={classNames(
          'transition',
          isInView
            ? initialPositionPerType[type].to
            : initialPositionPerType[type].from
        )}
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </AnimateOnIntersectContext.Provider>
  );
};

export function useAnimateOnIntersect() {
  return useContext(AnimateOnIntersectContext);
}

export default AnimateOnIntersect;
