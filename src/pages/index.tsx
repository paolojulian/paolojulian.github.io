import PortfolioPage from 'features/portfolio/components/Portfolio';

export default PortfolioPage;

// import React, { FunctionComponent } from 'react';
// import MainLayout from '../components/layouts/Main';
// import PostCard from '../components/molecules/PostCard';
// import { Post } from '../lib/models';

// export type HomeProps = {
//   preview?: boolean;
//   data: Post[];
// };

// const Home: FunctionComponent<HomeProps> = ({ data, preview }) => {
//   return (
//     <MainLayout preview={preview}>
//       <>
//         {data.map((post) => (
//           <PostCard key={post.id} post={post} href='/posts/lorem-ipsum' />
//         ))}
//       </>
//     </MainLayout>
//   );
// };

// export async function getStaticProps() {
//   // const response = await apiClient.get('/api/posts');
//   // if (!response.ok) {
//   //   throw new Error();
//   // }

//   return {
//     redirect: {
//       destination: '/portfolio',
//       permanent: true,
//     },
//   };
//   // return { props: { data: response.data } };
// }

// export default Home;
