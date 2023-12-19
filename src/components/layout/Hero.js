import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br />
          is better with a <br />
          <span className="text-primary">HAIKAL PIZZA</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece thats make every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex items-center gap-2 bg-primary uppercase  text-white px-4 py-2 rounded-full">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn More <Right />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image src="/pizza.png" layout="fill" objectFit="contain" alt="pizza" />
      </div>
    </section>
  );
}
