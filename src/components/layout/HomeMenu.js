import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section>
      <div className="absolute left-0 right-0 overflow-x-hidden">
        <div className="h-48 w-48 absolute -left-12">
          <Image
            src={"/sallad1.png"}
            layout="fill"
            objectFit="contain"
            alt="sallad"
          />
        </div>
        <div className="h-48 w-48 absolute -right-12">
          <Image
            src={"/sallad2.png"}
            layout="fill"
            objectFit="contain"
            alt="sallad"
          />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders subHeader="Checkout" mainHeader="Menu" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
