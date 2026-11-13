interface WordsItemProps {
  original: string;
}

export default function WordsItem({ original }: WordsItemProps) {
  return <div>{original}</div>;
}
