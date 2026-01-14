import { icons } from "../../constants/techIcons";

export default function TechStack() {
  return (
    <div>
      <h2 className="my-8 text-3xl font-bold text-slate-800">Tech Stack</h2>
      <div className="flex gap-6 flex-wrap mt-8">
        {Object.entries(icons)
          .filter(([_, icon]) => icon)
          .map(([tech, icon]) => (
            <div
              key={tech}
              className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img src={icon} alt={tech} className="w-14 h-14 object-contain" />

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 text-white text-xs font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-20">
                {tech}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
