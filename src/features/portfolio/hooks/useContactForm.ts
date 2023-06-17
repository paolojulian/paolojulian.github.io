import { useMutation } from "@tanstack/react-query";
import { emailService } from "lib/axios";
import { IContactForm } from "../components/Contact/ContactForm";
import { useState } from "react";

const useContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutateAsync: handleSubmit, isLoading } = useMutation({
    mutationFn: async (form: IContactForm) => {
      const response = await emailService.post('/contact-me', form);
      if (!response.ok) {
        throw response;
      }
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000)
    }
  })

  return { handleSubmit, isLoading, isSuccess }
}

export default useContactForm;