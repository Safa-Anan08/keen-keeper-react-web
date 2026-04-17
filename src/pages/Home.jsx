import { useEffect, useState, useContext } from "react";
import FriendCard from "../components/FriendCard";
import { TimelineContext } from "../context/TimelineContext";
import { IoAdd } from "react-icons/io5";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const { timeline } = useContext(TimelineContext);

  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  
  const total = friends.length;

  const onTrack = friends.filter(
    f => f.status === "On-track"
  ).length;

  const needAttention = friends.filter(
    f => f.status === "Overdue" || f.status === "Almost due"
  ).length;

  const currentMonth = new Date().getMonth();

  const interactionsThisMonth = timeline.filter(item => {
    const d = new Date(item.date);
    return d.getMonth() === currentMonth;
  }).length;

  return (
    <div className="py-8">


      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-2">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
        </p>

        <button className="mt-4 bg-green-950 text-white px-5 py-2 rounded-lg flex items-center gap-2 mx-auto">
          <IoAdd className="text-lg"/> Add a Friend
        </button>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">


        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500">Total Friends</p>
          <h2 className="text-2xl font-bold mt-1">{total}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500">On Track</p>
          <h2 className="text-2xl font-bold text-green-900 mt-1">
            {onTrack}
          </h2>
        </div>


        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500">Need Attention</p>
          <h2 className="text-2xl font-bold text-green-900 mt-1">
            {needAttention}
          </h2>
        </div>


        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500">
            Interactions This Month
          </p>
          <h2 className="text-2xl font-bold text-green-900 mt-1">
            {interactionsThisMonth}
          </h2>
        </div>

      </div>


      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Your Friends</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>

    </div>
  );
}