export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",

  navItems: [
    { label: "About", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Techs", href: "#techs" },
    { label: "Projects", href: "#projects" },
  ],
  navMenuItems: [
    { label: "About", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Techs", href: "#techs" },
    { label: "Projects", href: "#projects" },
  ],

  backend: [
    {
      title: "Next.js",
      detail: "A full-stack React framework for building modern web applications.",
      svg: "/assets/nextjs.svg"
    },
    {
      title: "Laravel",
      detail: "A robust PHP framework for building scalable backend systems.",
      svg: "/assets/laravel.svg"
    },
    {
      title: "Go",
      detail: "A high-performance language ideal for backend services and APIs.",
      svg: "/assets/go.svg"
    },
  ],
  erp:[
    {
      title: "Odoo",
      detail: "An open-source ERP framework with modular applications for enterprise business operations.",
      svg: "/assets/odoo.svg"
    },
  ],
  frontend: [
    {
      title: "React.js",
      detail: "A JavaScript library for building interactive user interfaces.",
      svg: "/assets/reactjs.svg"
    },
    {
      title: "Vue.js",
      detail: "A progressive and lightweight framework for building UI components.",
      svg: "/assets/vuejs.svg"
    },
    {
      title: "Figma",
      detail: "A collaborative tool for UI/UX design and prototyping.",
      svg: "/assets/figma.svg"
    },
  ],
devops: [
  {
    title: "Docker",
    detail: "Containerization platform for building, shipping, and running applications.",
    svg: "/assets/docker.svg",
  },
  {
    title: "Linux",
    detail: "Server administration, system configuration, and performance management.",
    svg: "/assets/linux.svg",
  },
  {
    title: "Ansible",
    detail: "Automation and configuration management for infrastructure provisioning.",
    svg: "/assets/ansible.svg",
  },
  {
    title: "Cisco",
    detail: "Network configuration, routing, switching, and basic security management.",
    svg: "/assets/cisco.svg",
  },
  {
    title: "Grafana",
    detail: "Monitoring and visualization for system and application metrics.",
    svg: "/assets/grafana.svg",
  },
  {
    title: "Zabbix",
    detail: "Enterprise monitoring for servers, networks, and infrastructure services.",
    svg: "/assets/zabbix.svg",
  },
  {
    title: "Prometheus",
    detail: "Metrics collection and monitoring system for cloud-native applications.",
    svg: "/assets/prometheus.svg",
  },
  {
    title: "Nginx",
    detail: "High-performance web server, reverse proxy, and load balancer.",
    svg: "/assets/nginx.svg",
  },
  {
    title: "Apache",
    detail: "Web server for hosting and serving dynamic and static web applications.",
    svg: "/assets/apache.svg",
  },
  {
    title: "AWS",
    detail: "Cloud computing services for scalable infrastructure and deployments.",
    svg: "/assets/aws.svg",
  },
  {
    title: "GitHub",
    detail: "Version control and collaboration platform for source code management.",
    svg: "/assets/github.svg",
  },
  {
    title: "CI/CD",
    detail: "Automated pipelines for continuous integration and deployment.",
    svg: "/assets/cicd.svg",
  },
],

  mobile: [
    {
      title: "Android",
      detail: "Developing Android applications using Kotlin or Java.",
      svg: "/assets/android.svg",
    },
    {
      title: "Swift",
      detail: "The main language for building modern iOS applications.",
      svg: "/assets/swift.svg",
    },
  ],

  Game: [
    {
      title: "Unity",
      detail: "A powerful game engine used to create 2D and 3D games.",
      svg: "/assets/unity.svg",
    },
  ],

  programmingLang: [
    {
      title: "JavaScript",
      detail: "The core language of modern web development.",
      svg: "/assets/javascript.svg",
    },
    {
      title: "Python",
      detail: "A versatile language used in web development, data, and scripting.",
      svg: "/assets/python.svg",
    },
    {
      title: "Java",
      detail: "A stable, object-oriented language widely used in enterprise systems.",
      svg: "/assets/java.svg",
    },
    {
      title: "C",
      detail: "A foundational language used for low-level and embedded systems.",
      svg: "/assets/c.svg",
    },
    {
      title: "C++",
      detail: "A high-performance language commonly used in game engines and systems programming.",
      svg: "/assets/cpp.svg",
    },
    {
      title: "C#",
      detail: "A powerful language for .NET development and Unity game programming.",
      svg: "/assets/csharp.svg",
    },
{
  title: "SQL",
  detail: "Standard query language for managing and manipulating relational databases.",
  svg: "/assets/sql.svg",
},
{
  title: "SSMS",
  detail: "Microsoft SQL Server Management Studio for database administration and querying.",
  svg: "/assets/ssms.svg",
},
{
  title: "MySQL",
  detail: "Open-source relational database management system for web and enterprise applications.",
  svg: "/assets/mysql.svg",
},

  ],

  database: [
    {
      title: "PostgreSQL",
      detail: "A powerful open-source relational database with advanced features.",
      svg: "/assets/postgresql.svg",
    },
    {
      title: "MySQL",
      detail: "A widely used relational database known for speed and reliability.",
      svg: "/assets/mysql.svg",
    },
    {
      title: "MongoDB",
      detail: "A NoSQL document database optimized for scalability and flexibility.",
      svg: "/assets/mongodb.svg",
    },
    {
      title: "Firebase",
      detail: "A backend-as-a-service platform for real-time apps and authentication.",
      svg: "/assets/firebase.svg",
    },
    {
      title: "SQL Server (SSMS)",
      detail: "Microsoft's enterprise-grade relational database management system.",
      svg: "/assets/ssms.svg",
    },
    {
      title: "GraphQL",
      detail: "A query language and runtime for APIs that gives clients control over data requests.",
      svg: "/assets/graphql.svg",
    },
  ],

  links: {
    github: "https://github.com/Seals29",
    twitter: "https://twitter.com/hero_ui",
    linkedin: "https://www.linkedin.com/in/lionel-riyadi/",
    docs: "https://heroui.com",
    discord: "https://discord.gg/seals29",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
