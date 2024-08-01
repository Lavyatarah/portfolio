const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-800">About Me</h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mb-6">
        Hi there! My name is Lavenia Atarah, and I am a dedicated junior full-stack web developer with a passion for creating elegant and efficient solutions. I am skilled in both front-end and back-end technologies, and I continually strive to enhance my skills and knowledge in this ever-evolving field.
      </p>
      <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mb-6">
        I thrive on transforming complex problems into effective solutions. I have experience working on various projects using technologies like React, Node.js, MongoDB, and Express.js. These projects range from dynamic web applications to robust APIs, showcasing my ability to integrate user-friendly front-end interfaces with powerful back-end systems.
      </p>
      <p>
        My areas of proficiency include:
      </p>
          <li><strong>Front-end:</strong> HTML, CSS, JavaScript, React, Bootstrap</li>
          <li><strong>Back-end:</strong> Node.js, Express.js</li>
          <li><strong>Databases:</strong> MongoDB</li>
          <li><strong>Other Technologies:</strong> Git, Figma, Next.js, TypeScript</li>
      
        <p>In addition to my technical skills, I possess strong analytical abilities, problem-solving skills, and a keen eye for detail. My goal is to write clean, maintainable code while ensuring the best user experience.</p>
    </div>
  );
};

export default About;
