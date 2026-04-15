import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  const statusStyle = {
    "Overdue": "bg-red-600 text-white",
    "Almost due": "bg-yellow-600 text-white",
    "On-track": "bg-green-700 text-white"
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition cursor-pointer text-center"
    >
  
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full object-cover mx-auto"
      />

    
      <h2 className="mt-3 font-semibold text-gray-800">
        {friend.name}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {friend.days_since_contact} days ago
      </p>
             <div className="flex flex-wrap justify-center gap-2 mt-4">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      <span
        className={`inline-block mt-2 text-xs px-3 py-1 rounded-full font-medium ${statusStyle[friend.status]}`}
      >
        {friend.status}
      </span>



    </div>
  );
}