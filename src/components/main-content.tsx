'use client';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Column from './column';
import { useState } from 'react';

export type DataType = {
  title: string;
  bgColor: string;
  id: string;
};

const DATA = [
  {
    title: 'First',
    bgColor: 'bg-red-200',
    id: '1111Adsfdsfdsf',
  },
  {
    title: 'Second',
    bgColor: 'bg-cyan-200',
    id: '2222fdsfsfalfdslf',
  },
  {
    title: 'Third',
    bgColor: 'bg-green-200',
    id: '3333erweirpweprp',
  },
];

export default function MainContent(): JSX.Element {
  const [store, setStore] = useState<DataType[]>(DATA);

  const handleDragDrop = (results: DropResult) => {
    const { source, destination, type } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    if (type === 'group') {
      const reorderedStore = [...store];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedStore] = reorderedStore.splice(sourceIndex, 1);
      reorderedStore.splice(destinationIndex, 0, removedStore);

      return setStore(reorderedStore);
    }
  };
  return (
    <div className='_content-container h-full w-full'>
      <div className='flex flex-col gap-4 h-full w-full'>
        <div className='flex items-center h-20 rounded-lg bg-white p-4 shadow-md shrink-0'>
          <h1 className='text-xl font-bold text-main'>
            Test React Drag and Drop - Trello
          </h1>
        </div>
        <DragDropContext onDragEnd={handleDragDrop}>
          <div className='_columns flex gap-4 h-full'>
            <Column store={store} />
            {/* <Column />
            <Column /> */}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
