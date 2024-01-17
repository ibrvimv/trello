import MainContent from '@/components/main-content';
import Menu from '@/components/menu';

export default function Home(): JSX.Element {
  return (
    <main className='h-full w-full'>
      <div className='_main-container flex gap-4 h-full w-full'>
        <Menu />
        <MainContent />
      </div>
    </main>
  );
}
