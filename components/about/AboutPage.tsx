import React from "react";
import email from "/public/logos/Email.svg";
import telephone from "/public/logos/telephone.png";
import arrow from "/public/logos/arrow.png";

const AboutPage = () => {
  return (
    <main className="h-[100vh] flex pl-[8%] pt-[150px] gap-[15%]">
      <section className="">
        <div className="">
          <div className=" w-[170px]">
            <h2 className="text-5xl">about-me</h2>
          </div>
          <div className="mt-[20px]">
            <div className="rounded-lg py-1 pl-4 bg-[#1e2d3d] text-2xl Caveat uppercase flex items-center gap-1">
              <span>
                <img src={arrow.src} width={10} alt="" />
              </span>{" "}
              Info
            </div>
            <div className="mt-3">
              <div className="pl-5 flex items-center gap-3 Caveat uppercase py-1">
                <span>
                  <img src={arrow.src} width={10} alt="" />
                </span>{" "}
                personal
              </div>
              <div className="pl-5 flex items-center gap-3 Caveat uppercase py-1">
                <span>
                  <img src={arrow.src} width={10} alt="" />
                </span>{" "}
                proffesional
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mt-[20px]">
            <div className="rounded-lg py-1 pl-4 bg-[#1e2d3d] text-2xl Caveat uppercase flex items-center gap-1">
              <span>
                <img src={arrow.src} width={10} alt="" />
              </span>{" "}
              contacts
            </div>
            <div className="mt-3">
              <div className="pl-5 flex gap-3 items-center font-sans py-1">
                <span>
                  <img src={email.src} width={15} alt="" />
                </span>
                basiashvilic@gmail.com
              </div>
              <div className="pl-5 flex gap-3 items-center font-sans py-1">
                <span>
                  <img src={telephone.src} width={15} alt="" />
                </span>
                +(995) 568 864 004
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[40%]">
        <div className="flex gap-24">
          <div>
            <h2 className="text-2xl">
              // info <span className="text-[#607b96]">/ personal</span>
            </h2>
          </div>
          <div>
            <h2 className="text-2xl">
              // info <span className="text-[#607b96]">/ personal</span>
            </h2>
          </div>
        </div>
        <p className="mt-[30px] text-[#8bb4dd]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ab aut
          dignissimos facilis reprehenderit repudiandae autem beatae enim
          aspernatur. Cumque reprehenderit, omnis laborum aliquam ratione
          similique quo laboriosam a officia. Error aspernatur officiis
          voluptatibus voluptate impedit minima sunt consequatur assumenda sit
          molestias? Dignissimos a minima esse dolore impedit natus quia eaque
          voluptatibus officiis sed asperiores aperiam, eum nulla magni
          sapiente. Necessitatibus praesentium quasi, perferendis recusandae
          sapiente dolores vero a odit molestiae temporibus quos culpa officiis
          dolorum minus ea quisquam excepturi ipsa eius harum soluta ratione
          dolor, iusto eveniet in! Soluta? Cumque cum ipsam similique quibusdam
          vero quos sunt id voluptates. Quaerat suscipit, modi, in doloremque
          et, esse blanditiis quidem officiis aut at deserunt saepe sed vel a!
          Dolorum, modi officiis. Aspernatur alias aliquid eligendi
          reprehenderit? Quod at obcaecati alias exercitationem sint ipsam,
          atque quisquam nemo aut! Sint ab dolorem harum cupiditate. Quia quos
          saepe quidem. Mollitia delectus distinctio neque consequatur. Veniam
          itaque tenetur nisi quis modi, dolor omnis, expedita, nostrum quasi
          vel veritatis tempore odio. Error, perferendis adipisci nobis itaque
          modi nam. Quae aut aliquid id harum quas aperiam modi? Quam in totam
          nesciunt ullam facilis laborum delectus rem molestias, quas,
          reiciendis quisquam veniam earum, nobis adipisci. Sint, nam, ratione
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
