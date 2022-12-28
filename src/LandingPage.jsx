import React from "react";
import Iotanimation from "./Animations/Iotanimation.jsx";
const LandingPage = () => {
  return (
    <div>
      <div className="bg-bg1">
        <div className="relative overflow-hidden">
          <div className="absolute blur-3xl opacity-[30%] bg-gradient-to-tr from-[#1F34E7] to-[#1FC3E7] bg-gradient-to-r -top-[250px] -right-[250px] w-[700px] h-[700px] rounded-full"></div>
          <div className="absolute blur-3xl opacity-[30%] bg-gradient-to-tr from-[#1F34E7] to-[#1FC3E7] bg-gradient-to-r top-[800px] left-[350px] w-[200px] h-[200px] rounded-full"></div>
          <div className="absolute blur-3xl opacity-[30%] bg-gradient-to-tr from-[#1F34E7] to-[#1FC3E7] bg-gradient-to-r top-[400px] -left-[100px] w-[300px] h-[300px] rounded-full"></div>

          <div className="header h-10 text-white flex justify-center">
            <div className="flex text-2xl pt-1 gap-x-10">
              <div className="text-[#E2E6FA]">IOT Project</div>
            </div>
          </div>

          <div className="Main_Section grid grid-cols-2 pl-3">
            <div className="Left_Part pl-3">
              <div className="pt-[250px] text-[#E2E6FA] text-8xl">
                Traffic Lights{" "}
              </div>
              <div className="text-3xl text-[#E4EFFC]">IOT Project </div>
              <div className="text-lg text-[#A5AAB9]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                dignissimos fugiat expedita ducimus ab, distinctio mollitia. A
                illum molestias tenetur?
              </div>
              <div className="button text-white">
                <a href="./Registration_Page">
                  <button className="border-2 mt-1 border-white rounded-xl pt-1 p-2 text-xl">
                    Lets Get Started
                  </button>
                </a>
              </div>
            </div>

            <div className="Right_Part">
              <div className="relative w-[600px] top-[150px] ml-[100px] ">
                <Iotanimation />
              </div>
            </div>
          </div>
          <div
            id="footer"
            className="w-[100%] h-[200px] mt-[200px] bg-[#828e9e] "
          >
            <div className="flex justify-between  rounded-3xl">
              <div className="text-black">
                <p>Taha Mahmood</p>
                <p>Huzaifa Ejaz</p>
                <p>Jawad Abbasi</p>
                <p>Laiba Ansar</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
