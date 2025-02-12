export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white min-h-screen p-8">
      <h1 className="text-5xl font-bold mb-4">Welcome to Synaptech Studios</h1>
      <p className="text-lg max-w-2xl">
        Delivering cutting-edge <span className="font-semibold">Web Development</span>, 
        <span className="font-semibold"> App Solutions</span>, and 
        <span className="font-semibold"> AI Automation</span> for modern businesses.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="/about"
          className="bg-white text-blue-500 font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200"
        >
          Learn More
        </a>
        <a
          href="/contact"
          className="border-2 border-white text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-white hover:text-blue-500"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
