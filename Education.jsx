import { education } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold">{education.degree}</h3>
        <p className="text-gray-400">{education.institution} | {education.year}</p>
        <p className="text-gray-300 mt-2">CGPA: {education.cgpa}</p>
      </div>
    </section>
  );
}