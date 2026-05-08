import profileImage from "../assets/profile.png";

function Owner() {
  return (
    <main className="px-6 py-12 text-center">
      <h1 className="text-3xl font-bold sm:text-4xl">
        41 WATHISA (SIGN) - JSD 12
      </h1>

      <img
        src={profileImage}
        alt="Profile Image"
        className="mx-auto mt-10 h-64 w-64 rounded-md object-cover"
      />

      <section className="mx-auto mt-8 max-w-3xl">
        <h2 className="font-bold">Short Biography:</h2>
        <p className="mt-5 text-gray-800">
          I am learning React with Generation Thailand. This assessment helps me
          practice components, state, props, API requests, and simple page
          navigation in a small React application.
        </p>
      </section>
    </main>
  );
}

export default Owner;
