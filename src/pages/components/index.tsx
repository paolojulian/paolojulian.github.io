import ComponentsPage from 'features/components/pages';
import MainLayout from 'layouts/MainLayout';
import apiClient from 'lib/axios';
import { Post } from 'lib/models';
import React, { FunctionComponent } from 'react';

export type ComponentsProps = {
  preview?: boolean;
  data: Post[];
};

const Components: FunctionComponent<ComponentsProps> = () => {
  return (
    <MainLayout>
      <div className=' w-full h-full'>
        <ComponentsPage />
      </div>
    </MainLayout>
  );
};

export default Components;
