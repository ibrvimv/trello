'use client';
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd';
import Column from './column';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, reorderClomuns } from '@/redux/data-slice';

export type ItemType = {
  bgColor: string;
  id: string;
  title: string;
};
export type ColumnType = {
  title: string;
  id: string;
  items: ItemType[];
};

export default function MainContent(): JSX.Element {
  const columns = useSelector((state: { data: ColumnType[] }) => state.data);
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

    // columns
    if (type === 'group') {
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      dispatch(reorderClomuns({ sourceIndex, destinationIndex }));
    }
    // items
    const columnsSourceIndex = columns.findIndex(
      (column) => column.id === source.droppableId
    );
    const columnsDestinationIndex = columns.findIndex(
      (column) => column.id === destination.droppableId
    );

    const newSourceItems = [...columns[columnsSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...columns[columnsDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(source.index, 1);
    newDestinationItems.splice(destination.index, 0, deletedItem);

    const newColumns = [...columns];

    newColumns[columnsSourceIndex] = {
      ...columns[columnsSourceIndex],
      items: newSourceItems,
    };

    newColumns[columnsDestinationIndex] = {
      ...columns[columnsDestinationIndex],
      items: newDestinationItems,
    };
  };

  return (
    <div className='_content-container h-full w-full '>
      <div className='flex flex-col gap-4 h-full w-full'>
        <div className='flex items-center h-20 rounded-lg bg-white p-4 shadow-md shrink-0'>
          <h1 className='text-xl font-bold text-main'>
            Test React Drag and Drop - Trello. Author - Adlet Ibraimov
          </h1>
          <button onClick={handleAddItem}>Add Item</button>
        </div>
        <DragDropContext onDragEnd={handleDragDrop}>
          <div className='_columns flex gap-4 h-full'>
            <Droppable droppableId='ROOT' type='group'>
              {(provided) => (
                <div
                  className='_columns-droppable flex w-full'
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {columns.map((column, index) => (
                    <Draggable
                      key={column.id}
                      draggableId={column.id}
                      index={index}
                    >
                      {(provided) => (
                        <Column column={column} provided={provided} />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
