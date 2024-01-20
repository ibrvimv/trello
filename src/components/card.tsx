import { DraggableProvided } from 'react-beautiful-dnd';
import EditIcon from '@mui/icons-material/Edit';
type CardType = {
  bgColor: string;
  title: string;
  subtitle: string;
  text: string;
  id: string;
};
export default function Card({
  props,
  provided,
}: {
  props: CardType;
  provided: DraggableProvided;
}): JSX.Element {
  return (
    <div
      className={`_card ${props?.bgColor} p-4 rounded-lg shadow-md mb-4`}
      {...provided.dragHandleProps}
      {...provided.draggableProps}
      ref={provided.innerRef}
    >
      <div className='flex justify-between items-center'>
        <h3>{props.title}</h3>
        <div className='p-2 cursor-pointer hover:opacity-30 transition-opacity duration-150'>
          <EditIcon fontSize='medium' />
        </div>
      </div>

      <h4>{props.subtitle}</h4>
      <p>{props.text}</p>
    </div>
  );
}
