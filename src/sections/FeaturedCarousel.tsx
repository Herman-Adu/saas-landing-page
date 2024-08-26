"use client";

import image1 from "@/assets/image-1.jpg";
import image2 from "@/assets/image-2.jpg";
import image3 from "@/assets/image-3.jpg";
import image4 from "@/assets/image-4.jpg";
import image5 from "@/assets/image-5.jpg";
import image6 from "@/assets/image-6.jpg";
import image7 from "@/assets/image-7.jpg";
import image8 from "@/assets/image-8.jpg";

import Card from "@/components/Card";
import useMeasure from "react-use-measure";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export const FeaturedCarousel = (props: {
  className?: string | undefined;
  images: string | undefined;
  //testimonials: typeof testimonials;
  duration: number;
}) => {
  // pull images in from the public folder
  /* const images = [
    "/image-1.jpg",
    "/image-2.jpg",
    "/image-3.jpg",
    "/image-4.jpg",
    "/image-5.jpg",
    "/image-6.jpg",
    "/image-7.jpg",
    "/image-8.jpg",
  ]; */

  const FAST_DURATION = 25;
  const SLOW_DURATION = 150;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinsh, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [sliderRef, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinsh) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [width, xTranslation, duration, mustFinsh, rerender]);

  return (
    <section className="py-8 md:py-12 bg-white m">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Featured services</div>
          </div>

          <h2 className="section-title mt-5">
            Explore our services Talored to your needs
          </h2>
          <p className="section-description mt-5">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_left,transparent,black,transparent)]">
          <motion.div
            className="flex gap-4 md:gap-6 lg:gap-8"
            ref={sliderRef}
            style={{ x: xTranslation }}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
            onTouchStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onTouchEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {[...images, ...images].map((image, idx) => (
              <Card image={image?.src} key={idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
