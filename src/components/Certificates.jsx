import React from "react";

function Certificates(props) {
  const certificates = props.certificates;

  // Sort certificates by issued_date in descending order (latest first)
  const sortedCertificates = [...certificates].sort((a, b) => {
    return new Date(b.issued_date) - new Date(a.issued_date);
  });

  return (
    <section className="pageTop">
      <div className="w-full flex flex-col gap-3 py-5 select-none mb-10 undefined">
        <h1
          className="text-4xl  md:text-5xl font-bold text-neutral-900  undefined"
        >
          Certificates
        </h1>
        <p className="text-lg text-gray-600">
          I've participated in many contests, courses and test and get certified
          in many skills. You can find the certificates below.
        </p>
      </div>
      <div className="flex flex-col gap-3 font-inter">
        {sortedCertificates.map((value, index) => {
          // Ensure issued_date is a Date object
          const issuedDate = new Date(value.issued_date);

          return (
            <div
              className="flex gap-2 p-3 bg-white rounded-lg shadow md:flex-row md:items-center md:gap-4 dark:bg-darkSecondary/50"
              key={index}
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
                  className="text-sm font-semibold hover:underline sm:text-base md:text-lg text-neutral-900"
                  href={value.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value.title}
                </a>
                <p className="text-xs text-gray-500">
                  {value.org_name} &#x2022; {issuedDate.toLocaleDateString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Certificates;
