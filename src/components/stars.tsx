import Image from "next/image";

export default function Stars() {
  return (
    <div>
      <Image
        className="opacity-70"
        src="/icon_star.png"
        alt="icone de estrela"
        width={20}
        height={20}
      />
      <Image
        className="ml-4 opacity-70"
        src="/icon_star.png"
        alt="icone de estrela"
        width={20}
        height={20}
      />
    </div>
  );
}
