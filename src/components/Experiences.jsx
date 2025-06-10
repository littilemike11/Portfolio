export default function Experiences() {
  const experiences = [
    {
      company: "Distribute Aid",
      link: "https://distributeaid.org/",
      time: "2024 - Present",
      role: "Frontend Developer (Volunteer)",
      summary:
        "As a Frontend Developer at Distribute Aid, a non-profit open-source organization focused on global aid relief, I contributed to the development of a responsive and dynamic website using React. I styled user interfaces with Tailwind CSS and Radix UI, ensuring clean and adaptable layouts. I collaborated with design and backend teams to prioritize website performance, accessibility, and user-friendliness, delivering an optimized experience for users.",
      tools: ["next.js", "tailwind.css", "typescript", "gitpod", "radix UI"],
    },
    {
      company: "Evergreen Investments",
      link: "https://www.linkedin.com/company/evergreeninvestments/",
      time: "Summer 2022",
      role: "Data Analyst (Intern)",
      summary:
        "I collaborated with team members to design an Entity Relationship (ER) Diagram for planning the implementation of a real estate database, ensuring a clear and efficient data structure. Additionally, I worked closely with stakeholders to develop ZOHO CRM dashboards, enabling the tracking and visualization of company performance for informed decision-making.",
      tools: ["Zoho CRM", "ER Diagrams", "Lucid Chart"],
    },
  ];
  return (
    <>
      <section id="experience">
        {/* <SectionHeader title={"Experience"} /> */}
        <h3 className="sticky top-0 bg-opacity-80 backdrop-blur-md rounded-b-lg py-1 mt-12 text-3xl font-semibold tracking-tight sm:text-3xl">
          Experience
        </h3>
        <ul role="list" className="mt-6 space-y-8">
          {experiences.map((experience, index) => (
            <li
              key={index}
              className="flex items-start flex-col border rounded-2xl p-4 "
            >
              <p className="font-mono text-sm">{experience.time}</p>
              <h3 className="text-2xl italic font-medium hover:link hover:link-info">
                <a href={experience.link} alt={`Link to ${experience.company}`}>
                  {experience.company}
                </a>
              </h3>
              <p className="my-2 text-lg">{experience.role}</p>
              <p>{experience.summary}</p>
              <ul className="flex flex-wrap mt-4 justify-center gap-2">
                {experience.tools.map((tool, index) => (
                  <li
                    className="badge badge-primary p-3 text-xs sm:text-sm capitalize m-0.5"
                    key={index}
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
