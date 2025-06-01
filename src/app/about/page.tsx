export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Mission Section */}
      <section>
        <h1 className="text-4xl font-bold text-white mb-6">Our Mission</h1>
        <p className="text-xl text-gray-300">
          At FitTrack Pro, we believe everyone deserves access to professional-grade fitness tools.
          Our mission is to democratize fitness technology and make it accessible to everyone,
          regardless of their experience level or background.
        </p>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-3">Accessibility</h3>
            <p className="text-gray-300">
              We believe fitness should be accessible to everyone. Our platform is designed
              to be intuitive and adaptable to all skill levels.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
            <p className="text-gray-300">
              We continuously evolve our platform with cutting-edge technology to provide
              the best possible fitness experience.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
            <p className="text-gray-300">
              We foster a supportive community where members can share experiences,
              celebrate victories, and motivate each other.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
            <p className="text-gray-300">
              We strive for excellence in everything we do, from our user interface
              to our customer support.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Our Team</h2>
        <p className="text-gray-300 mb-8">
          FitTrack Pro is built by a passionate team of fitness enthusiasts, technology
          experts, and health professionals dedicated to helping you achieve your fitness goals.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-700 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-white">Sarah Johnson</h3>
            <p className="text-gray-400">Founder & CEO</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-700 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-white">Mike Chen</h3>
            <p className="text-gray-400">Head of Technology</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-gray-700 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-white">Lisa Patel</h3>
            <p className="text-gray-400">Lead Fitness Expert</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600/20 p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-gray-300 mb-6">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <a
          href="mailto:contact@fittrackpro.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
} 