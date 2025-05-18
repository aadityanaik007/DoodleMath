// components/EraserToggle.tsx
import { Button } from "@/components/ui/button";

interface EraserToggleProps {
  isErasing: boolean;
  setIsErasing: (value: boolean) => void;
}

export default function EraserToggle({
  isErasing,
  setIsErasing,
}: EraserToggleProps) {
  return (
    <Button
      onClick={() => setIsErasing(!isErasing)}
      className={`z-20 ${isErasing ? "bg-red-600" : "bg-gray-700"} text-white`}
    >
      {isErasing ? "Eraser On" : "Eraser Off"}
    </Button>
  );
}
