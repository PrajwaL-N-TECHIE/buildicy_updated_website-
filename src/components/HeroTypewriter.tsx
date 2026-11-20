import { useEffect, useState } from "react";

const WORDS = ["slow follow-up.", "missed enquiries.", "manual delays."];

export function HeroTypewriter({
  words = WORDS,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDelay = 2200,
}: {
  words?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState<string>(words[0] ?? "slow follow-up.");
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

    const currentWord = words[wordIndex % words.length] ?? words[0] ?? "";
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
        timer = setTimeout(() => {}, 220);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, isMounted, typingSpeed, deletingSpeed, pauseDelay]);

  return (
    <span className="inline-flex items-baseline text-purple-700 whitespace-nowrap min-h-[1.15em] select-none">
      <span>{text || "\u00A0"}</span>
      <span
        aria-hidden="true"
        className="inline-block w-[3.5px] sm:w-[4.5px] h-[0.78em] bg-purple-700 ml-1.5 rounded-xs animate-pulse align-middle"
        style={{ verticalAlign: "-0.08em" }}
      />
    </span>
  );
}
