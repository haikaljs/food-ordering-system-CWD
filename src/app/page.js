import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16 ">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            vero itaque quaerat placeat accusamus unde vel quis repellendus
            deserunt praesentium beatae sequi numquam velit odit omnis tempore
            facilis molestiae ab, voluptas delectus ea dolorum temporibus, eius
            qui. Ea, nulla aut!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            vero itaque quaerat placeat accusamus unde vel quis repellendus
            deserunt praesentium beatae sequi numquam velit odit omnis tempore
            facilis molestiae ab, voluptas delectus ea dolorum temporibus, eius
            qui. Ea, nulla aut!
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />

        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+44444444">
            +444444
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500">
        &copy; 2023 All rights reserved
      </footer>
    </>
  );
}
