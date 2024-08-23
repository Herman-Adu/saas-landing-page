import CubeHelix from "@/assets/cube-helix.png";
import Cube from "@/assets/cube.png";
import Image from "next/image";

export const Featured = () => {
  return (
    <div>
      <section className="pt-24 bg-white">
        <div className="container">
          <div className="section-heading">
            <div className="flex justify-center">
              <div className="tag">Everything you need</div>
            </div>

            <h2 className="section-title mt-5">
              Streamlined for easy management
            </h2>
            <p className="section-description mt-5">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </p>
          </div>

          <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-center lg:justify-center">
            <div className="card">
              <Image
                src={CubeHelix}
                alt="Cube helic image"
                height={329}
                width={329}
                className=""
              />
              <h2 className="text-center text-lg font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Integration ecosystem
              </h2>
              <p className="text-center text-[12px] tracking-tight text-[#010D3E]; mt-5">
                Enhance your productivity by connecting with your favorite
                tools, keeping all your essentials in one place.
              </p>
            </div>

            <div className="card">
              <Image
                src={Cube}
                alt="Cube helic image"
                height={329}
                width={329}
                className=""
              />
              <h2 className="text-center text-lg font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Integration ecosystem
              </h2>
              <p className="text-center text-[12px] tracking-tight text-[#010D3E]; mt-5">
                Enhance your productivity by connecting with your favorite
                tools, keeping all your essentials in one place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
