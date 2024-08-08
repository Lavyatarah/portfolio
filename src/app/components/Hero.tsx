import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] bg-gradient-to-r from-blue-700 to-blue-500 overflow-hidden">
      {/* Background Image or Video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container h-full flex flex-col items-center justify-center text-center text-white space-y-6">
        {/* Main Heading */}
        <h1 className="text-5xl font-bold tracking-tight">
          Welcome to My Portfolio
        </h1>
        {/* Subheading */}
        <p className="text-xl">
          I&apos;m Lavenia Atarah, a Full-Stack Developer passionate about creating modern web applications.
        </p>
        {/* Phone Number */}
        <p className="text-lg mt-4">
          Call me at: <a href="tel:+254723690532" className="text-yellow-400 hover:underline">+254723690532</a>
        </p>
        <p>
          Email me at: <a href="mailto:mattlavyy@gmail.com" className="text-yellow-400 hover:underline">mattlavyy@gmail.com</a>
        </p>
        {/* Call-to-Action Button */}
        <Link
          href="#contact"
          className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-6 py-3 text-lg font-medium text-black shadow-sm transition-colors hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
          prefetch={false}
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Hero;
