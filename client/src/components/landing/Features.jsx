import {
  FaBolt,
  FaShieldAlt,
  FaColumns,
  FaMobileAlt,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: FaBolt,
    title: "Fast",
    description: "Organize tasks instantly with a modern interface.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure",
    description: "JWT authentication keeps your data safe.",
  },
  {
    icon: FaColumns,
    title: "Kanban Board",
    description: "Move tasks effortlessly between workflow stages.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive",
    description: "Beautiful experience across every device.",
  },
];

function Features() {
  return (
    <section className="bg-white py-24 transition-colors duration-300 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Why Choose TaskFlow?
          </h2>

          <p className="mt-4 text-lg text-slate-600 transition-colors duration-300 dark:text-slate-400">
            Everything you need to organize projects,
            collaborate with your team,
            and stay productive.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;