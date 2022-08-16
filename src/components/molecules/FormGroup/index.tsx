import { Popover } from "@headlessui/react"
import React, { FunctionComponent } from "react"

export interface FormGroupProps {
  error?: string
  children: React.ReactNode
}

const FormGroup: FunctionComponent<FormGroupProps> = ({ children, error }) => {
  return <div className="mb-3">{children}</div>
}

export default FormGroup
