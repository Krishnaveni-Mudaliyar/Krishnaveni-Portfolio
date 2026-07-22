export default function StatsCard({ label, value }) {
  return (
    <div className="stats-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
