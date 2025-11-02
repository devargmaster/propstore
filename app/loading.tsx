import Image from 'next/image';
import loader from '@/assets/loader.gif';
const Loading = () => {
  return <div className='flex justify-center justify-center items-center h-screen'>
    <Image src={loader} alt='loader' width={150} height={150} />
  </div>;
};

export default Loading;