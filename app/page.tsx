export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col gap-28">
        <div>
          <p className="text-lg font-light leading-6">Hello all. I am</p>
          <h1 className="font-light text-[4vw]">Cotne Basiashvili</h1>
          <h2 className="text-[#4d5bce] font-bold text-[32px]">
            Front-End Web Developer
          </h2>
        </div>
        <div>
          <p className="font-normal text-[#607b96]">
            find my profile on Github:
          </p>
          <h3 className="text-2xl text-[#43d9ad]">
            github link ={" "}
            <a
              href="https://github.com/Cotne2003"
              target="_blank"
              className="underline text-2xl text-[#e99287]"
            >
              https://github.com/Cotne2003
            </a>
          </h3>
        </div>
      </section>
    </main>
  );
}
