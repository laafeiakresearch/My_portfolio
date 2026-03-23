import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills & Certifications</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
          <div className="space-y-4">
            {skills.technical.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {skills.certifications.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}