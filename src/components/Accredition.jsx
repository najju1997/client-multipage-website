import acc1img from '../assets/accredition1.png'
import acc2img from '../assets/accredition2.png'

const Accredition = () => {
  return (
        <section className="bg-[#f7f6f2] ">
          <div className="container font-futurapt mx-auto w-full max-w-7xl px-5 py-8 md:px-4 md:py-12 lg:py-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Accreditation
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're proudly accredited and certified.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-12">
              {[acc1img, acc2img].map((logo, index) => (
                <div key={index} className="mx-auto flex w-full items-center justify-center group">
                  <img
                    src={logo}
                    width="200"
                    height="200"
                    alt={`Accredition ${index + 1}`}
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default Accredition;
