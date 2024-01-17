export default function Card({ bgColor }: { bgColor: string }): JSX.Element {
  return (
    <div className={`_card ${bgColor} p-4 rounded-lg`}>
      <h3>Title</h3>
      <h4>Subtitle</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius adipisci
        odio quaerat at iure harum minima cumque est autem, officiis sint
        possimus quasi!
      </p>
    </div>
  );
}
