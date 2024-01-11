export default function Home() {
  return (
    <main className="">
      <section className="flex flex-col gap-28 text-right items-end p-[8%] h-[90vh]">
        <div>
          <p className="font-light leading-6 Caveat text-7xl mb-8">"HELLO"</p>
          <h1 className="font-light text-8xl text-[#B336FF]">
            <span className="text-white">i am </span>Cotne Basiashvili
          </h1>
          <h2 className="text-xl font-normal w-[696px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sollicitudin egestas neque nec volutpat. Cras rhoncus magna id
            tellus sodales viverra eu eu nisi. Nam venenatis mattis dictum.
            Praesent venenatis leo dui, sed auctor eros posuere ac. Etiam mauris
            augue, laoreet quis ex ut, sollicitudin cursus orci. Donec in est
            vitae sem scelerisque tempor sit amet eu sem.
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
