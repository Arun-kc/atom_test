import Link from "next/link";
import React, {useState} from "react";

function Header({setSelectedLink}) {
    const [isValid, setIsvalid] = useState(true);
    const onKeyUp = async (event) => {
        if(event.charCode === 13){
            var link = event.target.value;
            //alert(`So your name is ${link}?`);
            var regexp = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/
            if(regexp.test(link)){
                setIsvalid(true);
                setSelectedLink(link);
            } else{
                setIsvalid(false);
            }
            console.log(isValid);
        }
    };
  return (
      <div className="h-20 w-full absolute bg-gray-700">
      <div className="fixed top-4 left-0 right-0 z-10">
          <div className="flex-grow flex justify-center">
              <Link href="/">
                <a>
                <header className="absolute text-3xl left-10 text-white">
                    Atom
                </header>
                </a>
              </Link>
              <div className="max-w-lg flex-grow relative rounded-xl transition-opacity">
                  <input type="text" className={`w-full pr-12 pl-12 py-3 rounded-xl text-black text-opacity-90 transition ${isValid ? 'border-4 border-blue-500' : 'border-4 border-rose-500'}`}
                  placeholder="Paste your tweet link..." onKeyPress={onKeyUp}></input>
                  <div className="left-0 z-10 absolute pl-3 flex items-center transform top-1/3 transition-transform ease-out pointer-events-none select-none">
                    <svg className="transition-colors" xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" 
                    strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" data-v-6bcb730e=""></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
              </div>
          </div>
      </div>
      </div>
  )
}

export default Header;
