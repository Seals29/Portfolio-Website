import { title, subtitle } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import Image from "next/image";
import TechPage from "./tech/page";
import ProjectsPage from "./projects/ProjectSection";

const experiences = [
    {
        company: "Freelance",
        role: "Independent Technical Development",
        period: "Feb 2025 - Present",
        description:
            "Self-driven technical development focused on ERP systems, AI integration, and workflow automation through hands-on projects and real-world experimentation.",
        skills: ["ERP", "Odoo", "LLM", "Docker", "n8n"],
        logo: "/logos/company1.svg",
    },
    {
        company: "BINUS University",
        role: "Network Administrator & Techincal Support",
        period: "Sept 2023 - Feb 2025",
        description:
            "Experienced in installing, configuring, and maintaining network infrastructure (LAN/WAN, routing, switching, and firewalls) to ensure system reliability and security. Skilled in troubleshooting network and IT issues, providing responsive technical support, and resolving problems efficiently for end users. Strong understanding of network monitoring, technical documentation, and IT operational best practices.",
        skills: [
            "PostgreSQL",
            "Network",
            "Mikrotik",
            "n8n",
            "ansible",
            "Python",
            "Docker",
            "Prometheus",
            "Grafana",
            "Zabbix",
            "Cisco",
            "Nginx",
        ],
        logo: "/logos/company1.svg",
    },
    {
        company: "BINUS University",
        role: "Data Engineer",
        period: "Feb 2024 - Feb 2025",
        description:
            "Developed a web scraping system to collect job vacancy data from employment platforms such as LinkedIn and JobStreet, extracting relevant information for analysis. Processed and structured the data into an interactive dashboard to help lecturers analyze labor market trends and identify in-demand skills and roles. Enabled data-driven insights by visualizing trending job positions, industries, and required competencies.",
        skills: ["Python", "selenium", "Next.js", "Docker", "FastAPI"],
        logo: "/logos/company1.svg", // Ganti dengan path logo Anda
    },
    {
        company: "BINUS University",
        role: "Junior Laboratory Assistant",
        period: "Sept 2022 - Sept 2023",
        description:
            "Assisted in teaching undergraduate students across the School of Computer Science and the School of Information Systems, supporting academic delivery for core and applied courses. Taught and guided more than 500 undergraduate students, including conducting tutorials, assisting lectures, and providing academic support. Responsible for preparing and grading examinations, creating exam questions, and supervising examinations to ensure academic integrity.",
        skills: [
            "Network",
            "C",
            "Javascript",
            "Java",
            "Unity",
            "SQL",
            "PHP",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "CI/CD",
        ],
        logo: "/logos/company2.svg",
    },
];

export default function PortfolioPage() {
    return (
        <div className="flex flex-col gap-16 py-10">
            <section
                className="flex flex-col md:flex-row items-center justify-center gap-10 py-10"
                id="about"
            >
                {/* Container Image */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-violet-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <Image
                        width={240}
                        height={400}
                        src="/assets/foto.jpg" // Ganti dengan path foto Anda di folder public
                        alt="Lionel Riyadi"
                        className="relative rounded-full w-48 h-48 md:w-60 md:h-60 object-cover border-4 border-white dark:border-zinc-800 shadow-xl"
                    />
                </div>

                {/* Container Data Diri */}
                <div className="flex flex-col text-center md:text-left max-w-2xl">
                    <p className="text-primary font-medium text-lg mb-2">
                        Hello, I'm
                    </p>
                    <h1 className={title({ size: "lg" })}>
                        Lionel <span className="text-primary">Riyadi</span>
                    </h1>

                    <div className="mt-6 space-y-4">
                        <p className="text-lg text-default-600 leading-relaxed">
                            Software engineer and tech-driven with a strong
                            background in system development, automation, and
                            network infrastructure. Former teaching assistant
                            and network technician with hands-on experience in
                            real-world production systems.
                        </p>
                        <p className="text-lg text-default-600 leading-relaxed">
                            I enjoy creating innovative solutions and working on
                            projects across different platforms.
                        </p>
                    </div>

                    {/* Optional: Tambahkan tombol aksi cepat */}
                    <div className="flex gap-4 mt-8 justify-center md:justify-start">
                        <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                            Software Developer
                        </div>
                        <div className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold border border-secondary/20">
                            Tech Enthusiast
                        </div>
                    </div>
                </div>
            </section>

            <Divider />

            {/* --- SECTION: WORK EXPERIENCE --- */}
            <section id="works">
                <div className="flex flex-col gap-2 mb-8">
                    <h2 className={title({ size: "sm" })}>Work Experience</h2>
                </div>

                <div className="flex flex-col gap-6">
                    {experiences.map((exp, index) => (
                        <Card
                            key={index}
                            className="border-none bg-default-50 dark:bg-zinc-900/50"
                            shadow="sm"
                        >
                            <CardBody className="p-6">
                                <div className="flex flex-col md:flex-row justify-between gap-4">
                                    <div className="flex gap-4">
                                        {/* Placeholder Logo */}
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <span className="font-bold text-primary">
                                                {exp.company.charAt(0)}
                                            </span>
                                        </div>

                                        <div className="flex flex-col">
                                            <h3 className="text-xl font-bold">
                                                {exp.role}
                                            </h3>
                                            <p className="text-primary font-medium">
                                                {exp.company}
                                            </p>
                                            <p className="text-default-400 text-small mb-2">
                                                {exp.period}
                                            </p>
                                            <p className="text-default-600 max-w-2xl">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 h-fit md:justify-end">
                                        {exp.skills.map((skill) => (
                                            <Chip
                                                key={skill}
                                                variant="flat"
                                                size="sm"
                                                color="primary"
                                            >
                                                {skill}
                                            </Chip>
                                        ))}
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </section>

            <Divider />

            {/* --- TECH STACK (Kode Anda sebelumnya) --- */}
            <section id="techs">
                {/* Masukkan komponen Section Technologies Anda di sini */}
                <h2 className={title({ size: "sm" })}>Tech Stack</h2>
                {/* ... render Section-section Anda ... */}
                <TechPage />
            </section>
            <section id="projects">
                <ProjectsPage />
            </section>
        </div>
    );
}
