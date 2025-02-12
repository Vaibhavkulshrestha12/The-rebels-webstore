const BrandStory = () => {
  return (
    <section className="py-16 bg-rebel-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-nofex font-bold mb-6">Our Story</h2>
            <p className="text-rebel-light/80 text-lg leading-relaxed">
              Born from the spirit of rebellion, THE REBEL is more than just a clothing brand – it's a movement. We combine edgy aesthetics with premium quality to create clothing that empowers you to express your unique identity. Join us in breaking free from conventional fashion norms.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://therebel.org.in/assets/symbol-BaBtzzzl.svg"
              alt="The Rebel Logo"
              className="w-64 h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;