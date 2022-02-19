interface ChildProps {
  color: string;
  onClick: () => void;
}

// here, we have a function that takes props and return JSX (not necessarily a React functional component)
// this typing does not auto accepts children component (need to define "children" prop in ChildProps)

export const Child = ({ color, onClick }: ChildProps) => (
  <div>
    Hello {color}
    <button onClick={onClick}>Click me</button>
  </div>
);

// more descriptive typing, we are creating a React functional component (richer typing)
// wwith this typing, assigned component properties are known (propTypes, contextTypes, etc...)
// React.FC same as React.FunctionComponent
// this typing  auto accepts children components

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => (
  <div>
    Hello {color}
    {children}
    <button onClick={onClick}>Click me</button>
  </div>
);
