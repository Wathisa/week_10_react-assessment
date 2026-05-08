import profileImage from "../assets/profile.png";

function Owner() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        41 WATHISA (SIGN) - JSD 12
      </h1>

      <img
        src={profileImage}
        alt="Profile Image"
        className="mx-auto mt-10 h-64 w-64 rounded-2xl border border-slate-200 object-cover shadow-sm"
      />

      <section className="mx-auto mt-8 max-w-3xl rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
        <h2 className="font-semibold text-slate-950">Short Biography:</h2>
        <p className="mt-5 leading-7 text-slate-600">
          I am learning React with Generation Thailand. This assessment helps me
          practice components, state, props, API requests, and simple page
          navigation in a small React application.
        </p>
      </section>
    </main>
  );
}

export default Owner;
