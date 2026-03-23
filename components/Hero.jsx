import { personal } from '../data';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {personal.name}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-6">{personal.title}</p>
      <div className="flex gap-4 mb-8">
        <span className="flex items-center gap-2 text-gray-400">
          <MapPin size={18} /> {personal.location}
        </span>
        <a href={`mailto:${personal.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white">
          <Mail size={18} /> Email
        </a>
        {personal.linkedin && (
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white">
            <Linkedin size={18} /> LinkedIn
          </a>
        )}
        {personal.telegram && (
          <a href={`https://t.me/${personal.telegram.slice(1)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white">
            <Send size={18} /> Telegram
          </a>
        )}
      </div>
      {personal.resumeLink && (
        <a
          href={personal.resumeLink}
          className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
          download
        >
          Download Resume
        </a>
      )}
    </section>
  );
}