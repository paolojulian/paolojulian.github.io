import ComponentsPage from 'features/components/pages';
import MainLayout from 'layouts/MainLayout';
import apiClient from 'lib/axios';
import { Post } from 'lib/models';
import React, { FunctionComponent } from 'react';

export type ComponentsProps = {
  preview?: boolean;
  data: Post[];
};

const Components: FunctionComponent<ComponentsProps> = ({ data, preview }) => {
  return (
    <MainLayout>
      <div className=' w-full h-full'>
        <ComponentsPage />
      </div>
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const response = await apiClient.get('/api/posts');
  if (!response.ok) {
    throw new Error();
  }

  return { props: { data: response.data } };
}

export default Components;
