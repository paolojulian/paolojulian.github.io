/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useEffect, useRef, useState } from "react"
import { PortfolioItem } from "../../../@types/enums"

interface PortfolioModalProps {
  onClose: () => any
  isOpen: boolean
  item?: PortfolioItem
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  item,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const cancelButtonRef = useRef<HTMLButtonElement>(null)
  const images = React.useState([
    { name: "First Slide" },
    { name: "Second Slide" },
    { name: "Third Slide" },
    { name: "Fourth Slide" },
  ])

  const [activeImageIndex, setActiveImageIndex] = React.useState<number>(0)

  const nextImage = (): void => {
    if (activeImageIndex < images.length) {
      setActiveImageIndex(prevState => prevState + 1)
    } else {
      setActiveImageIndex(0)
    }
  }

  const prevImage = (): void => {
    if (activeImageIndex > 0) {
      setActiveImageIndex(prevState => prevState - 1)
    } else {
      setActiveImageIndex(images.length)
    }
  }

  useEffect(() => {
    if (carouselRef !== null && carouselRef.current !== null) {
      carouselRef.current.scrollLeft =
        carouselRef.current.offsetWidth * activeImageIndex
    }
  }, [activeImageIndex])

  useEffect(() => {
    if (!isOpen) {
      setActiveImageIndex(0)
    }
  }, [isOpen])

  if (!item) {
    return null
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div
                  id="default-carousel"
                  className="relative bg-gray-300"
                  data-carousel="static"
                >
                  <div
                    ref={carouselRef}
                    className="snap-x snap-mandatory scroll-smooth overflow-hidden relative h-56 sm:h-64 xl:h-80 2xl:h-96 flex touch-pan-x text-lg font-bold"
                  >
                    <span className="flex-none w-full h-full snap-start bg-pink-200 flex items-center justify-center">
                      First Child
                    </span>
                    <span className="flex-none w-full h-full snap-start bg-yellow-200 flex items-center justify-center">
                      Second Child
                    </span>
                    <span className="flex-none w-full h-full snap-start bg-orange-200 flex items-center justify-center">
                      Third Child
                    </span>
                  </div>

                  <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    <button
                      type="button"
                      className={
                        "w-3 h-3 rounded-full dark:bg-gray-800 " +
                        (activeImageIndex === 0 ? "bg-white" : "bg-white/50")
                      }
                      aria-current="true"
                      aria-label="Slide 1"
                      onClick={() => setActiveImageIndex(0)}
                    ></button>
                    <button
                      type="button"
                      className={
                        "w-3 h-3 rounded-full dark:bg-gray-800 " +
                        (activeImageIndex === 1 ? "bg-white" : "bg-white/50")
                      }
                      aria-current="false"
                      aria-label="Slide 2"
                      onClick={() => setActiveImageIndex(1)}
                    ></button>
                    <button
                      type="button"
                      className={
                        "w-3 h-3 rounded-full dark:bg-gray-800 " +
                        (activeImageIndex === 2 ? "bg-white" : "bg-white/50")
                      }
                      aria-current="false"
                      aria-label="Slide 3"
                      onClick={() => setActiveImageIndex(2)}
                    ></button>
                  </div>

                  <button
                    type="button"
                    className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    onClick={prevImage}
                  >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        ></path>
                      </svg>
                      <span className="hidden">Previous</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                    onClick={nextImage}
                  >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                      <span className="hidden">Next</span>
                    </span>
                  </button>
                </div>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      {/* Carousel */}

                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-black"
                      >
                        <div className="font-semibold text-2xl">
                          {item.title}
                        </div>
                        <div className="text-gray-500">{item.stack}</div>
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-black">
                          {item.description.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => onClose()}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default PortfolioModal
