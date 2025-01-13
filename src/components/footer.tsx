import React from "react";

export default function Footer() {
  return (

      <div className="bg-black text-white py-10">
        <div className="flex justify-center text-lg ">
      
        </div>
        <div className="text-center text-gray-400">
          <p>© FetchAPI. All rights reserved.</p>
          <p className="mt-4">
            <a href="#" className="text-orange-400 hover:underline">
              Affiliate Disclosures
            </a>{" "}
            •{" "}
            <a href="#" className="text-orange-400 hover:underline">
              Privacy Policy
            </a>{" "}
            •{" "}
            <a href="#" className="text-orange-400 hover:underline">
              Terms Of Use
            </a>
          </p>
        </div>
      </div>
    
  );
}
