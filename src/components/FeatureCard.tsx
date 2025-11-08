type Props = { title: string; description: string };

const FeatureCard = ({ title, description }: Props) => (
  <div className="border p-6 rounded shadow hover:shadow-lg transition">
    <h3 className="font-semibold text-xl mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default FeatureCard;
