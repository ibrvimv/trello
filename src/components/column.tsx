import Card from './card';

export default function Column(): JSX.Element {
  return (
    <div className='_column p-4 rounded-lg flex flex-col gap-4 bg-white shadow-md max-w-80'>
      <Card bgColor='bg-red-200' />
      <Card bgColor='bg-cyan-200' />
      <Card bgColor='bg-green-200' />
    </div>
  );
}
