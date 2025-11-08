import SectionTitle from "@/components/SectionTitle";
import { models } from "@/lib/modelsData";

export default function ModelsPage() {
  return (
    <section>
      <SectionTitle title="Models" subtitle="Pre-built & customizable AI models" />
      <div className="grid gap-6 md:grid-cols-3 mt-6">
        {models.map((m) => (
          <div key={m.id} className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-500 mt-2">{m.desc}</p>
            <div className="mt-4 flex gap-3">
              <a href={`/models/${m.id}`} className="text-sm underline">Documentation</a>
              {m.demo && <a href="/demo" className="btn-primary text-sm">Try Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
