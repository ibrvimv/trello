'use client';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Column from './column';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, reorderItems } from '@/redux/data-slice';

export type DataType = {
  title: string;
  bgColor: string;
  id: string;
};
type PropType = {
  items: DataType[];
};

export default function MainContent(): JSX.Element {
  const DATA = useSelector((state: PropType) => state.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(
      addItem({
        title: 'Forth',
        bgColor: 'bg-red-200',
        id: '4444Adsfdsfdsf',
      })
    );
  };

  const handleDragDrop = (results: DropResult) => {
    const { source, destination, type } = results;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === 'group') {
      // const reorderedStore = [...DATA];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      // const [removedStore] = reorderedStore.splice(sourceIndex, 1);
      // reorderedStore.splice(destinationIndex, 0, removedStore);

      dispatch(reorderItems({ sourceIndex, destinationIndex }));
    }
  };

  return (
    <div className='_content-container h-full w-full'>
      <div className='flex flex-col gap-4 h-full w-full'>
        <div className='flex items-center h-20 rounded-lg bg-white p-4 shadow-md shrink-0'>
          <h1 className='text-xl font-bold text-main'>
            Test React Drag and Drop - Trello. Author - Adlet Ibraimov
          </h1>
          <button onClick={handleAddItem}>Add Item</button>
        </div>
        <DragDropContext onDragEnd={handleDragDrop}>
          <div className='_columns flex gap-4 h-full'>
            <Column store={DATA} />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
