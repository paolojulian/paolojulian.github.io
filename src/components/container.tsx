import classNames from 'classnames';

type ContainerSizes = 'md' | 'sm';

type Props = {
  children?: React.ReactNode;
  size?: ContainerSizes;
};

const sizes: Record<ContainerSizes, string> = {
  md: 'p-4 md:p-8',
  sm: 'p-8 md:p-16',
};

const Container = ({ children, size = 'md' }: Props) => {
  return (
    <div className={classNames('container mx-auto', sizes[size])}>
      {children}
    </div>
  );
};

export default Container;
