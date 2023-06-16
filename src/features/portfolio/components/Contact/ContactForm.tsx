import AppButton from 'components/Buttons/AppButton';
import TextAreaInput from 'components/Forms/TextAreaInput';
import TextInput from 'components/Forms/TextInput';
import ArrowRedoIcon from 'components/Icons/ArrowRedoIcon';
import { Formik } from 'formik';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import * as Yup from 'yup';

export type ContactFormProps = {
  onSubmit: (form: IContactForm) => Promise<void>;
  isSubmitting?: boolean;
  isSuccess?: boolean;
};

export const contactFormSchema = Yup.object({
  name: Yup.string().required().label('Name'),
  mobile: Yup.string().label('Mobile'),
  email: Yup.string().email().required().max(320).label('Email'),
  subject: Yup.string().max(320).label('Subject'),
  message: Yup.string().required().max(5000).label('Message'),
});
export type IContactForm = Yup.InferType<typeof contactFormSchema>;
const initialValues: IContactForm = {
  name: '',
  email: '',
  message: '',
  mobile: '',
  subject: '',
};

const ContactForm: FunctionComponent<ContactFormProps> = ({
  onSubmit,
  isSubmitting = false,
  isSuccess = false,
}) => {
  return (
    <Formik
      onSubmit={(form, actions) => {
        onSubmit(form).then(() => {
          actions.setSubmitting(false);
          actions.resetForm();
        });
      }}
      initialValues={initialValues}
      validationSchema={contactFormSchema}
    >
      {({ values, touched, errors, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit} method='POST' noValidate>
          <div className='w-full'>
            <Stack className='space-y-2'>
              <Row className='space-x-2 w-full'>
                <TextInput
                  onChange={(e) => setFieldValue('name', e.target.value)}
                  error={!!touched.name && errors.name}
                  showErrorMessage={false}
                  label='YOUR NAME'
                  name='name'
                  placeholder='Johny Sins?'
                  value={values.name}
                  theme='outlined'
                  rounded='top-left'
                />
                <TextInput
                  onChange={(e) => setFieldValue('email', e.target.value)}
                  error={!!touched.email && errors.email}
                  showErrorMessage={false}
                  label='YOUR EMAIL'
                  name='email'
                  placeholder='email@email.com'
                  value={values.email}
                  theme='outlined'
                  rounded='top-right'
                />
              </Row>
              <Row className='space-x-2 w-full'>
                <TextInput
                  onChange={(e) => setFieldValue('mobile', e.target.value)}
                  error={!!touched.mobile && errors.mobile}
                  showErrorMessage={false}
                  label='YOUR MOBILE NUMBER'
                  name='mobile_number'
                  placeholder='09279488XXX'
                  value={values.mobile}
                  theme='outlined'
                />
                <TextInput
                  onChange={(e) => setFieldValue('subject', e.target.value)}
                  error={!!touched.subject && errors.subject}
                  showErrorMessage={false}
                  label='SUBJECT'
                  name='subject'
                  placeholder='WORK'
                  value={values.subject}
                  theme='outlined'
                />
              </Row>
              <TextAreaInput
                onChange={(e) => setFieldValue('message', e.target.value)}
                error={!!touched.message && errors.message}
                label='MESSAGE'
                name='Message'
                value={values.message}
                rows={8}
                theme='outlined'
              />
              <AppButton
                type='submit'
                isLoading={isSubmitting}
                isSuccess={isSuccess}
                rounded='bottom'
              >
                <Row className='space-x-2 items-center'>
                  <span className='font-bold'>Just Send</span>
                  <ArrowRedoIcon />
                </Row>
              </AppButton>
            </Stack>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
