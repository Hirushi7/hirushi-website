import "./Footer.css";


export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-6 px-4 sm:py-8 sm:px-6 border-t border-white/20 flex items-center">
      <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap max-w-[1200px] mx-auto gap-4 text-center w-full">
        <p className="text-sm sm:text-base opacity-70 m-0">
          © 2025 Arts by Hirushi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
