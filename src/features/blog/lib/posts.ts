import path from 'path';
import fs from 'fs'
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public/posts')

export async function getPostData(id: string) {
  const postDirectory = path.join(postsDirectory, id)
  const fullPath = path.join(postDirectory, `content.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContents);

  const processedContents = matterResult.content

  const parsedContents = await remark()
    .use(html)
    .process(processedContents)
  const contentHTML = parsedContents.toString();

  return {
    id,
    contentHTML,
    ...matterResult.data
  }
}

export async function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName
    }
  }))
}