import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";

export default function TechPage() {
  return (
    <div className="">
      <Section title="Backend" items={siteConfig.backend} />
      <Section title="Frontend" items={siteConfig.frontend} />
      <Section title="Enterprise Resource Planning" items={siteConfig.erp} />
      <Section title="Mobile" items={siteConfig.mobile} />
      <Section title="Game Development" items={siteConfig.Game} />
      <Section title="Programming Languages" items={siteConfig.programmingLang} />
      <Section title="DevOps & Cloud Infrastructure" items={siteConfig.devops} />
    </div>
  );
}
function Section({ title, items }: { title: string; items: any[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-4 p-8">{title}</h2>

      {/* grid layout */}
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <Card
            key={item.title}
            className="border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md
                       hover:shadow-xl hover:scale-[1.02] transition-all duration-200
                       bg-white dark:bg-zinc-900 cursor-pointer min-h-[220px] flex flex-col"
          >
            <CardHeader className="px-7 pt-7 pb-3 flex flex-col items-center space-y-3">
              {/* Logo */}
              {item.svg && (
                <Image
                  src={item.svg}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain opacity-90"
                />
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold text-center">
                {item.title}
              </h3>
            </CardHeader>

            {/* Description */}
            <CardBody className="px-7 pb-7 pt-2 flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed text-center">
                {item.detail}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
