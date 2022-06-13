import Link from 'next/link';
import Menu from './layout_components/menu';
import MobileMenu from './layout_components/mobile_menu';

export default function Layout({ children }) {

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='py-4 bg-blue-500 flex items-center'>
        <div className='container mx-auto flex items-center '>
          <Link href='/'>
            <a className='text-2xl font-bold text-white px-6'>Coleren</a>
          </Link>
        </div>

        <Menu/>
        <MobileMenu/>

      </header> 
      <main className='flex-1'>{children}</main>
      <footer className=' py-4 bg-blue-500'>
        <div className='container mx-auto flex justify-center text-white'>
          &copy; 2022 ZumTheZazaKing
        </div>
      </footer>
    </div>
  );
}