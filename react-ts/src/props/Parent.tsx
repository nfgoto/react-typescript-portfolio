import { Child } from "./Child";

const Parent = () => (
  <Child color="black" onClick={() => console.log("clicked")} />
);

export default Parent;
