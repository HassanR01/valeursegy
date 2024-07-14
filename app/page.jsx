import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="image w-full h-full flex flex-col items-center justify-center">
        <Image src={'/underctu.png'} width={300} height={300} alt="Under Construction" />
        <h2 className="text-2xl font-bold text-white mt-5 mb-2">Team is already working to take your idea from the vision to the reality</h2>
        <p className="text-2xl font-bold text-white"></p>
    </div>
    </>
  );
}
