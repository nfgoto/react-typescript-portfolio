const EventComponent: React.FC = () => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (
    event
  ) => console.log(event);
  const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => (
    console.log("being dragged"), console.log(event)
  );

  return (
    <div>
      <h3>Event Component</h3>
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>
    </div>
  );
};

export default EventComponent;
