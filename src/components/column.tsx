import Card from './card';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DATA = [
  {
    color: 'bg-red-200',
    id: '1111',
  },
  {
    color: 'bg-cyan-200',
    id: '2222',
  },
  {
    color: 'bg-green-200',
    id: '3333',
  },
];

export default function Column(): JSX.Element {
  return (
    <Droppable droppableId='ROOT' type='group'>
      {(provided) => (
        <div
          className='_column p-4 rounded-lg flex flex-col  gap-4 bg-white shadow-md max-w-80'
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {DATA.map((item, id) => (
            <Draggable key={id} draggableId={item.id} index={id}>
              {(provided) => (
                <Card key={id} bgColor={item?.color} provided={provided} />
              )}
            </Draggable>
          ))}
        </div>
      )}
    </Droppable>
  );
}
