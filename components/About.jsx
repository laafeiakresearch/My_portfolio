
import { about } from '../data';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {about.description}
        </p>
      </div>
    </section>
  );
}
