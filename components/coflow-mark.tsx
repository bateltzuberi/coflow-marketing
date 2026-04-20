export function CoflowMark({ className = "text-[22px]" }: { className?: string }) {
  return (
    <span className={`coflow-mark ${className}`}>
      <span className="co">co</span>
      <span className="flow">flow</span>
    </span>
  );
}
