// components/EraserPointer.tsx
interface EraserPointerProps {
  x: number;
  y: number;
  size: number;
  visible: boolean;
}

export default function EraserPointer({
  x,
  y,
  size,
  visible,
}: EraserPointerProps) {
  if (!visible) return null;

  return (
    <div
      className="pointer-events-none absolute border border-white rounded-full"
      style={{
        width: size,
        height: size,
        left: x - size / 2,
        top: y - size / 2,
        zIndex: 50,
      }}
    />
  );
}
