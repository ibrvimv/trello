import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export default function Menu(): JSX.Element {
  return (
    <div className='_menu flex flex-col items-center  p-4 rounded-lg bg-white h-full w-20 shadow-md'>
      <div className='flex flex-col items-center gap-8 p-4'>
        <MenuIcon
          fontSize='large'
          className='hover:opacity-30 transition-opacity duration-150 text-main'
        />
        <PersonIcon
          fontSize='large'
          className='hover:opacity-30 transition-opacity duration-150 text-main'
        />
        <HomeIcon
          fontSize='large'
          className='hover:opacity-30 transition-opacity duration-150 text-main'
        />
        <LocalMallIcon
          fontSize='large'
          className='hover:opacity-30 transition-opacity duration-150 text-main'
        />
      </div>
    </div>
  );
}
