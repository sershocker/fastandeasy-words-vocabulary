import React, { useEffect, useState } from "react";
import WordsItem from "./WordsItem";
import type { Word } from "../types/word";

export default function WordsList() {
  const [words, setWords] = useState<string[]>([]);
  useEffect(() => {
    const fetchWords = async () => {
      const response = await fetch("http://127.0.0.1:3000/words");
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      const dataString = data.map((obj: Word) => obj.original);
      setWords(dataString);
    };
    fetchWords();
  }, []);
  return (
    <div>
      WordsList
      {words.map((obj) => (
        <WordsItem original={obj.toString()} />
      ))}
    </div>
  );
}
