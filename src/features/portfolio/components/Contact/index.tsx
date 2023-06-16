import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import useContactForm from '../../hooks/useContactForm';
import ContactForm from './ContactForm';
import Container from 'components/layouts/Container';

export type ContactProps = {
  name: string;
  course: string;
  email: string;
  mobileNo: string;
  address: string;
};

const Contact: FunctionComponent<ContactProps> = () => {
  const { handleSubmit, isLoading, isSuccess } = useContactForm();

  return (
    <>
      <section id='contact'>
        <Stack className='items-center pb-24 gap-24 relative'>
          {/** Separator */}
          {/* <div
          className={classNames(
            'absolute top-0 inset-x-0',
            'w-0 h-0',
            'border-r-[100vw] border-r-transparent border-b-[13.9vw] border-b-white',
            'mt-[-13.8vw]'
          )}
        ></div> */}
          {/** Content */}
          <Stack className='z-10 space-y-16 w-full'>
            <Container>
              <Stack className='items-center'>
                <div className='rounded-3xl border border-slate-500 w-full'>
                  <Stack className='w-full h-full'>
                    {/* HEADER */}
                    <div className='w-full h-[60px] border-b border-slate-500'>
                      <Row className='w-full h-full items-center px-6 space-x-8'>
                        <div className='bg-gradient-to-br from-slate-600 to-slate-500 w-[27px] h-[27px] rounded-full'></div>
                        <div className='bg-gradient-to-br from-slate-600 to-slate-500 w-[300px] h-[20px] rounded-full animate-pulse'></div>
                      </Row>
                    </div>
                    {/* Content */}
                    <Row className='flex-1 h-full'>
                      {/* Sidebar */}
                      <Stack className='w-[250px] h-auto border-r border-slate-500 p-5 animate-pulse justify-between'>
                        <Stack className='space-y-4'>
                          &nbsp;
                          <div className='bg-gradient-to-br from-slate-600 to-slate-500 w-full h-[27px] rounded-full'></div>
                          <div className='bg-gradient-to-br from-slate-600 to-slate-500 w-[calc(100%-3rem)] h-[27px] rounded-full'></div>
                          <div className='bg-gradient-to-br from-slate-600 to-slate-500 w-[calc(100%-2rem)] h-[27px] rounded-full'></div>
                          <div className='bg-gradient-to-br from-slate-600 to-slate-500 w-[calc(100%-0rem)] h-[27px] rounded-full'></div>
                          <div className='bg-gradient-to-br from-slate-600 to-slate-500 w-[calc(100%-2rem)] h-[27px] rounded-full'></div>
                          <div className='bg-gradient-to-br from-slate-600 to-slate-500 w-[calc(100%-5rem)] h-[27px] rounded-full'></div>
                          <div className='bg-gradient-to-br from-slate-600 to-slate-500 w-[calc(100%-0rem)] h-[27px] rounded-full'></div>
                        </Stack>
                        <div className='bg-gradient-to-br from-slate-600 to-slate-500 w-[calc(100%-0rem)] h-[40px]'></div>
                      </Stack>
                      {/* Contact */}
                      <Stack className='flex-1 h-full p-14 space-y-6'>
                        <Stack>
                          <h3 className='font-bold text-2xl text-lofi-yellow'>
                            CONTACT
                          </h3>
                          <h5 className='font-regular text-base text-slate-400'>
                            I'd love to hear from you
                          </h5>
                        </Stack>
                        <ContactForm
                          onSubmit={handleSubmit}
                          isSuccess={isSuccess}
                          isSubmitting={isLoading}
                        />
                      </Stack>
                    </Row>
                  </Stack>
                </div>
                <div className='w-0.5 h-[75px] bg-slate-500' />
                <div className='w-[calc(100%-20rem)] max-w-screen-lg border border-t-slate-500' />
                <h4 className='text-slate-500 text-base font-medium my-4'>
                  Copyright © 2017-2023 Paolo Vincent Julian. All rights
                  reserved.
                </h4>
              </Stack>
            </Container>
          </Stack>
        </Stack>
      </section>
    </>
  );
};

export default Contact;
