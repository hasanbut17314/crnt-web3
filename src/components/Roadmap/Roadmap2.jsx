import React from 'react';

const roadmapItems = [
  {
    id: 1,
    label: "Q3 2024",
    list: [
      {
        id: 1,
        text: "Project conceptualization, team formation, and initial research.",
      },
      {
        id: 2,
        text: "ICO planning and strategy development",
      },
    ],
  },
  {
    id: 2,
    label: "Q4 2024",
    list: [
      {
        id: 1,
        text: "ICO marketing and community outreach to attract investors and build a strong supporter base.",
      },
      { id: 2, text: "Development of the Creationnetwork platform begins" },
    ],
  },
  {
    id: 3,
    label: "Q1 2025",
    list: [
      {
        id: 1,
        text: "ICO token sale and allocation.",
      },
      {
        id: 2,
        text: "Finalize platform development, including bug fixing, performance optimization, and security audits",
      },
      {
        id: 3,
        text: "Launch the Creationnetwork platform",
      },
    ],
  },
  {
    id: 4,
    label: "Q2 2025",
    list: [
      {
        id: 1,
        text: "Gather user feedback and implement improvements to enhance user experience and functionality",
      },
    ],
  },
  {
    id: 5,
    label: "Q3 2025",
    list: [
      {
        id: 1,
        text: "Start creating the Creationnetwork mobile app for easier access and to meet the increasing need for using the platform on mobile devices",
      },
    ],
  },
  {
    id: 6,
    label: "Q4 2025",
    list: [
      {
        id: 1,
        text: "Introduction of additional tools and products, such as podcasting capabilities, analytics features, and campaign management tools",
      },
    ],
  },
  {
    id: 7,
    label: "Q1 2026",
    list: [
      {
        id: 1,
        text: "Expansion of the Creationnetwork community through marketing and outreach efforts to attract new users, content creators, and investors",
      },
    ],
  },
  {
    id: 8,
    label: "Q2 2026",
    list: [
      {
        id: 1,
        text: "Further expansion of the user base and platform adoption through strategic partnerships and collaborations",
      },
    ],
  },
  {
    id: 9,
    label: "Q3 2026",
    list: [
      {
        id: 1,
        text: "Continuous improvement and innovation of existing tools and products based on user feedback and market trends",
      },
    ],
  },
  {
    id: 10,
    label: "Q4 2026",
    list: [
      {
        id: 1,
        text: "Exploration of emerging technologies, such as AI-generated content and virtual reality, to enhance the Creationnetwork platform's capabilities",
      },
    ],
  },
  {
    id: 11,
    label: "Q1 2027",
    list: [
      {
        id: 1,
        text: "Continued growth and expansion into new markets, establishing the Creationnetwork as a leading platform for content creation and AI-powered services",
      },
    ],
  },
];

const RoadmapItem = ({ data, isLast }) => (
  <div className="position-relative ps-5 mb-5">
    {/* Vertical line */}
    {!isLast && (
      <div className="position-absolute start-0 top-0 h-100"
           style={{
             width: '2px',
             backgroundColor: 'rgba(255, 255, 255, 0.3)',
             transform: 'translateX(15px)',
             top: '24px'
           }}
      />
    )}
    
    {/* Timeline dot */}
    <div className="position-absolute start-0 rounded-circle bg-primary" 
         style={{
           width: '32px',
           height: '32px',
           transform: 'translateX(0)',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center'
         }}>
      <i className="fas fa-cog text-white small"></i>
    </div>
    
    {/* Content */}
    <div className="ms-4">
      <h3 className="h4 text-white mb-3">{data.label}</h3>
      <div className="p-3 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        <ul className="list-unstyled mb-0">
          {data.list.map((item) => (
            <li key={item.id} className="text-white-50 mb-2">
              <i className="fas fa-circle me-2 small"></i>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Roadmap2 = () => {
  return (
    <div className="overflow-hidden">
      <section id="roadmap" className="roadmap-section team-bg">
        <div className="container py-5">
          <h2 className="title text-center mb-5">
            Projects<span> Roadmap</span>
          </h2>
          
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              {roadmapItems.map((item, index) => (
                <RoadmapItem 
                  key={item.id}
                  data={item}
                  isLast={index === roadmapItems.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap2;