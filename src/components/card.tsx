import { DraggableProvided } from 'react-beautiful-dnd';

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
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
      <p>{props.text}</p>
    </div>
  );
}
