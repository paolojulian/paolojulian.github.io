type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return <div className='text-lg lg:text-xl'>{name}</div>;
};

export default Avatar;
