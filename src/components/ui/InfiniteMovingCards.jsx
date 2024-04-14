import React, { useEffect, useState, useRef } from 'react';
import { cn } from '../../utils/cn'; // Ensure this path is correct based on your project structure

const Card = React.memo(({ quote, name, title }) => (
  <li
    className="w-[350px] max-w-full relative rounded-2xl border border-slate-700 px-8 py-6 md:w-[450px]"
    style={{
      background: "#e76f00"
    }}
  >
    <blockquote>
      <div
        aria-hidden="true"
        className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100% + 4px)] w-[calc(100% + 4px)]"
      ></div>
      <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
        {quote}
      </span>
      <div className="relative z-20 mt-6 flex flex-row items-center">
        <span className="flex flex-col gap-1">
          <span className="text-sm leading-[1.6] text-gray-100 font-normal">
            {name}
          </span>
          <span className="text-sm leading-[1.6] text-gray-100 font-normal">
            {title}
          </span>
        </span >
      </div>
    </blockquote>
  </li>

));

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const addAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current.appendChild(duplicatedItem);
        });

        getDirection();
        getSpeed();
      }
    };

    const getDirection = () => {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    };

    const getSpeed = () => {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "10s" : speed === "normal" ? "40s" : "80s"
      );
    };

    addAnimation();
  }, [direction, speed]); // Dependency array added to re-run effect on direction or speed change

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          "animate-scroll", // Assuming this is a correct class for scrolling animation
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
