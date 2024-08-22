import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import ArrowIcon from "@/assets/arrow-right.svg";
import Check from "@/assets/check.svg";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>

          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>

        <div className="relative">
          <Image src={productImage} alt="Product image" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="Pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImage}
            alt="Tube image"
            height={248}
            width={262}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>

        <div className="grid gap-4 row-gap-5 md:grid-cols-2 lg:grid-cols-4 mt-8 md:px-6">
          <div className="">
            <div className="flex items-center w-10 h-8 mb-3">
              <Check className="h-5 w-5" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Integration ecosystem
            </h6>
            <p className="text-base text-gray-700">
              Track your progress and motivate your efforts everyday.
            </p>
            <div className="flex items-center">
              <button className="btn btn-text gap-1 items-center pl-0">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="">
            <div className="flex items-center w-10 h-8 mb-3">
              <Check className="h-5 w-5" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Goal setting and tracking
            </h6>
            <p className="text-base text-gray-700">
              Set and track goals with manageable task breakdowns.
            </p>
            <div className="flex items-center">
              <button className="btn btn-text gap-1 items-center pl-0">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="">
            <div className="flex items-center w-10 h-8 mb-3">
              <Check className="h-5 w-5" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Secure data encryption
            </h6>
            <p className="text-base text-gray-700">
              Ensure your data safety with top-tier encryption.
            </p>
            <div className="flex items-center">
              <button className="btn btn-text gap-1 items-center pl-0">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="">
            <div className="flex items-center w-10 h-8 mb-3">
              <Check className="h-5 w-5" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Customizable notifications
            </h6>
            <p className="text-base text-gray-700">
              Get alerts on tasks and deadlines that matter most.
            </p>
            <div className="flex items-center">
              <button className="btn btn-text gap-1 items-center pl-0">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
