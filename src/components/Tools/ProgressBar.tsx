import React, { FunctionComponent } from "react"

export interface ProgressBarProps {
  title: string
  fillPercentage: number
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  title,
  fillPercentage,
}) => {
  return (
    <div className="flex items-stretch mb-4 rounded-2xl overflow-hidden shadow-glowWhite">
      <div className="bg-cyan-600 bg-opacity-80 py-1 w-48 flex text-base font-medium justify-center">
        {title}
      </div>
      <div className="background bg-gray-300 w-full flex items-center">
        <div
          className="thumb bg-cyan-400 h-full"
          style={{ width: `${fillPercentage}%` }}
        >
          &nbsp;
        </div>
        <span className="px-2 text-gray-600 text-sm">
          {String(fillPercentage)}%
        </span>
      </div>
    </div>
  )
}

export default ProgressBar
