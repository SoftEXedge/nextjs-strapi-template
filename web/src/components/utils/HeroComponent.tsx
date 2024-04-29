type PlaceHolderProps = {
  component: {
    title: string;
    description: string;
    title_bold: boolean;
  };
};

export default function PlaceHolder({ component }: PlaceHolderProps) {
  return (
    <div>
      <h1
        className={`${component.title_bold ? "font-bold" : "font-extralight"}`}
      >
        {component.title}
      </h1>{" "}
      <h3>{component.description}</h3>
    </div>
  );
}
