import { FaFacebook, FaInstagramSquare ,FaTwitter } from "react-icons/fa";
export default function Footer() {

  const year = new Date().getFullYear();
  return (
    <footer className="bg-green-950 text-white text-center py-12 px-4 mt-16">
     
      <h1 className="text-4xl font-bold">KeenKeeper</h1>

  
      <p className="text-sm text-gray-300 mt-3 max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

 
      <div className="mt-6">
        <p className="text-sm mb-3">Social Links</p>
        <div className="flex justify-center gap-4">
         
           <div className="   cursor-pointer hover:scale-110 transition">
            <FaFacebook className="w-8 h-8"/>
           </div>

           <div className="   cursor-pointer hover:scale-110 transition">
            <FaInstagramSquare className="w-8 h-8"/>
           </div>

           <div className="   cursor-pointer hover:scale-110 transition">
            <FaTwitter className="w-8 h-8"/>
           </div>
            
        </div>
      </div>

  
      <div className="border-t border-gray-400 my-8 w-4/5 mx-auto"></div>


      <div className="flex flex-col md:flex-row items-center md:justify-between text-xs text-gray-300 w-4/5 mx-auto text-center md:text-left">
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