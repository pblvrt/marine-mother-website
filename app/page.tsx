import SectionHeader from "./Components/SectionHeader"; // Adjust the import path as necessary
import ContentGrid, { AboutBlock } from "./Components/ContentGrid"; // Adjust the import path as necessary
import ReviewsCarousel from "./Components/Reviews"; // Adjust the import path as necessary
import HeroImage from "./Components/Hero";
import Navigation from "./Components/Navigation";
const reviews = [
  {
    author: "John Doe",
    text: " My French has improved from absolute beginner to an advanced level speaker.  I continued to build on the foundation that Nathalie has given me, and enrolled at the University of NC, Charlotte where I earned a BA in French last December. ",
  },
  { author: "Jane Smith", text: "Nathalie is a fantastic teacher." },
  { author: "Alice Johnson", text: "Learned so much in a short time!" },
];

const lessonData = [
  {
    title: "In Person",
    text: "Enjoy face-to-face learning in a comfortable home setting in Williamsville.",
    image: "/in-person-tutor-ntft.png",
  },
  {
    title: "Virtual",
    text: "Busy schedule? Learn from anywhere via FaceTime, Zoom, or Skype.",
    image: "/virtual-tutor-ntft.png",
  },
  {
    title: "Blended",
    text: "Combine in-person and virtual lessons to fit your lifestyle.",
    image: "/blended-tutor-ntft.png",
  },
];

const aboutData = [
  {
    title: "French Native",
    text: "Born in Besançon, France, and now in Buffalo, NY since 2005.",
    image: "/native-ntft1.jpg",
  },
  {
    title: "Personalized Lessons",
    text: "Lessons tailored to your pace and style, just for you.",
    image: "/personalized-ntft1.jpg",
  },
  {
    title: "Extensive Experience",
    text: "Over 50 private students and teaching for the French Alliance of Buffalo.",
    image: "/expertise-ntft1.jpg",
  },
];

const focusData = [
  {
    title: "Conversational / Pronunciation",
    text: "Master everyday conversations and improve your pronunciation. Perfect for ordering your baguette à la boulangerie!",
    image: "/conversation-tutor-ntft.png",
  },
  {
    title: "Grammar / Composition",
    text: "Enhance your academic performance with clear grammar explanations and practice exercises.",
    image: "/grammar-tutor-ntft.png",
  },
  {
    title: "Crash Courses",
    text: "Quickly prepare for travel, work missions, or exams with intensive, focused lessons.",
    image: "/crash-course-tutor-ntft.png",
  },
];

const additionalServicesData = [
  {
    title: "Travel Planning",
    text: "Plan your trip to France with personalized itineraries and reservations for a hassle-free experience.",
    image: "/travel-ntft1.jpg",
  },
  {
    title: "Cooking Class",
    text: "Join Nathalie's French cooking classes in Williamsville. Check Facebook for dates and menus.",
    image: "/cooking-ntft1.jpg",
  },
  {
    title: "Translations",
    text: "Get timely and affordable translations for websites, brochures, and more. Contact for details.",
    image: "/translation-ntft1.jpg",
  },
  {
    title: "Business French",
    text: "Tailored lessons for professional fluency, organized in your office for international companies.",
    image: "/business-ntft1.jpg",
  },
];

export default function Home() {
  return (
    <div className="">
      <Navigation />
      <HeroImage />
      <section id="about" className="flex flex-col mx-auto px-4 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <h1 className="uppercase divider-text text-center md:text-left font-abril">
            About
          </h1>
          <div className="border-4 w-full divider-color"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 my-8">
          <div className="heading-title md:w-[40%] text-center md:text-left">
            No matter your level or your age, learn French with Nathalie
          </div>
          <div className="text-heading md:w-[60%] text-center md:text-left">
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
      <section id="lessons" className="flex flex-col mx-auto mt-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <h1 className="uppercase divider-text font-abril text-center md:text-left">
            Lessons
          </h1>
          <div className="border-4 w-full divider-color"></div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-between space-y-4 md:space-y-0 md:space-x-4 my-8">
          <div className="heading-title md:w-[40%] text-center md:text-left">
            We’re all different, and so is the way we learn.
          </div>
          <div className="text-heading lato md:w-[60%] text-center md:text-left">
            With Nathalie, lessons will be tailored to your age, level,
            preferred learning style, and pace to ensure that achieving the
            fluency you’re looking for is an enjoyable experience every step of
            the way!
          </div>
        </div>
        <SectionHeader number={1} text="First of, choose your format:" />
        <ContentGrid data={lessonData} />
        <SectionHeader number={2} text="Second, choose your focus:" />
        <ContentGrid data={focusData} />
        <SectionHeader number={3} text="Lastly, a few extras:" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full p-16 gradient">
          {additionalServicesData.map((item, index) => (
            <AboutBlock key={index} {...item} />
          ))}
        </div>
      </section>
      <section id="reviews" className="flex flex-col mx-auto mt-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <h1 className="uppercase divider-text font-abril text-center md:text-left">
            Reviews
          </h1>
          <div className="border-4 w-full divider-color"></div>
        </div>
        <ReviewsCarousel reviews={reviews} />
      </section>
    </div>
  );
}
