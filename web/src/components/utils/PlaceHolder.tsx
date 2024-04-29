type PlaceHolderProps = {
  component: {
    title: string;
    color: string;
  };
};

export default function PlaceHolder({ component }: PlaceHolderProps) {
  return <h1 style={{ color: component.color }}>{component.title}</h1>;
}
