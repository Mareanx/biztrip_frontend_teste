import { LogIn } from "lucide-react";

export function LoginLoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center animate-pulse">
        <LogIn size={32} className="text-gray-700" />
      </div>
    </div>
  );
}