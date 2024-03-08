type ListProps = {
  content: Array<string>;
};

export function List({ content }: ListProps) {
  return (
    <ul>
      {content.map((description: string, index: number) => {
        index++;
        return <li key={index}>{description}</li>;
      })}
    </ul>
  );
}
