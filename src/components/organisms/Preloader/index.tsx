import React from "react"

import "./Preloader.scss";

export interface PreloaderProps {}

const Preloader: React.FC<PreloaderProps> = () => {
  return (
    <>
        <div className="opacity-50 z-20 fixed inset-0">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
    </>
  )
}

export default Preloader
