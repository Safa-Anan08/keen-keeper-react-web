import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import toast from "react-hot-toast";
import { FiArchive, FiTrash2 ,FiPhoneCall, FiVideo  } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { RiNotificationSnoozeLine } from "react-icons/ri";


export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const { addEntry } = useContext(TimelineContext);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriend(data.find((f) => f.id == id)));
  }, [id]);

  if (!friend) return <p className="text-center mt-10">Loading...</p>;

  const statusStyle = {
    "Overdue": "bg-red-600 text-white",
    "Almost due": "bg-yellow-100 text-yellow-600",
    "On-track": "bg-green-100 text-green-600",
  };

 
  const handleAction = (type) => {
    addEntry(type, friend.name);

    toast.success(`${type} with ${friend.name} recorded!`);
  };


  const { addEntry } = useContext(TimelineContext);
  addEntry(type, friend.name);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 px-4">


      <div className="bg-gray-100  rounded-2xl md:text-left  ">
        <div className="bg-white p-6 rounded-lg">
        <div className="text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="mt-3 text-lg font-semibold">{friend.name}</h2>

          <span
            className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${statusStyle[friend.status]}`}
          >
            {friend.status}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-green-100 text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-4 text-center">
          {friend.bio}
        </p>

     
        <p className="text-sm text-gray-600 mt-3 text-center">
          {friend.email}
        </p>
         </div>
        <div className="flex flex-col gap-2 mt-5">
          <button className="bg-white py-2 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2">
           <RiNotificationSnoozeLine  className="text-lg" />Snooze 2 Weeks
          </button>

          <button className="bg-white py-2 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2">
           <FiArchive className="text-lg" /> Archive</button>

          <button className="bg-white text-red-600 py-2 rounded-lg hover:bg-red-200 transition flex items-center justify-center gap-2">
           <FiTrash2 className="text-lg" />Delete
             </button>
        </div>
      </div>

  
      <div className="md:col-span-2 flex flex-col gap-6">


        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl text-center">
            <h2 className="text-xl font-bold">{friend.days_since_contact}</h2>
            <p className="text-sm text-gray-500">Days Since Contact</p>
          </div>

          <div className="bg-white p-4 rounded-xl  text-center">
            <h2 className="text-xl font-bold">{friend.goal}</h2>
            <p className="text-sm text-gray-500">Goal(Days)</p>
          </div>

          <div className="bg-white p-4 rounded-xl text-center">
            <h2 className="text-sm font-semibold">{friend.next_due_date}</h2>
            <p className="text-sm text-gray-500">Next Due</p>
          </div>
        </div>

  
        <div className="bg-white p-5 rounded-xl ">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Relationship Goal</h2>
            <button className="text-green-600 text-sm hover:underline">
              Edit
            </button>
          </div>
          <p className="text-gray-500 mt-2">
            Connect every <span className="font-bold text-black">{friend.goal} days</span> 
          </p>
        </div>

  
        <div className="bg-white p-5 rounded-xl ">
          <h2 className="font-semibold mb-4">Quick Check-In</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

            <button
              title={`Call with ${friend.name}`}
              onClick={() => handleAction("Call")}
              className="flex flex-col items-center gap-2 bg-gray-100 p-10 rounded-lg 
                         hover:bg-gray-200 hover:scale-105 transition duration-200"
            >
              <FiPhoneCall  className="w-20" />
              Call
            </button>

            <button
              title={`Text with ${friend.name}`}
              onClick={() => handleAction("Text")}
              className="flex flex-col items-center gap-2 bg-gray-100 p-10 rounded-lg 
                         hover:bg-gray-200 hover:scale-105 transition duration-200"
            >
              <LuMessageSquareMore className="w-20"  />
              Text
            </button>

   
            <button
              title={`Video with ${friend.name}`}
              onClick={() => handleAction("Video")}
              className="flex flex-col items-center gap-2 bg-gray-100 p-10 rounded-lg 
                         hover:bg-gray-200 hover:scale-105 transition duration-200"
            >
              <FiVideo className="w-20" />
              Video
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}