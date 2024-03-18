import Logo from "../assets/img/logo.svg";
import HeroImage from "../assets/img/hero_image.png";
import ArrowIcon from "../assets/img/up_arrow.svg";
import AedcLogo from "../assets/img/aedc_logo.png";
import ServiceImage1 from "../assets/img/services_img.png";
import ServiceImage2 from "../assets/img/services_img2.png";
import ServiceImage3 from "../assets/img/services_img3.png";
import SocialIcons from  "../assets/img/social_icons.svg";

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="px-[20px] md:px=[0px] bg-primary-bg h-[600px]  md:h-[1300px]">
        <header className="flex justify-center lg:pt-[32px] lg:pb-[50]px">
          <nav
            className="flex items-center justify-between py-[19px] lg:min-w-[60%]"
            aria-label="Global"
          >
            <div className="flex lg:flex-1 justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={Logo} alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                //   onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="/" className="text-[15px] font-[500] text-white/[.7]">
                About
              </a>
              <a href="/" className="text-[15px] font-[500] text-white/[.7]">
                Solutions
              </a>
              <a href="/" className="text-[15px] font-[500] text-white/[.7]">
                Resources
              </a>
              <a href="/" className="text-[15px] font-[500] text-white/[.7]">
                Impact
              </a>
            </div>
          </nav>
        </header>

        <div className="pt-[50px]">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h1 className="font-[600] tracking-tight text-white text-2xl md:text-6xl poppins">
                Transforming Energy Management through Innovation{" "}
                <span className="text-[#05AA6C]">.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#FFE9B1]">
                leading provider of cutting-edge data solutions and grid
                management software for Africa's power sector.
              </p>
              <div className="mt-[68px] mb-[100px] flex flex-col gap-y-[15px] md:flex-row items-center justify-center gap-x-6">
                <button className="btn bg-white h-[56px] w-[170px] md:w-[224px] text-primary-cl font-[400] text-[16px] md:text-[20px] rounded-[46px] hover:bg-teal-200">
                  <span className="py-[37]"> Request A Demo </span>
                </button>

                <button className="btn btn-outline h-[56px] w-[170px] md:w-[224px] font-[400] text-[16px] md:text-[20px] rounded-[46px] text-white border-[#205E3B]">
                  Scroll for details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-[35%]">
        <img
        
          className="lg:max-w-[80%] lg:max-4-[800px] hidden md:block"
          src={HeroImage}
          alt="Hero"
        />
      </div>
      {/* Section 2 */}
      <div className="pt-[165px] pb-[100px] lg:pb-[290px] w-full bg-red">
        <div>
          <div className="text-center mb-[54px]">
            <h1 className="text-primary-cl font-[500] text-[32px] md:text-[56px]">
              Our Solutions
            </h1>
            <div className="w-full flex justify-center">
              <p className="font-[400] text-primary-cl font-[18px] md:max-w-[40%]">
                Our Products are a blend of innovative thinking and practical
                solutions, ensuring they are both unique and effective.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-[54px] items-center">
            {/* Adora */}
            <div className="bg-[#FFEBE1] pt-[54px] rounded-[30px] p-[52px] pb-[20px] md:pb-[0px] md:mx-[300px]">
              <div className="w-full h-full flex justify-between">
                <div className="lg:mb-[52px] md:grow md:basis-[50%]">
                  <h3 className="text-primary-cl text-[34px] font-[500] mb-[32px]">
                    Adora
                  </h3>
                  <label className="text-secondary-cl/[0.76]">
                    Beacon Power Services (BPS) excels in creating customized
                    energy software for Africa, addressing location-specific
                    challenges in the power value chain.
                  </label>
                  <div className="flex flex-col gap-y-[13px] mt-[38px] mb-[58px]">
                    <div className="w-[346px] pl-[34px] cursor-pointer rounded-[100px] h-[56px] font-[16px] font-[600] font- text-primary-cl bg-white/[0.4] border-none flex items-center justify-start">
                      Network Management
                    </div>
                    <div className="w-[346px] pl-[34px] cursor-pointer rounded-[100px] h-[56px] font-[16px] font-[600] text-primary-cl bg-white/[0.4] border-none flex items-center justify-start">
                      Field Operations
                    </div>
                    <div className="w-[346px] pl-[34px] cursor-pointer rounded-[100px] h-[56px] font-[16px] font-[600] text-primary-cl bg-white/[0.4] border-none flex items-center justify-start">
                      Commercial Operations & More
                    </div>
                  </div>
                  <button className="flex justify-center items-center gap-x-[7.5px] bg-transparent border-none text-primary-cl font-[16px] font-[600]">
                    View Product <img src={ArrowIcon} alt="arrow" />
                  </button>
                </div>
                <div className="rounded-t-[30px] bg-white lg:w-[560px] lg:h-[512px] md:grow md:basis-[50%] mt-5"></div>
              </div>
            </div>

            {/* CAIMS */}
            <div className="bg-[#DBD7FE] pt-[54px] rounded-[30px] p-[52px] pb-[20px] md:pb-[0px] md:mx-[300px]">
              <div className="w-full h-full flex justify-between">
                <div className="lg:mb-[52px] grow basis-[50%]">
                  <h3 className="text-primary-cl text-[34px] font-[500] mb-[32px]">
                    CAIMs
                  </h3>
                  <label className="text-secondary-cl/[0.76]">
                    Beacon Power Services (BPS) excels in creating customized
                    energy software for Africa, addressing location-specific
                    challenges in the power value chain.
                  </label>
                  <div className="flex flex-col gap-y-[13px] mt-[38px] mb-[58px]">
                    <div className="w-[346px] pl-[34px] cursor-pointer rounded-[100px] h-[56px] font-[16px] font-[600] font- text-primary-cl bg-white/[0.4] border-none flex items-center justify-start">
                      Network Management
                    </div>
                    <div className="w-[346px] pl-[34px] cursor-pointer rounded-[100px] h-[56px] font-[16px] font-[600] text-primary-cl bg-white/[0.4] border-none flex items-center justify-start">
                      Field Operations
                    </div>
                    <div className="w-[346px] pl-[34px] cursor-pointer rounded-[100px] h-[56px] font-[16px] font-[600] text-primary-cl bg-white/[0.4] border-none flex items-center justify-start">
                      Commercial Operations & More
                    </div>
                  </div>
                  <button className="flex justify-center items-center gap-x-[7.5px] bg-transparent border-none text-primary-cl font-[16px] font-[600]">
                    View Product <img src={ArrowIcon} alt="arrow" />
                  </button>
                </div>
                <div className="rounded-t-[30px] bg-white lg:w-[560px] lg:h-[512px] grow basis-[50%] mt-5"></div>
              </div>
            </div>

            {/* Facility management */}
            <div className="bg-[#DAEAFD] pt-[54px] rounded-[30px] p-[52px] pb-[20px] md:pb-[0px] md:mx-[300px]">
              <div className="w-full h-full flex justify-between">
                <div className="lg:mb-[52px] grow basis-[50%]">
                  <h3 className="text-primary-cl text-[34px] font-[500] mb-[32px]">
                    Facility Management
                  </h3>
                  <label className="text-secondary-cl/[0.76]">
                    Beacon Power Services (BPS) excels in creating customized
                    energy software for Africa, addressing location-specific
                    challenges in the power value chain.
                  </label>
                  <div className="flex flex-col gap-y-[13px] mt-[38px] mb-[58px]">
                    <div className="w-[346px] pl-[34px] cursor-pointer rounded-[100px] h-[56px] font-[16px] font-[600] font- text-primary-cl bg-white/[0.4] border-none flex items-center justify-start">
                      Network Management
                    </div>
                    <div className="w-[346px] pl-[34px] cursor-pointer rounded-[100px] h-[56px] font-[16px] font-[600] text-primary-cl bg-white/[0.4] border-none flex items-center justify-start">
                      Field Operations
                    </div>
                    <div className="w-[346px] pl-[34px] cursor-pointer rounded-[100px] h-[56px] font-[16px] font-[600] text-primary-cl bg-white/[0.4] border-none flex items-center justify-start">
                      Commercial Operations & More
                    </div>
                  </div>
                  <button className="flex justify-center items-center gap-x-[7.5px] bg-transparent border-none text-primary-cl font-[16px] font-[600]">
                    View Product <img src={ArrowIcon} alt="arrow" />
                  </button>
                </div>
                <div className="rounded-t-[30px] bg-white lg:w-[560px] lg:h-[512px] grow basis-[50%] mt-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What our client says */}
      <div className="bg-primary-bg pt-[85px] md:pt-[195px] px-[20px] pb-[40px] md:px-[50px] md:pb-[70px] lg:px-[202px] lg:pb-[230px]">
        <div className="text-center mb-[30px] md:mb-[99px]">
          <h1 className="text-white font-[500] text-[30px] md:text-[56px]">
            What Our Clients Say
          </h1>
          <div className="w-full flex justify-center">
            <p className="font-[400] text-white/[0.7] font-[18px] md:max-w-[40%]">
              Discover the experiences that shape our story. Straight from those
              who inspire our best work
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row py-[39px] gap-y-[50px] gap-x-[50px] justify-center items-center">
          {/* card 1 */}
          <div className="card bg-white grow basis-0">
            <div className="card-body">
              <div className="flex justify-between">
                <div className="">
                  <h4 className="text-primary-cl text-[20px] font-[500]">
                    Maxwell Anthony
                  </h4>
                  <p className="text-[13px] font-[600] text-[#000]/[0.41]">
                    MD - ECG
                  </p>
                </div>
                <div>
                  <img src={AedcLogo} alt="AEDC Logo" />
                </div>
              </div>
              <p className="text-[17px] text-primary-cl/[0.76] pt-[47px]">
                ECG's implementation of ADORA has slashed costs and improved
                efficiency.With ADORA, bill delivery costs have dropped by 60%
                and computation rate has surged by 90%. Processing an impressive
                15,000 bills per minute, ADORA accelerates operations
                significantly. It also features an innovative estimation engine
                for tailored billing based on consumption patterns.{" "}
              </p>
              <div className="card-actions justify-between items-center mt-[80px]">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    checked
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                </div>
                <div className="text-[24px] font-[500] text-black/[0.7]">
                  5.0
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="card bg-white grow basis-0">
            <div className="card-body">
              <div className="flex justify-between">
                <div className="">
                  <h4 className="text-primary-cl text-[20px] font-[500]">
                    Maxwell Anthony
                  </h4>
                  <p className="text-[13px] font-[600] text-[#000]/[0.41]">
                    MD - ECG
                  </p>
                </div>
                <div>
                  <img src={AedcLogo} alt="AEDC Logo" />
                </div>
              </div>
              <p className="text-[17px] text-primary-cl/[0.76] pt-[47px]">
                ECG's implementation of ADORA has slashed costs and improved
                efficiency.With ADORA, bill delivery costs have dropped by 60%
                and computation rate has surged by 90%. Processing an impressive
                15,000 bills per minute, ADORA accelerates operations
                significantly. It also features an innovative estimation engine
                for tailored billing based on consumption patterns.{" "}
              </p>
              <div className="card-actions justify-between items-center mt-[80px]">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    checked
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                </div>
                <div className="text-[24px] font-[500] text-black/[0.7]">
                  5.0
                </div>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="card bg-white grow basis-0">
            <div className="card-body">
              <div className="flex justify-between">
                <div className="">
                  <h4 className="text-primary-cl text-[20px] font-[500]">
                    Maxwell Anthony
                  </h4>
                  <p className="text-[13px] font-[600] text-[#000]/[0.41]">
                    MD - ECG
                  </p>
                </div>
                <div>
                  <img src={AedcLogo} alt="AEDC Logo" />
                </div>
              </div>
              <p className="text-[17px] text-primary-cl/[0.76] pt-[47px]">
                ECG's implementation of ADORA has slashed costs and improved
                efficiency.With ADORA, bill delivery costs have dropped by 60%
                and computation rate has surged by 90%. Processing an impressive
                15,000 bills per minute, ADORA accelerates operations
                significantly. It also features an innovative estimation engine
                for tailored billing based on consumption patterns.{" "}
              </p>
              <div className="card-actions justify-between items-center mt-[80px]">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    checked
                    className="mask mask-star-2 bg-[#E1A200]"
                  />
                </div>
                <div className="text-[24px] font-[500] text-black/[0.7]">
                  5.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Beacon by the numbers */}
      <div className="px-[20px] pt-[90px] md:pt-[168px] pb-[100px] md:pb-[200px]">
        <div className="text-center mb-[51px]">
          <h1 className="text-primary-cl font-[500] text-[32px] md:text-[56px]">
            Beacon by the numbers.
          </h1>
          <div className="w-full flex justify-center pt-[10px]">
            <p className="font-[400] text-primary-cl/[0.7] font-[18px] md:max-w-[40%]">
              We empower Africa's power sector with sustainable and efficient
              solutions, using data-driven technologies to unlock the energy
              sector's potential.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-0 bg-[#FAFAFA] rounded-[20px] py-[51px] max-w-[1250px]">
            <div className="text-center py-[21px] px-[31px]">
              <div className="text-[#05AA6C] font-[600] text-[40px] md:text-[56px]">
                {" "}
                30 <span className="text-[#A5DFC9]">+</span>
              </div>
              <div className="flex justify-center w-full bg-teal">
                <div className="pt-[15px] font-[400] text-[16px] w-[70%] text-primary-cl">
                  Million consumers and businesses impacted
                </div>
              </div>
            </div>
            <div className="text-center py-[21px] px-[31px]">
              <div className="text-[#05AA6C] font-[600] text-[40px] md:text-[56px]">
                {" "}
                30 <span className="text-[#A5DFC9]">+</span>
              </div>
              <div className="flex justify-center w-full bg-teal">
                <div className="pt-[15px] font-[400] text-[16px] w-[70%] text-primary-cl">
                  Grid nodes connected
                </div>
              </div>
            </div>
            <div className="text-center py-[21px] px-[31px]">
              <div className="text-[#05AA6C] font-[600] text-[40px] md:text-[56px]">
                {" "}
                200m <span className="text-[#A5DFC9]">+</span>
              </div>
              <div className="flex justify-center w-full bg-teal">
                <div className="pt-[15px] font-[400] text-[16px] w-[95%] text-primary-cl">
                  Grid data and transaction points processed daily
                </div>
              </div>
            </div>
            <div className="text-center py-[21px] px-[31px]">
              <div className="text-[#05AA6C] font-[600] text-[40px] md:text-[56px]]">
                {" "}
                4
              </div>
              <div className="flex justify-center w-full bg-teal">
                <div className="pt-[15px] font-[400] text-[16px] w-[70%] text-primary-cl">
                  of the largest cities in Africa 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Latest from Beacon Power services */}
      <div className="flex flex-col items-center bg-[#F7F7F7] py-[90] px-[20px] py-[50px] md:py-[183px]">
        <div className="text-center mb-[120px]">
          <h1 className="text-primary-cl font-[500] text-[32px] md:text-[56px] mb-[11px] md:mb-[22px]">
            Lastest From Beacon Power Services
          </h1>
          <div className="w-full flex justify-center">
            <p className="font-[400] text-primary-cl font-[18px]">
              Our Products are a blend of innovative thinking and practical
              solutions, ensuring they are both unique and effective.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-y-[40px] md:gap-x-[27px] mb-[55px] md:mb-[107px]">
          <div className="max-w-[385px]">
            <img className="rounded-md" src={ServiceImage1} alt="Service" />
            <p className="text-primary-cl text-[20px] font-[600] mt-[24px]">
              Beacon Power Services raises $2.7M to improve electricity access
              for sub- Saharan African cities
            </p>
            <label className="text-secondary-cl/[0.76] text-[14px] font-[400] mt-[20px]">
              Oct 26, 2023
            </label>
          </div>
          <div className="max-w-[385px]">
            <img className="rounded-md" src={ServiceImage2} alt="Service" />
            <p className="text-primary-cl text-[20px] font-[600] mt-[24px]">
              Why We Invested In Beacon Power Services; Giving Businesses Back
              Their Power.
            </p>
            <label className="text-secondary-cl/[0.76] text-[14px] font-[400] mt-[20px]">
              Oct 26, 2023
            </label>
          </div>
          <div className="max-w-[385px]">
            <img className="rounded-md" src={ServiceImage3} alt="Service" />
            <p className="text-primary-cl text-[20px] font-[600] mt-[24px]">
              Elizabeth Biney-Amissah Joins Beacon Power Services Board as
              Independent Director
            </p>
            <label className="text-secondary-cl/[0.76] text-[14px] font-[400] mt-[20px]">
              Oct 26, 2023
            </label>
          </div>
        </div>
        <button className="bg-[#064330] h-[56px] w-[170px] md:w-[224px] text-white font-[400] text-[16px] md:text-[20px] rounded-[46px] hover:bg-teal-200">
          <span className="py-[37]"> View More </span>
        </button>
      </div>
      {/* Footer */}
      <div className="bg-primary-cl flex flex-col items-center py-[141px] ">
        <div className="flex flex-col md:flex-row justify-between items-start min-w-[70%] pb-[72px]">
          <img className="md:mb-0 mb-[30px]" src={Logo} alt="logo" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-[31px] md:gap-y-[0px]">
            <div className="flex flex-col gap-y-[15px] md:gap-y-[31px] w-[196px]">
              <h3 className="text-[16px] font-[500] text-white">Solutions</h3>
              <a href="/" className="text-[14px] font-[500] text-white/[0.7]">
                Product One
              </a>
              <a href="/" className="text-[14px] font-[500] text-white/[0.7]">
                Product two
              </a>
              <a href="/" className="text-[14px] font-[500] text-white/[0.7]">
                Product three
              </a>
            </div>
            <div className="flex flex-col gap-y-[15px] md:gap-y-[31px] w-[196px]">
              <h3 className="text-[16px] font-[500] text-white">Company</h3>
              <a href="/" className="text-[14px] font-[500] text-white/[0.7]">
                About
              </a>
              <a href="/" className="text-[14px] font-[500] text-white/[0.7]">
              Careers
              </a>
              <a href="/" className="text-[14px] font-[500] text-white/[0.7]">
              BPS In the News
              </a>
            </div>
            <div className="flex flex-col gap-y-[15px] md:gap-y-[31px] w-[196px]">
              <h3 className="text-[16px] font-[500] text-white">Resource</h3>
              <a href="/" className="text-[14px] font-[500] text-white/[0.7]">
              Blog & Announcement
              </a>
              <a href="/" className="text-[14px] font-[500] text-white/[0.7]">
              Terms of use
              </a>
              <a href="/" className="text-[14px] font-[500] text-white/[0.7]">
              Privacy Policy
              </a>
            </div>
            <div className="flex flex-col justify-between gap-y-[15px] md:gap-y-[31px] w-[196px]">
              <h3 className="text-[16px] font-[500] text-white">Follow Us</h3>
               <img  src={SocialIcons}  alt="Socials" />
            </div>
          </div>
        </div>
        <div className="text-center text-[14px] text-white/[0.4]">
          Copyright © 2024 Beacon Power Services. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
export default HomePage;
