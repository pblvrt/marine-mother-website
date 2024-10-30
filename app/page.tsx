import SectionHeader from "./Components/SectionHeader"; // Adjust the import path as necessary
import ContentGrid, { AboutBlock } from "./Components/ContentGrid"; // Adjust the import path as necessary
import ReviewsCarousel from "./Components/Reviews"; // Adjust the import path as necessary
import HeroImage from "./Components/Hero";
import Navigation from "./Components/Navigation";
import Image from "next/image";
import Link from "next/link"; // Make sure this is also imported

const reviews = [
  {
    author: "Thomas S. (72 / RETIRED)",
    text: "After only 2 years with Nathalie, I am capable of carrying everyday conversations in French, and felt confident enough to spend 4 immersive weeks in France.",
  },
  {
    author: "Dolah S. (57 / RECRUITER)",
    text: "Nathalie cares that you understand the reasons behind the grammar rules, kindly correcting you while you practice conversation; this enabled me to reach professional fluency.",
  },
  {
    author: "Carolyn M. (65 / HOMEMAKER)",
    text: "I was searching for a native tutor, and found Nathalie. She's patient, organized, flexible and always finds practical topics as the basis of our lessons!",
  },
  {
    author: "Sasha N. (14 / STUDENT)",
    text: "Nathalie's constant optimism and encouragement make the challenge of learning a language, extremely fun and inspiring.",
  },
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
    <main>
      <h1 className="sr-only">French Tutor in Buffalo NY - Private French Lessons</h1>
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
      <section id="pricing" className="flex flex-col mx-auto mt-12 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <h1 className="uppercase divider-text font-abril text-center md:text-left">
            Pricing
          </h1>
          <div className="border-4 w-full divider-color"></div>
        </div>

        {/* <div className="text-center my-16">
          <div className="heading-title text-gray-600">
            Choose the format that works best for you
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-16">
          {/* Single */}
          <div className="flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="font-abril text-2xl mb-6 text-gray-600">Single</h2>
            <div className="space-y-4 text-center">
              <div className="pricing-option">
                <p className="text-lg font-bold text-gray-600">60 minutes</p>
                <p className="text-3xl font-abril text-blue-600">$58</p>
              </div>
              <div className="pricing-option mt-4">
                <p className="text-lg font-bold text-gray-600">90 minutes</p>
                <p className="text-3xl font-abril text-blue-600">$90</p>
              </div>
            </div>
          </div>

          {/* Duo */}
          <div className="flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="font-abril text-2xl mb-6 text-gray-600">Duo</h2>
            <div className="space-y-4 text-center">
              <div className="pricing-option">
                <p className="text-lg font-bold text-gray-600">60 minutes</p>
                <p className="text-3xl font-abril text-blue-600">$35</p>
                <p className="text-sm text-gray-600">per person</p>
              </div>
              <div className="pricing-option mt-4">
                <p className="text-lg font-bold text-gray-600">90 minutes</p>
                <p className="text-3xl font-abril text-blue-600">$45</p>
                <p className="text-sm text-gray-600">per person</p>
              </div>
            </div>
          </div>

          {/* Trio */}
          <div className="flex flex-col items-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="font-abril text-2xl mb-6 text-gray-600">Trio</h2>
            <div className="space-y-4 text-center">
              <div className="pricing-option">
                <p className="text-lg font-bold text-gray-600">90 minutes</p>
                <p className="text-3xl font-abril text-blue-600">$30</p>
                <p className="text-sm text-gray-600">per person</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-16 text-center p-6 bg-gray-50 rounded-lg">
          <p className="text-lg w text-gray-600">
            CANCELLATION POLICY: Please notify at least 24 hours in advance to avoid a $30 fee.
          </p>
        </div>
      </section>
      <section id="contact" className="flex flex-col mx-auto mt-12 px-4 pb-32 max-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <h1 className="uppercase divider-text font-abril text-center md:text-left">
            Contact
          </h1>
          <div className="border-4 w-full divider-color"></div>
        </div>

        <div className="text-center my-16">
          <div className="heading-title">
            Ready to learn French? Reach out to Nathalie!
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full py-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image src="/mail.png" alt="Email" width={48} height={48} />
            </div>
            <h3 className="font-abril text-xl text-gray-600">
              Email
            </h3>
            <Link
              href="mailto:nathalie@ntft.com"
              className="hover:text-blue-400 transition-colors text-gray-600"
            >
              Nathandraud@gmail.com
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image
                src="/communication.png"
                alt="Social Media"
                width={48}
                height={48}
              />
            </div>
            <h3 className="font-abril text-xl text-gray-600">Social Media</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="https://www.facebook.com/ntft.french"
                className="hover:text-blue-400 transition-colors text-gray-600"
              >
                Facebook
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <Image src="/phone.png" alt="Phone" width={48} height={48} />
            </div>
            <h3 className="font-abril text-xl text-gray-600">Phone</h3>
            <Link
              href="tel:7165601714"
              className="hover:text-blue-400 transition-colors text-gray-600"
            >
              (716) 560-1714
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
