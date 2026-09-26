import Image from "next/image";
import Link from "next/link";

import bannerImg from "@/assets/banner.png";
import LibraryPart from "@/components/home-page/LibraryPart";

export default function Home() {
  return (
    <>
      <section className="my-10 md:my-16 px-5 md:px-6 lg:px-0">
        <div className="container my-10 flex justify-between gap-8 bg-[#222630] p-8 md:my-16 md:p-14 rounded-md">
          {/* Text Part */}
          <div className="flex w-full flex-col items-start gap-4 md:w-2/3">
            <p className="text-[12px] font-bold text-[#C2F800]">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-[36px] font-bold leading-tight text-white md:text-[55px] tracking-tighter md:leading-[1.15]">
              TRAIN WITH INTENT. LOG <br />
              EVERY SET.
            </h1>

            <p className="text-[16px] font-normal leading-7 text-[#9CA3AF]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              <br className="hidden md:block" />
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* Browse Button */}
            <Link
              href="#workouts"
              className="mt-2 inline-flex w-fit items-center bg-[#C2F800] px-5 py-3 text-[12px] font-bold text-black transition-all duration-300 hover:bg-[#d5ff33] hover:shadow-lg rounded-md"
            >
              BROWSE WORKOUTS
            </Link>
          </div>

          {/* Image Part */}
          <div className="hidden w-1/3 items-center justify-center md:flex">
            <Image
              src={bannerImg}
              alt="Workout banner"
              className="h-auto w-full max-w-[350px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Library section */}
      <section>
        <LibraryPart />
      </section>
    </>
  );
}
