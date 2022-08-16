import React, { FunctionComponent, useMemo } from "react"

export interface AppInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const AppInput: FunctionComponent<AppInputProps> = ({ error, ...props }) => {
  const customClass = useMemo(() => {
    return !!error ? "shadow-glowDanger" : ""
  }, [error])

  return (
    <input
      {...props}
      className={` w-full rounded-md py-1 px-2 focus:shadow-glowSky ${customClass}`}
    />
  )
}

export default AppInput
