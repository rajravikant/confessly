import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const confessions = [
  {
    username: "StarGazer",
    body: "This experience has been out of this world. Truly unforgettable.",
  },
  {
    username: "DreamWeaver",
    body: "I never thought I'd feel this way. It's like a dream come true.",
  },
  {
    username: "PixelPioneer",
    body: "The creativity here is unmatched. I'm inspired beyond words.",
  },
  {
    username: "CodeCrafter",
    body: "This is a masterpiece. I can't stop thinking about it.",
  },
  {
    username: "SkyWalker",
    body: "I feel like I'm walking on clouds. This is pure magic.",
  },
  {
    username: "OceanSoul",
    body: "This has touched my soul in ways I can't describe. Thank you.",
  },
  {
    username: "ShadowHunter",
    body: "I didn't expect to be moved like this. It's incredible.",
  },
  {
    username: "LunaLover",
    body: "This has brought so much light into my life. I'm in awe.",
  },
  {
    username: "NovaSeeker",
    body: "I feel like I've discovered a new universe. This is amazing.",
  },
  {
    username: "EchoDreamer",
    body: "This resonates with me on such a deep level. I'm so grateful.",
  },
];

const firstRow = confessions.slice(0, confessions.length / 2);
const secondRow = confessions.slice(confessions.length / 2);

const ConfessionCard = ({
  username,
  body,
}: {
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          
          <p className="text-xs font-medium text-white/80">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-[#878e9d]">{body}</blockquote>
    </figure>
  );
};

export function Marquee3D() {
  return (
    <div className="relative flex h-full w-full flex-row items-center justify-center gap-4 overflow-hidden ">
      <div
        className="flex flex-row items-center gap-4"
        // style={{
        //   transform:
        //     "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        // }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review,index) => (
            <ConfessionCard key={index} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((review,index) => (
            <ConfessionCard key={index} {...review} />
          ))}
        </Marquee>
       
      </div>

      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div> */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}
