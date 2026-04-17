import { useContext, useState, useEffect } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { FiPhoneCall, FiVideo } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";

export default function Timeline() {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("Filter Timeline");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const iconMap = {
    Call: FiPhoneCall,
    Text: LuMessageSquareMore,
    Video: FiVideo
  };

  const filtered = timeline
    .filter(item =>
      filter === "Filter Timeline" ? true : item.type === filter
    )
    .filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortOrder === "newest"
        ? dateB - dateA
        : dateA - dateB;
    });

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">

      <h1 className="text-2xl font-bold mb-6">Timeline</h1>

      <div className="mb-4 relative w-44">
        <div
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          className="flex justify-between items-center px-4 py-2 border rounded-lg bg-white cursor-pointer"
        >
          <span className="text-sm">{filter}</span>
          <span className="text-gray-500">▾</span>
        </div>

        {open && (
          <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-md z-20">
            {["Filter Timeline", "Call", "Text", "Video"].map(type => (
              <div
                key={type}
                onClick={(e) => {
                  e.stopPropagation();
                  setFilter(type);
                  setOpen(false);
                }}
                className={`px-4 py-2 text-sm cursor-pointer ${
                  filter === type
                    ? "bg-green-50 text-green-600"
                    : "hover:bg-gray-100"
                }`}
              >
                {type}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Search by name or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded-lg w-full md:w-1/2"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-3 py-2 rounded-lg w-full md:w-40"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <div className="relative">

        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200"></div>

        {filtered.length === 0 && (
          <p className="text-gray-400 ml-10">No interactions yet</p>
        )}

        {filtered.map(item => {
          const Icon = iconMap[item.type];

          return (
            <div key={item.id} className="flex gap-4 mb-8 relative">

              <div className="relative z-10">
                <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                  <Icon size={16} className="text-gray-600" />
                </div>
              </div>

              <div className="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <p className="font-medium text-gray-800">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                   {new Date(item.date).toLocaleDateString()}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}