import Container from './container';
import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <Container>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
};

export default PostBody;
