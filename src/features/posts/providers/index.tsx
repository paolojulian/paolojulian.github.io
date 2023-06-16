import React, { FunctionComponent, useContext, useState } from 'react';
import { PostType } from '../models';

/**
 * Context
 */
interface IPostContext {
  selectedPost: PostType;
  posts: PostType[];
  setPosts: (posts: PostType[]) => void;
}

const PostContext = React.createContext<IPostContext>({
  selectedPost: null,
  posts: [],
  setPosts: () => {
    /** Empty */
  },
});

export const usePost = () => useContext(PostContext);

/**
 * Provider
 */
interface IPostProvider {
  selectedPost: PostType;
  children: React.ReactNode;
}

const PostProvider: FunctionComponent<IPostProvider> = ({
  selectedPost: selectedPostProps,
  children,
}) => {
  const [selectedPost, setSelectedPost] = useState<PostType>(selectedPostProps);
  const [posts, setPosts] = useState<PostType[]>([]);

  return (
    <PostContext.Provider value={{ posts, setPosts, selectedPost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
