import { useFormikContext } from "formik"
import React, { FunctionComponent, useCallback, useMemo } from "react"

export interface FormikErrorAlertProps {}

const FormikErrorAlert: FunctionComponent<FormikErrorAlertProps> = props => {
  const { touched, isValid } = useFormikContext<any>()
  const showError = useMemo(() => {
    if (isValid) return false

    return Object.values(touched).every(value => value === true)
  }, [touched, isValid])

  return (
    <div className="text-rose-500 mb-4">
      {showError && "Please fill in the required fields."}{" "}
    </div>
  )
}

export default FormikErrorAlert
