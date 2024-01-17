import Card from './card';
import Column from './column';

export default function MainContent(): JSX.Element {
  return (
    <div className='_content-container h-full w-full'>
      <div className='flex flex-col gap-4 h-full w-full'>
        <div className=' h-20 rounded-lg bg-white p-4 shadow-md shrink-0'></div>
        <div className='_columns flex gap-4  h-full'>
          <Column />
          <Column />
          <Column />
        </div>
      </div>
    </div>
  );
}
