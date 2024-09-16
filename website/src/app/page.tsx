import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex items-center justify-center bg-black bg-opacity-50 text-white overflow-hidden py-[200px]">
      <Image
        className="absolute top-0 right-0 w-full h-[600px] object-cover object-right flex items-center justify-center -z-10"
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
  );
}
