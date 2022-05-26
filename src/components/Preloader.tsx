import React from "react"

import "./Preloader.css"

export interface PreloaderProps {}

const Preloader: React.FC<PreloaderProps> = () => {
  return (
    <div className="app-preloader inset-0 h-screen z-0">
      <div className="opacity-50 fixed inset-0">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className="absolute inset-0 w-full h-full app-name text-7xl flex items-center justify-center">
        <div className="flex">
          <div className="text-gray-50 flex">
            <div className="animate-wavy app-letter" style={{ "--i": 1 }}>
              P
            </div>
            <div className="animate-wavy app-letter" style={{ "--i": 2 }}>
              a
            </div>
            <div className="animate-wavy app-letter" style={{ "--i": 3 }}>
              o
            </div>
            <div className="animate-wavy app-letter" style={{ "--i": 4 }}>
              l
            </div>
            <div className="animate-wavy app-letter" style={{ "--i": 5 }}>
              o
            </div>
          </div>
          <div className="text-stone-400 flex">
            <div className="animate-wavy app-letter" style={{ "--i": 6 }}>
              J
            </div>
            <div className="animate-wavy app-letter" style={{ "--i": 7 }}>
              u
            </div>
            <div className="animate-wavy app-letter" style={{ "--i": 8 }}>
              l
            </div>
            <div className="animate-wavy app-letter" style={{ "--i": 9 }}>
              i
            </div>
            <div className="animate-wavy app-letter" style={{ "--i": 10 }}>
              a
            </div>
            <div className="animate-wavy app-letter" style={{ "--i": 11 }}>
              n
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
