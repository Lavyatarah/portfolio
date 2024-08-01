// src/app/components/Projects.tsx
import Link from 'next/link';
import { Card, CardContent } from './Card'; // Import the Card and CardContent components

const projects = [
  {
    title: 'Petty cash managment',
    description: 'A web application to manage petty cash transactions, track expenses, and generate reports.',
    imageSrc: '/placeholder.svg',
    link: 'https://github.com/Lavyatarah/pettycashmanagment',
  },
  {
    title: 'pizza Restaurant',
    description: 'The application is set up to manage pizzas and restaurants, with the ability to associate pizzas with restaurants through a many-to-many relationship',
    imageSrc: '/placeholder.svg',
    link: 'https://github.com/Lavyatarah/Flask-Code-Challenge---Pizza-Restaurants',
  },
  {
    title: 'chicken farmers',
    description: 'Express.js routes for handling user registration, login, and profile access for farmers. It uses bcrypt for password hashing and jwt for token-based authentication',
    imageSrc: '/placeholder.svg',
    link: 'https://github.com/Lavyatarah/chicken-farmers',
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10 text-center">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <div className="flex justify-end">
                <Link
                  href={project.link}
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  prefetch={false}
                >
                  View Project
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
