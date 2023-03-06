import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>SamuelTheophilus | About</title>
      </Head>
      <div className="h-screen flex">
        <div className="mx-auto mt-10 px-96 leading-loose">
          <h1 className='text-4xl py-5'>About</h1>
          <p className = "mb-7 text-1xl">
          I am a learner. That is the best summary I can give about myself.
          </p>
          <p className = "mb-7 text-1xl">
          This statement may seem banal but I say it nonetheless, “I love to learn”. However, I don’t learn just anything.
          I am interested in <span className="font-semibold">Artificial Intelligence</span>, <span className="font-semibold">Education </span>,
           <span className="font-semibold">Writing</span>, <span className="font-semibold">Software Development (Mobile Development and Web Development)</span>,
          and <span className="font-semibold">Skateboarding</span>.
          </p>
          <p className = "mb-7  text-1xl">
            I’ve been an “enthusiast” of Artificial Intelligence.
            Enthusiast in quotation marks because I admired from afar about how Artificial Intelligence worked.
            With the emergence of ChatGPT, I decided to no longer be a spectator, rather get involved in AI.
          </p>
          <p className = "mb-7  text-1xl">
          I love to write – fiction and non-fiction.
          Though I am not your everyday Neil Gaiman or Virignia Wolfe,
          I aspire to write to the point I can write like them, maybe in 10 years or 50 years.
           Who knows when? You can check out my short stories here in the meantime <span className="text-[#495579] font-semibold">(link)</span>
          </p>
        </div>

      </div>
    </>
  );
}

export default About;