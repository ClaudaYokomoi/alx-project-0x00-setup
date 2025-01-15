import Image from "next/image";
import HOUSE_IMAGE from "@/public/assets/house.png";
import STAR_IMAGE from "@/public/assets/star.png";
import React from "react";
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg">
      <Image
        className="rounded-lg"
        src={HOUSE_IMAGE}
        width={378.56}
        height={299.37}
        alt="house image"
      />
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-[22px]">Villa Arrecife Beach House</h3>
          <p className="font-medium text-[17px] text-[#929292]">Sideman, Bali, Indonesia</p>
        </div>
        <div className="flex items-center">
          <Image src={STAR_IMAGE} alt="star" />
          <p className="font-medium text-[17px] ml-2">4.76</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="grid grid-cols-3 border w-[156px] rounded-full px-2 py-1">
          <div className="flex items-center">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2456 9.22324C16.8562 9.05231 16.4356 8.96423 16.0103 8.9646H4.89287C4.46767 8.96419 4.04702 9.05213 3.6576 9.22285C3.10721 9.46354 2.63886 9.85937 2.3098 10.3619C1.98073 10.8645 1.80521 11.4521 1.80469 12.0528V16.3762C1.80469 16.54 1.86976 16.6971 1.98559 16.813C2.10142 16.9288 2.25852 16.9939 2.42232 16.9939C2.58613 16.9939 2.74323 16.9288 2.85906 16.813C2.97489 16.6971 3.03996 16.54 3.03996 16.3762V16.0674C3.04096 15.9858 3.07382 15.9079 3.13152 15.8502C3.18922 15.7925 3.26719 15.7596 3.34878 15.7586H17.5544C17.636 15.7596 17.714 15.7925 17.7717 15.8502C17.8294 15.9079 17.8622 15.9858 17.8632 16.0674V16.3762C17.8632 16.54 17.9283 16.6971 18.0441 16.813C18.16 16.9288 18.3171 16.9939 18.4809 16.9939C18.6447 16.9939 18.8018 16.9288 18.9176 16.813C19.0334 16.6971 19.0985 16.54 19.0985 16.3762V12.0528C19.0979 11.4521 18.9224 10.8647 18.5933 10.3622C18.2642 9.85967 17.7959 9.4639 17.2456 9.22324Z" fill="#131212" />
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">4</p>
          </div>
          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_8_604)">
                <path d="M1.10254 12.1843V13.5573C1.10254 15.1441 2.26869 16.4635 3.78896 16.7037V17.7188H4.78733V16.7429H13.1234V17.7188H14.1218V16.7037C15.6421 16.4635 16.8082 15.1441 16.8082 13.5573V12.1843H1.10254Z" fill="#131212" />
                <path d="M2.10119 9.18778V3.42795C2.10119 2.46359 2.88578 1.67903 3.85014 1.67903C4.74325 1.67903 5.48162 2.35204 5.58595 3.21747C4.54635 3.45161 3.76728 4.38176 3.76728 5.49104V6.15673H8.42924V5.49104C8.42924 4.37377 7.63896 3.43807 6.58821 3.21231C6.47769 1.79797 5.29234 0.680664 3.85014 0.680664C2.33527 0.680664 1.10282 1.91308 1.10282 3.42795V9.18778H0.436768V11.1861H17.4746V9.18778H2.10119Z" fill="#131212" />
              </g>
              <defs>
                <clipPath id="clip0_8_604">
                  <rect width="17.0382" height="17.0382" fill="white" transform="translate(0.436279 0.680664)" />
                </clipPath>
              </defs>
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">2</p>
          </div>
          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.9053 14.1692C16.9053 14.3575 16.8305 14.538 16.6973 14.6712C16.5642 14.8043 16.3836 14.8791 16.1953 14.8791H7.67621C7.48792 14.8791 7.30735 14.8043 7.17421 14.6712C7.04108 14.538 6.96628 14.3575 6.96628 14.1692C6.96628 13.0395 7.41506 11.956 8.21388 11.1572C9.0127 10.3584 10.0961 9.90961 11.9238 9.90961" fill="#131212" />
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
