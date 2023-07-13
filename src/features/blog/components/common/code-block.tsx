import classNames from 'classnames';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as style } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ children, className }) => {
  const language = className.replace('language-', '');
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(children.trim());
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  };

  return (
    <Stack className='rounded-lg overflow-hidden space-y-0'>
      <div className='w-full'>
        <Row className='justify-between text-sm px-4 py-2 bg-gray-900 text-gray-50'>
          <span className='text-gray-300'>{language}</span>
          <button onClick={copyToClipboard}>
            <Row className='items-center space-x-2'>
              <img
                src='/assets/icons/clipboard.svg'
                alt='clipboard'
                className={classNames(
                  isCopied ? 'hidden' : '',
                  'stroke-white text-white w-6 h-6'
                )}
              />
              <img
                src='/assets/icons/copied.svg'
                alt='clipboard'
                className={classNames(
                  isCopied ? '' : 'hidden',
                  'stroke-white text-white w-6 h-6'
                )}
              />
              {isCopied ? (
                <span className='text-green-400'>Copied!</span>
              ) : (
                <span>Copy Code</span>
              )}
            </Row>
          </button>
        </Row>
      </div>
      <SyntaxHighlighter
        language={language}
        style={{
          ...style,
          'pre[class*="language-"]': {
            ...style['pre[class*="language-"]'],
            margin: 0,
            borderRadius: 0,
          },
          'code[class*="language-"]': {
            ...style['code[class*="language-"]'],
            background: 'none',
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </Stack>
  );
};

export default CodeBlock;
