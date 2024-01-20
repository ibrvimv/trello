'use client';
import Card from './card';
import { Droppable, Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { ColumnType, ModalType } from './main-content';
import AddIcon from '@mui/icons-material/Add';
import Modal from './modal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/redux/data-slice';

export default function Column({
  column,
  provided,
}: {
  column: ColumnType;
  provided: DraggableProvided;
}): JSX.Element {
  const columnId = column.id;

  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(openModal({ columnId }));
  };

  return (
    <div
      className='_column p-4 rounded-lg flex flex-col bg-white shadow-md max-w-80 w-full mr-4'
      {...provided.dragHandleProps}
      {...provided.draggableProps}
      ref={provided.innerRef}
    >
      <div className='flex justify-between items-center mb-4'>
        <div className='text-lg font-bold'>{column.title}</div>
        <div
          onClick={handleModal}
          className='hover:bg-green-400 bg-green-200 transition-colors duration-150 cursor-pointer  flex items-center rounded-md w-fit px-4 py-2 '
        >
          <AddIcon fontSize='medium' /> Add Item
        </div>
      </div>
      <Modal columnId={columnId} />
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className='_column-droppable flex flex-col'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {column.items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => <Card props={item} provided={provided} />}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
