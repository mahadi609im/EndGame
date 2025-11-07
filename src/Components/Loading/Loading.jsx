// src/components/LoadingSpinner.jsx
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[70vh] bg-[#0c062e]">
      <div className="relative flex justify-center items-center w-full">
        {/* Outer ring */}
        <div className="w-20 h-20 border-4 border-[#c313b7]/30 border-t-[#c313b7] rounded-full animate-spin"></div>

        {/* Glowing center */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-6 h-6 bg-[#c313b7] rounded-full blur-sm animate-pulse"></div>
        </div>

        {/* Text */}
        <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[#c313b7] text-sm tracking-widest uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
