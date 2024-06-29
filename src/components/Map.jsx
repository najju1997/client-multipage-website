import { Link } from "react-router-dom";

const Map = () => {
  return (
    <section className="bg-[#ffffff]">
      <div className="font-futurapt mx-auto w-full max-w-7xl px-5 py-8 md:px-10 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-20">

            {/* Location description */}
            <div className="flex flex-col items-center w-full md:w-1/2">
                <h3 className="mb-4 mt-6 text-2xl font-bold md:text-3xl text-center lg:text-left">
                Our Location
                </h3>
                <p className="mb-6 text-[#636262] md:mb-10 lg:mb-12 text-center lg:text-left">
                Visit us at Cranstoun House, Ford, Pathhead. We're conveniently located to serve you with our expert physiotherapy services.
                </p>

                <div className="flex justify-center w-full">
                <a
                    href="https://www.google.com/maps/place/Cranstoun+House,+Ford,+Pathhead+EH37+5RF,+UK/@55.8703036,-2.9913522,15z/data=!4m6!3m5!1s0x4887bcf68efc3bef:0x6d8378a624211074!8m2!3d55.8709086!4d-2.9894076!16s%2Fg%2F1thq08y9?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-solid bg-purple-600 px-6 py-4 text-center font-bold text-white transition hover:border-black hover:bg-purple-500">
                    View on Google Maps
                </a>
                </div>
            </div>
            {/* Image for location section */}
            <div className="flex justify-center w-full lg:w-1/2">
                <a
                href="https://www.google.com/maps/place/Cranstoun+House,+Ford,+Pathhead+EH37+5RF,+UK/@55.8703036,-2.9913522,15z/data=!4m6!3m5!1s0x4887bcf68efc3bef:0x6d8378a624211074!8m2!3d55.8709086!4d-2.9894076!16s%2Fg%2F1thq08y9?entry=ttu"
                target="_blank"
                rel="noopener noreferrer">
                <img
                    src="/src/assets/location.png"
                    alt="Location Image"
                    className="mx-auto h-auto w-full lg:max-w-[480px] max-w-[480px] rounded-2xl object-cover shadow-2xl"
                />
                </a>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
