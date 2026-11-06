import { useEffect, useState } from "react";

const WORDS = ["Growth System.", "Lead Engine.", "Revenue System."];

export function HeroTypewriter({
  words = WORDS,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDelay = 2000,
}: {
  words?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState<string>(words[0] ?? "Growth System.");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const initialTimer = setTimeout(() => {
      setIsDeleting(true);
    }, pauseDelay);
    return () => clearTimeout(initialTimer);
  }, [pauseDelay]);

  useEffect(() => {
    if (!isMounted) return;

    const currentWord = words[wordIndex % words.length] ?? "Growth System.";
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        timer = setTimeout(() => {}, 250);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, isMounted, typingSpeed, deletingSpeed, pauseDelay]);

  return (
    <span className="text-purple-700 inline-inline">
      {text}
      <span
        aria-hidden="true"
        className="inline-block w-[3px] h-[0.82em] bg-purple-700 ml-1 align-baseline animate-pulse"
      />
    </span>
  );
}
