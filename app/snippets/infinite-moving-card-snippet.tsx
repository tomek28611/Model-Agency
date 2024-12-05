"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with this agency has been a game-changer for me. Thanks to their expert guidance and support, I’ve been able to earn more than I ever imagined. I feel like I’m part of a family, and my income continues to grow every day!",
    name: "Lena ",
    title: "",
  },
  {
    quote:
     "I’ve been with this agency for a few months now, and I’m already making incredible money. The team is amazing – they helped me build my brand and take my OnlyFans to the next level. I couldn’t be happier with the results!",
    name: "Sophie ",
    title: "",
  },
  {
    quote:"I never thought I could make this much money on OnlyFans until I joined this agency. They’ve provided me with everything I needed to succeed – from marketing strategies to personal support. I’m now living the dream!" ,
    name: "Isabella ",
    title: "",
  },
  {
    quote:
     "From the very first day, this agency helped me create a solid plan for my OnlyFans. Their dedication and expertise have led to massive growth in my earnings. I feel supported and motivated to keep going – and the money just keeps rolling in!",
    name: "Chloe",
    title: "",
  },
  {
    quote:
    "Joining this agency was the best decision I’ve ever made. They’ve helped me grow my fanbase, increase my earnings, and take my career to new heights. I’m constantly amazed by how much money I’m making now – and it’s all thanks to their hard work and support." ,
    name: "Mia",
    title: "",
  },
];
