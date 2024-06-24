import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="bg-[#f7f6f2]">
      <div className="font-futurapt mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-8 sm:gap-20 md:grid-cols-2 items-center">
          {/* Image for services section */}
          <div className="w-full lg:col-span-1">
            <img
              src="/src/assets/hero2.jpg"
              alt="Features Image"
              className="mx-auto h-auto w-full max-w-[480px] rounded-2xl object-cover"
            />
          </div>
          {/* Services description */}
          <div className="w-full lg:col-span-1">
            <div className="max-w-[640px] mx-auto">
              <h3 className="mb-4 mt-6 text-2xl font-bold md:text-3xl text-center lg:text-left">
                What are we about.
              </h3>
              <p className="mb-6 text-[#636262] md:mb-10 lg:mb-12 text-center lg:text-left">
                At our physiotherapy clinic, what sets us apart is our high standard commitment to delivering unparalleled care and achieving exceptional results. We pride ourselves on a blend of expertise, evidence-based techniques, and a patient-centric approach that distinguishes us in the arena of rehabilitation and wellness. Our clinic stands for providing tailored, innovative solutions that cater to individual needs while fostering a supportive and empowering environment for every individual on their journey towards optimal health and recovery.
              </p>

              <Link to="/about">
                <a className="inline-block rounded-full border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
