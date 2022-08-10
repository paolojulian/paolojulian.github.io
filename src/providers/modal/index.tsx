import { AnimatePresence } from "framer-motion"
import React, { createContext, useCallback, useContext, useState } from "react"

type ModalContextType = {
  modals: React.FC[]
  push: (node: React.FC) => void
  back: () => void
  clear: () => void
}

const ModalContext = createContext<ModalContextType>({
  modals: [],
  push: () => null,
  back: () => null,
  clear: () => null,
})

export const useModal = () => useContext(ModalContext)

export type ModalProviderProps = {
  children: React.ReactNode
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = useState<React.FC[]>([])

  const back = useCallback(() => {
    setModals(prev => prev.slice(0, -1))
  }, [setModals])

  const push = useCallback(
    (node: React.FC) => {
      setModals(prev => [...prev, node])
    },
    [setModals]
  )

  const clear = useCallback(() => setModals([]), [setModals])

  return (
    <ModalContext.Provider value={{ modals, push, clear, back }}>
      <AnimatePresence>
        {/* {modals.length > 0 && (
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'timing',
              duration: 200,
            }}
            style={[
              tw`flex-1 bg-black bg-opacity-50 inset-0 w-full h-full items-center justify-center z-50`,
              { position: Platform.OS === 'web' ? 'fixed' : 'absolute' },
            ]}
          >
            {modals.map((AppModal, i) => (i === modals.length - 1 ? <AppModal key={i} /> : null))}
          </MotiView>
        )} */}
      </AnimatePresence>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
