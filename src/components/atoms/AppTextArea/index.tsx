import React, { FunctionComponent, useMemo } from "react"

export interface AppTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

const AppTextArea: FunctionComponent<AppTextAreaProps> = ({
  error,
  ...props
}) => {
  const customClass = useMemo(() => {
    return !!error ? "shadow-glowDanger" : ""
  }, [error])

  return (
    <textarea
      {...props}
      className={`w-full rounded-md py-1 px-2 focus:shadow-glowSky resize-none ${customClass}`}
    ></textarea>
  )
}

export default AppTextArea
