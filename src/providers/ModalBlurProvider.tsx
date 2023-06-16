import classNames from 'classnames';
import React, { createContext, useContext } from 'react';

interface IModalBlurProvider {
  children?: React.ReactNode;
}

interface IModalBlurContext {
  willBlur?: boolean;
  setWillBlur: (value: boolean) => void;
}

export const ModalBlurContext = createContext<IModalBlurContext>({
  willBlur: false,
  setWillBlur: () => {
    return;
  },
});

const ModalBlurProvider: React.FC<IModalBlurProvider> = ({ children }) => {
  const [willBlur, setWillBlur] = React.useState<boolean>(false);

  return (
    <ModalBlurContext.Provider value={{ willBlur, setWillBlur }}>
      <div
        className={classNames(
          'w-full h-full',
          willBlur ? 'blur-3xl' : 'blur-none'
        )}
      >
        {children}
      </div>
    </ModalBlurContext.Provider>
  );
};

export function useModalBlur() {
  return useContext(ModalBlurContext);
}

export default ModalBlurProvider;
