import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import { services } from "@/lib/servicesData";

export default function ServicesPage() {
  return (
    <section className="py-16 px-4">
      <SectionTitle
        title="Services"
        subtitle="How we help organizations adopt AI"
      />
      <div className="grid gap-6 md:grid-cols-3 mt-6">
        {services.map((s) => (
          <FeatureCard key={s.title} title={s.title} description={s.description} />
        ))}
      </div>
    </section>
  );
}
