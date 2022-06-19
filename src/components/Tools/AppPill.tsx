import React, { FunctionComponent } from "react"

export interface AppPillProps {
  children: React.ReactNode
}

const AppPill: FunctionComponent<AppPillProps> = ({ children }) => {
  return (
    <div className="inline-block py-1 px-4 text-xs rounded-full text-gray-50 bg-sky-500 last:mr-0 mr-2 mt-2">
      {children}
    </div>
  )
}

export default AppPill
