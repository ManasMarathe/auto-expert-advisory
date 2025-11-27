import Image from "next/image";
import React from "react";

const WhoAreWe = () => {
  const data = {
    title: "Who are we?",
    para1:
      "A-Cars Advisory is a premier automotive service advisory firm specializing in providing comprehensive solutions for luxury car owners.",
    para2:
      "With 30 years of experience, we are a trusted name in ensuring hassle-free maintenance and servicing for high-end vehicles.",
    para3:
      "Our services are designed to save our customers time, money, and effort while ensuring their vehicles remain in peak condition.",
    buttonText: "Get In Touch",
  };
  return (
    <section className="bg-[#f4f1ec] px-8">
      <div className="max-w-[--container-max-width] mx-auto py-12 flex items-center text-[#66231b]">
        <div className="w-[60%]">
          <h2 className="text-5xl font-bold my-10">{data.title}</h2>
          <div className="mt-4 flex flex-col items-center gap-6 text-2xl max-w-[80%]">
            <p>{data.para1}</p>
            <p>{data.para2}</p>
            <p>{data.para3}</p>
          </div>
        </div>
        <div className="w-[40%]">
          <div className="grid place-content-center">
            <Image src="/30-years.webp" alt="Team" width={430} height={430} />
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-[#cdad7d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b8946b] transition-colors duration-300">
              {data.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
