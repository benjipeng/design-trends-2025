export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Design Trends 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the cutting-edge design trends shaping the digital landscape in 2025
          </p>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold mb-3">{trend.title}</h2>
              <p className="text-gray-600">{trend.description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

const trends = [
  {
    title: "Modern Typography",
    description: "Bold, expressive type that makes a statement and enhances readability across all devices.",
  },
  {
    title: "Glassmorphism",
    description: "Translucent UI elements with blur effects creating depth and visual hierarchy.",
  },
  {
    title: "Micro-interactions",
    description: "Subtle animations that provide feedback and enhance user engagement.",
  },
  {
    title: "3D Elements",
    description: "Immersive three-dimensional graphics bringing depth to web experiences.",
  },
  {
    title: "Kinetic Typography",
    description: "Animated text that captures attention and tells stories through motion.",
  },
  {
    title: "Minimalist Maximalism",
    description: "Bold visual impact achieved through strategic use of whitespace and color.",
  },
];
