import { ShoppingCart, UserIcon } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import ModeToogle from './mode-toogle';
const Header = () => {
    return <header className='w-full border-b'>
        <div className='wrapper flex-between'>
            <div className='flex-start'>
                <Link href='/' className='flex-start gap-3'>
                    <Image src='/favicon.ico' alt={APP_NAME} width={100} height={100} />
                    <span className='text-2xl font-bold'>{APP_NAME}</span>
                </Link>
            </div>
            <div className="space-x-4">
                <Button asChild variant='ghost'>
                    <Link href='/cart'>
                    <ShoppingCart className='size-5' />
                    <span className='text-sm'>Cart</span>
                    </Link>
                </Button>
                <Button asChild variant='ghost'>
                    <Link href='/sign-in'>
                    <UserIcon className='size-5' />
                    <span className='text-sm'>Sign In</span>
                    </Link>
                </Button>
                <ModeToogle />
            </div>
        </div>
    </header>
};

export default Header;