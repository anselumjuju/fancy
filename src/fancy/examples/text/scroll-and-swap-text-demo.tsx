import ScrollAndSwapText from "@/fancy/components/text/scroll-and-swap-text";
import { useRef } from "react";

export default function Preview() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="w-full h-full rounded-lg items-center justify-center font-overusedGrotesk p-2 overflow-auto overscroll-auto bg-[#f7f5f5] relative"
      ref={containerRef}
    >
      <div className="h-[100%] flex justify-center items-center uppercase relative">
        <p className="absolute bottom-4 left-4 font-bold text-xl">
          SCROLL SLOWLY
        </p>
        <div className="flex text-6xl justify-center items-center flex-col text-black">
          <ScrollAndSwapText
            label="Every day is a journey,"
            offset={["0 0.15", "0 0.35"]}
            className="font-bold "
            containerRef={containerRef}
          />
          <ScrollAndSwapText
            label="and the journey"
            offset={["0 0.25", "0 0.45"]}
            className="font-bold "
            containerRef={containerRef}
          />
          <ScrollAndSwapText
            label=" itself is home."
            offset={["0 0.35", "0 0.55"]}
            className="font-bold"
            containerRef={containerRef}
          />
        </div>
      </div>
      <div className="h-[30%]"></div>
    </div>
  );
}
