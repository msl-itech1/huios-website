// Placeholder block for photos not yet provided. Swap for next/image once
// real photography is available — the label says which photo goes where.
export default function ImageSlot({
  label,
  radius,
}: {
  label: string;
  radius?: 20 | 24;
}) {
  const radiusClass =
    radius === 24 ? ' rounded-24' : radius === 20 ? ' rounded-20' : '';
  return <div className={`img-slot${radiusClass}`}>{label}</div>;
}
