import "./App.css";

function App() {
  return (
    <>
      <body>
        <main >
          <article className="bg-cyan-500 pt-10 pb-15 pr-50 pl-50 rounded-xl">
          <h1 className="pb-10">SUBSCRIBE</h1>
          <p className="pb-15">Sign up with your email address to receive news and updates.</p>
          <form className="flex gap-3">
            <input className="bg-white p-2 rounded-md" placeholder="First name" />
            <input className="bg-white p-2 rounded-md" placeholder="Last name" />
            <input className="bg-white p-2 rounded-md" placeholder="Email" />
          </form>
          <button className="bg-pink-500 mt-10 pl-30 pr-30 pt-2 pb-2 rounded-xl">Subscribe</button>
          </article>
        </main>
      </body>
    </>
  );
}

export default App;
