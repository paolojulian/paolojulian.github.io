import classNames from "classnames";
import CloseIcon from "components/atoms/CloseIcon";
import IconButton from "components/Buttons/IconButton";
import { AnimatePresence, motion } from "framer-motion";
import Stack from "layouts/Stack";
import React from "react";

interface IModalPopup {
  children: React.ReactNode;
  layoutId?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ModalPopup: React.FC<IModalPopup> = ({
  children,
  layoutId = undefined,
  isOpen = false,
  onClose = () => {
    /** Placeholder */
  },
}) => {
  return (
    <>
      <motion.div
        className={classNames(
          "fixed inset-0 transition-opacity bg-black/25",
          "backdrop-blur-sm",
          isOpen ? "opacity-1" : "opacity-0 pointer-events-none"
        )}
      ></motion.div>
      <AnimatePresence>
        {isOpen ? (
          <Stack className="fixed inset-0 w-full h-full justify-center items-center">
            <motion.div
              className="max-w-screen-sm w-full h-52 bg-white p-4 z-10 relative"
              layoutId={layoutId}
            >
              <div className="absolute top-2 right-2">
                <IconButton onClick={onClose}>
                  <CloseIcon className="w-6 h-6" />
                </IconButton>
              </div>
              {children}
            </motion.div>
          </Stack>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default ModalPopup;
