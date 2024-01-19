'use client';
import Card from './card';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { DataType } from './main-content';

export default function Column({ store }: { store: DataType[] }): JSX.Element {
  return (
    <Droppable droppableId='ROOT' type='group'>
      {(provided) => (
        <div
          className='_column p-4 rounded-lg flex flex-col  bg-white shadow-md max-w-80'
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {store.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => <Card props={item} provided={provided} />}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
