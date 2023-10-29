import React from "react";
import iconcheck from "/src/assets/Icons/Subtract.svg";
import image from "/src/assets/Images/image1.svg";
const Landing4 = () => {
  return (
    <div className="bg-[#F3FBFF]  h-[990px] px-[100px]">
      <div className="flex flex-col w-fit bg-transparent pt-[120px] ">
        <div className="capitalize mb-4 px-2 text-4xl ">our benenfits</div>
        <div className="h-[5px] rounded-[20px] self-stretch bg-secondary w-full "></div>
      </div>
      <section class="text-primary w-full ">
        <div class=" px-5 py-10 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex relative pb-12">
                <div class="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                  <img src={iconcheck} alt="" />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-primary mb-1 tracking-wider">
                    Free Create Certificate with QR code.
                  </h2>
                  <p class="leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia,molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                  <img src={iconcheck} alt="" />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-primary mb-1 tracking-wider">
                    Online Certificate
                  </h2>
                  <p class="leading-relaxed">
                    Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                    slow-carb health goth, vape typewriter.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                  <img src={iconcheck} alt="" />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-primary mb-1 tracking-wider">
                    Certificate was Verify by School and Government
                  </h2>
                  <p class="leading-relaxed">
                    Coloring book nar whal glossier master cleanse umami. Salvia
                    +1 master cleanse blog taiyaki.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                  <img src={iconcheck} alt="" />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-primary mb-1 tracking-wider">
                    Saving time verify certificate form Traditional verify
                  </h2>
                  <p class="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
              <div class="flex relative">
                <div class="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                  <img src={iconcheck} alt="" />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-primary mb-1 tracking-wider">
                    Personal data will store in Blockchain
                  </h2>
                  <p class="leading-relaxed">
                    Pitchfork ugh tattooed scenester echo park gastropub
                    whatever cold-pressed retro.
                  </p>
                </div>
              </div>
            </div>
            <img
              class="lg:w-3/5 md:w-1/2 object-center object-scale-down rounded-lg md:mt-0 mt-12"
              src={image}
              alt="step"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing4;
