import Image from "next/image";

const aboutData = [
  {
    title: "French Native",
    text: "Born in Besançon, France, fully trained under the French educational system; moved to beautiful Buffalo, NY in 2005.",
    image: "/native-ntft1.jpg",
  },
  {
    title: "Personalized Lessons",
    text: "Adapted to your pace and style; customized lessons designed just for you",
    image: "/personalized-ntft1.jpg",
  },
  {
    title: "Extensive Experience",
    text: "50+ private students over the years, and teaching for various organization including the French Alliance of Buffalo",
    image: "/expertise-ntft1.jpg",
  },
];

const AboutBlock = ({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col space-y-4 relative  items-center">
      <Image
        src={image}
        alt={title}
        width={"640"}
        height={"480"}
        className="hover:scale-105 transform transition duration-500 ease-in-out"
      />
      <div className="heading-title" style={{ fontSize: "24px" }}>
        {title}
      </div>
      <div className="image-box-description text-center">{text}</div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <section className="flex flex-col mx-auto">
        <div className="flex flex-row justify-between items-center space-x-4">
          <h1 className="uppercase divider-text">About</h1>
          <div className=" border-4 w-full divider-color"></div>
        </div>
        <div className="flex flex-row justify-between space-x-4 my-8">
          <div className="heading-title md:w-[40%]">
            No matter your level or your age, learn French with Nathalie
          </div>
          <div className="text-heading md:w-[60%]">
            Indeed, there are many reasons to learn French; it can be to travel
            to France, the #1 tourist destination worldwide, or other French
            speaking countries (54!) or to boost your career, your academic
            performance, or even as an intellectually fulfilling hobby.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
          {aboutData.map((data, index) => (
            <AboutBlock key={index} {...data} />
          ))}
        </div>
      </section>
    </div>
  );
}
