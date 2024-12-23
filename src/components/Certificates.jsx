import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Certificates(props) {
  const certificates = props.certificates;

  // Sort certificates by issued_date in descending order (latest first)
  const sortedCertificates = [...certificates].sort((a, b) => {
    return new Date(b.issued_date) - new Date(a.issued_date);
  });

  return (
    <main className="dark:bg-[#181a1b]">
      <section className="pageTop">
        <div className="w-full flex flex-col gap-3 py-5 select-none mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Certificates
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I've participated in many contests, courses and tests and got
            certified in many skills. You can find the certificates below.
          </p>
        </div>
        <div className="flex flex-col gap-3 font-inter">
          {sortedCertificates.map((value, index) => {
            // Ensure issued_date is a Date object
            const issuedDate = new Date(value.issued_date);

            // Add Intersection Observer to each certificate
            const [ref, inView] = useInView({
              threshold: 0.2, // Trigger when 20% of the element is visible
              triggerOnce: true, // Only trigger once
            });
            const controls = useAnimation();

            // Trigger animation when the element comes into view
            React.useEffect(() => {
              if (inView) {
                controls.start("visible");
              }
            }, [controls, inView]);

            return (
              <motion.div
                key={index}
                ref={ref}
                className="flex gap-2 p-3 bg-white rounded-lg shadow md:flex-row md:items-center md:gap-4 dark:bg-[#25282A]"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 30 }, // Start off-screen (below)
                  visible: { opacity: 1, y: 0 }, // Slide to visible position
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.01, // Optional delay for staggered appearance
                }}
              >
                {/* Organization Logo */}
                <div className="relative flex items-center justify-center">
                  <img
                    src={value.org_logo}
                    alt={`${value.org_name} logo`}
                    className="object-cover w-[50px] rounded-md"
                  />
                </div>

                {/* Certificate Details */}
                <div className="flex flex-col">
                  <a
                    className="text-sm font-semibold hover:underline sm:text-base md:text-lg text-neutral-900 dark:text-neutral-200"
                    href={value.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {value.title}
                  </a>
                  <p className="text-xs text-gray-500">
                    {value.org_name} &#x2022;{" "}
                    {issuedDate.toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Certificates;
