export default function Home() {
  return (
    <div className="h-screen bg-slate-300 flex items-center justify-center">
      <div className="card w-[90vw] md:w-[30vw] max-w-sm bg-white shadow-outline flex items-center p-4 text-center">        
        <div className="bg-code bg-cover bg-center w-full aspect-square rounded mb-4" />
        <h1 className="text-slate-900 font-outfit-regular font-bold text-xl md:text-2xl px-3">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-slate-500 font-outfit-regular font-normal font-par md:text-base px-5 mt-2">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
}
