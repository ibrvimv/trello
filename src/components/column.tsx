'use client';
import Card from './card';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { DataType } from './main-content';
import AddIcon from '@mui/icons-material/Add';
import Modal from './modal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/redux/modal-slice';

export default function Column({ store }: { store: DataType[] }): JSX.Element {
  const modal = useSelector(
    (state: { modal: { visible: boolean } }) => state.modal
  );
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(openModal());
  };

  return (
    <div className='_column p-4 rounded-lg flex flex-col bg-white shadow-md max-w-80'>
      <div className=''>
        <div
          onClick={handleModal}
          className='hover:bg-green-200 transition-colors duration-150 cursor-pointer  flex items-center rounded-md w-fit px-4 py-2 mb-4'
        >
          <AddIcon fontSize='medium' /> Add
        </div>
      </div>
      <Modal visible={modal.visible} />
      <Droppable droppableId='ROOT' type='group'>
        {(provided) => (
          <div
            className='_column-droppable flex flex-col'
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
    </div>
  );
}
