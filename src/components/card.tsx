import { DraggableProvided } from 'react-beautiful-dnd';

type CardType = {
  bgColor: string;
  title: string;
  id: string;
};
export default function Card({
  props,
  provided,
}: {
  props: CardType;
  provided: DraggableProvided;
}): JSX.Element {
  console.log(props);
  return (
    <div
      className={`_card ${props?.bgColor} p-4 rounded-lg shadow-md mb-4`}
      {...provided.dragHandleProps}
      {...provided.draggableProps}
      ref={provided.innerRef}
    >
      <h3>{props.title}</h3>
      <h4>Subtitle</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius adipisci
        odio quaerat at iure harum minima cumque est autem, officiis sint
        possimus quasi!
      </p>
    </div>
  );
}
