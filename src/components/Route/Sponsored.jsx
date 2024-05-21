import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://mma.prnewswire.com/media/2036074/HSBC_MASTERBRAND_LOGO_RGB_Logo.jpg"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://download.logo.wine/logo/Chanel/Chanel-Logo.wine.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        
        <div className="flex items-start">
          <img
            src="https://medievalartresearch.files.wordpress.com/2020/06/google-arts-culture-logo.png?w=1568"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logolook.net/wp-content/uploads/2023/10/Deutsche-Bank-Logo.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://bankswinesandspirits.com/cdn/shop/collections/Pernod_Ricard_logo_2019_svg_600x.png?v=1698167456"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
