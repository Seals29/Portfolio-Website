import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { GithubIcon } from "@/components/icons";

// Data Dummy Project - Silakan sesuaikan dengan proyek Anda
const projects = [
  {
    title: "Job Linker",
    description: "A comprehensive e-commerce platform featuring secure payment integration and real-time inventory management.",
    image: "/assets/linker.jpeg",
    tools: ["Next.js", "Node.js", "Go", "Postgresql"],
    github: "https://github.com/Seals29/TPAWeb-Frontend/tree/main/src/pages",
  },
  {
    title: "New Egg Replica",
    description: "A comprehensive e-commerce platform featuring secure payment integration and real-time inventory management.",
    image: "/assets/newegg.png",
    tools: ["Next.js", "Node.js", "Go", "Postgresql"],
    github: "https://github.com/Seals29/TPAWeb-Frontend/tree/main/src/pages",
  },
  {
    title: "Enterprise ERP System",
    description: "An enterprise resource planning solution designed to optimize operational workflows and streamline financial data management.",
    image: "/assets/odoo.png",
    tools: ["Odoo", "Python", "Docker", "XML", "Custom Module"],
    github: "https://github.com/Seals29/odoo",
  },
  {
    title: "Mini Console Java Game",
    description: "A lightweight retro-style console game developed in Java, demonstrating core logic and object-oriented programming principles.",
    image: "https://heroui.com/images/card-example-6.jpeg",
    tools: ["Java"],
    github: "https://github.com/Seals29/mini-console-java-game",
  },
  {
    title: "LRedJIg Android Project",
    description: "A native Android application focused on clean UI/UX and efficient data handling using Java.",
    image: "https://heroui.com/images/card-example-5.jpeg",
    tools: ["Java", "Android SDK"],
    github: "https://github.com/Seals29/LRedJIg",
  },
  {
    title: "Network Automation Script",
    description: "Automated security tool for batch password rotation across servers and network devices (Cisco/Mikrotik) using Ansible and CI/CD pipelines.",
    image: "https://heroui.com/images/card-example-4.jpeg",
    tools: ["Python", "CI/CD", "Network", "Mikrotik", "Ansible", "Ansible-Vault", "Cisco"],
    github: "https://github.com/Seals29/ansible",
  },
  {
    title: "Unity Fighting Game",
    description: "A 2D/3D fighting game built in Unity, implementing advanced Design Patterns and Object-Oriented Programming (OOP).",
    image: "https://heroui.com/images/card-example-3.jpeg",
    tools: ["C#", "Unity", "OOP", "Design Pattern"],
    github: "https://github.com/Seals29/TPAForest_LR",
  },
  {
    title: "Speaker Recognition with CNN",
    description: "A deep learning project that identifies speakers using Convolutional Neural Networks (CNN) and spectrogram analysis.",
    image: "/assets/cnn.png",
    tools: ["Python", "Tensorflow", "Spectogram"],
    github: "https://github.com/Seals29/speaker-recognition-with-cnn",
  }
];
function ProjectSection() {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-2 mb-8 p-8">
        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            isPressable
            className="border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200 bg-white dark:bg-zinc-900 overflow-hidden"
          >
            <CardHeader className="p-0">
              <Image
                removeWrapper
                alt={project.title}
                className="z-0 w-full h-48 object-cover rounded-none"
                src={project.image}
              />
            </CardHeader>
            <CardBody className="px-6 py-4 flex flex-col gap-2">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool) => (
                  <Chip key={tool} size="sm" variant="flat" color="primary">
                    {tool}
                  </Chip>
                ))}
              </div>
            </CardBody>
            <CardFooter className="px-6 pb-6 pt-0">
              <Link
                isExternal
                showAnchorIcon
                href={project.github}
                className="text-primary font-medium flex items-center gap-2"
              >
                <GithubIcon size={20} />
                View Source
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return <ProjectSection />;
}