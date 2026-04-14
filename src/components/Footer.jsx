import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

export default function Footer() {

  const year = new Date().getFullYear();
  return (
    <footer className="bg-green-900 text-white text-center py-12 px-4 mt-16">
     
      <h1 className="text-4xl font-bold">KeenKeeper</h1>

  
      <p className="text-sm text-gray-300 mt-3 max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

 
      <div className="mt-6">
        <p className="text-sm mb-3">Social Links</p>
        <div className="flex justify-center gap-4">
          <img
            src={facebook}
            alt="facebook"
            className="w-9 h-9 bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition"
          />
          <img
            src={twitter}
            alt="twitter"
            className="w-9 h-9 bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition"
          />
          <img
            src={instagram}
            alt="instagram"
            className="w-9 h-9 bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition"
          />
        </div>
      </div>

  
      <div className="border-t border-green-700 my-8 w-4/5 mx-auto"></div>


      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 px-4 max-w-5xl mx-auto">
        <p>&copy; {year}  KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
}