import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-white mt-5 font-futurapt">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="w-full mx-auto place-self-center lg:col-span-7 text-center lg:text-left">
          <h1 className="max-w-2xl mx-auto mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl lg:max-w-none">
            Your path to better physical wellness starts here
          </h1>
          <p className="max-w-2xl mx-auto mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl lg:max-w-none">
            Leading Physiotherapy Services with Over 20 Years of Experience in Lothian
          </p>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2_lncfjV2lDh7zH-1wOV3q2aG41YSm7gXDdxJ4mEizZN0q0_g1C0ed3wBGKEtPd-Gx5HWSlaEA"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-white border border-transparent rounded-lg bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 transform transition duration-300 hover:scale-105"
          >
            Book an Appointment
          </a>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="/src/assets/physiotherapy.png"
            alt="mockup"
            className="mx-auto shadow-2xl flex h-full w-full max-w-[640px] rounded-2xl object-cover mt-16 lg:mt-0"
          />
        </div>

      </div>
    </section>
  );
}
  