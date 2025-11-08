type Props = { name: string; role: string };

const TeamCard = ({ name, role }: Props) => (
  <div className="border p-4 rounded text-center shadow">
    <h4 className="font-bold">{name}</h4>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

export default TeamCard;
