export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-gray-500 mt-2 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="h-1 w-20 bg-brand mx-auto rounded-full mt-4" />
    </div>
  );
}
