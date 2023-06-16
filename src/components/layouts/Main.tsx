import Footer from '../footer';
import Meta from '../meta';
import Menu from '../molecules/Menu';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className='min-h-screen w-screen overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
        <div className='fixed bottom-0 sm:hidden bg-white'>
          <Menu />
        </div>
        <div className='min-h-screen max-w-screen w-screen-md mx-auto overflow-hidden'>
          <div className='w-full sm:grid sm:grid-cols-[5rem_minmax(0,_1fr)] lg:grid-cols-[5rem_minmax(0,_50rem)_22rem] mx-auto justify-center overflow-hidden'>
            <div
              className='hidden sm:block w-20 h-screen min-h-screen'
              style={{
                minWidth: '5rem',
              }}
            >
              <Menu />
            </div>
            <main className='flex-1'>
              {children}
              <Footer />
            </main>
            <div className='border-l border-gray-200 dark:border-gray-800 hidden lg:block w-full'>
              <div className='py-4 md:py-8 px-4 sticky top-0'>
                <div className='w-40 h-40 rounded-lg mb-2 bg-gray-200 dark:bg-gray-700'></div>
                <div>
                  <h2 className='text-xl font-semibold'>
                    Paolo Vincent Julian
                  </h2>
                  <h3 className='text-gray-400 dark:text-gray-500'>
                    Software Engineer
                  </h3>
                </div>
                <div className='w-full h-60 rounded-lg bg-gray-500 flex justify-center items-center my-5'>
                  <span>ADS</span>
                </div>
                <div className='w-full h-60 rounded-lg bg-gray-500 flex justify-center items-center my-5'>
                  <span>ADS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
