import Image from 'next/image';
import React from 'react';

export default function Element() {
  return (
    <div className="bg-darkBlue min-h-screen px-0 py-12">
      <div className="w-full bg-fuchsia-50 p-6 flex flex-col md:flow-row items-center pt-5 pb-10 pl-10">
        <div className=" md:w-1/2 text-center md:text-left pt-10 pb-10">
          <h3 className="text-blue-600 font-semibold text-lg mb-2">
            Fast-track your learning
          </h3>
          <h2 className="text-gray-800 font-bold text-5xl mb-4">
            Learn by doing
          </h2>
          <p className="text-gray-600">
            Learn Programming skills, from absolute beginner to advanced
            mastery. We try to create project base course wich help you to learn
            professionaly and make you fell a complete deeveloper.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="/assets/images/two.png"
            alt="Learning by doing"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
