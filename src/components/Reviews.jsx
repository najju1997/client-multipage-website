export default function Reviews() {
    return (
      <section className="font-futurapt w-full max-w-6xl mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="flex flex-col items-center gap-4 mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            <span className="text-blue-600">G</span>
            <span className="text-red-600">o</span>
            <span className="text-yellow-600">o</span>
            <span className="text-blue-600">g</span>
            <span className="text-green-600">l</span>
            <span className="text-red-600">e</span>
            <span className="text-gray-800"> Reviews</span>
          </h2>
          <p className="text-gray-600 max-w-md text-center">
            See what our customers are saying about our business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <a
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                href="https://www.google.com/search?q=the+everest+physiotherapy+pathhead#lrd=0x4887bd30443dce95:0xf4a9bf6e196871ca,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-gray-800 text-white font-semibold">
                    {review.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    <div className="flex items-center gap-1 text-xs font-medium text-yellow-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{review.text}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  }
  
  const reviews = [
    {
      initials: 'SL',
      name: 'Sylv Lambie',
      rating: 5,
      text: 'Rada always gives us a warm welcome and has a very professional approach. He tailors his treatment to our individual issues with great results. My partner and I are so glad we found him!',
    },
    {
      initials: 'SJ',
      name: 'Shonagh Jackson',
      rating: 5,
      text: 'I highly recommend Rada at Everest Physiotherapy. Rada is very knowledgeable, professional, kind and provides excellent care in a pleasant and clean setting. He has successfully diagnosed and treated me, easing my aches, strains and pains thus allowing me to continue to be as fit as possible in my advancing years. He also diagnosed and treated my 12 year old granddaughter who was suffering from growth pains in her ankle and he is now treating my husband who has a rotator cuff injury.',
    },
    {
      initials: 'ES',
      name: 'Elma Smith',
      rating: 5,
      text: 'Had physiotherapy for a few weeks from Rada and delighted with the result. Rada is very caring. Helpful and gives good advice. I would certainly recommend him to my friends and seek his help in the future.',
    },
    {
      initials: 'JS',
      name: 'James Simpson',
      rating: 5,
      text: 'Excellent and professional service. Has helped get shoulder working again. Only suggestion would be paper instructions for exercises.',
    },
  ];
  