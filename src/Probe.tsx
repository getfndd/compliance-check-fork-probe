// Known violations on purpose: the generic checks should report them.
export function Probe() {
  return (
    <div className="rounded-md border bg-[#123456] p-4" style={{ color: '#ff0000' }}>
      probe
    </div>
  );
}
