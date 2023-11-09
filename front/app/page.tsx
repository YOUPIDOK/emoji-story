"use client";
import Step from "@/component/UI/step/Step";
import { useEffect, useState } from "react";
import { StoryStep } from "../../interface/emoji";

const primaryStep: StoryStep = {
  selectedEmoji: "",
  emojiContender: [
    {
      value: "🚶🏼",
      votes: 0,
    },
    {
      value: "🏊🏻",
      votes: 0,
    },
    {
      value: "💅🏿",
      votes: 0,
    },
    {
      value: "🍍",
      votes: 0,
    },
    {
      value: "👯",
      votes: 0,
    },
    {
      value: "📡",
      votes: 0,
    },
    {
      value: "👧🏽",
      votes: 0,
    },
    {
      value: "🙋🏾",
      votes: 0,
    },
  ],
};

export default function Home() {
  const [step, setStep] = useState<StoryStep>(primaryStep);
  const [timeLeft, setTimeLeft] = useState<number>(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleVote = (emoji: string) => {

    setStep((s) => {
      if (!s.emojiContender) return s;
      const index = s.emojiContender?.findIndex((e) => e.value === emoji);
 
      if (index === -1 || !index) {
        return s;
      }

      const current = s.emojiContender[index];

      s.emojiContender?.splice(index, 1, {
        ...current,
        votes: current.votes + 1,
      });

      return s;
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Step
        step={step}
        stepNumber={0}
        timeLeft={timeLeft}
        handleEmojiClick={handleVote}
      />
    </main>
  );
}
