export default function Home() {
  return (
    <div className="max-w-6xl mx-auto flex items-center justify-center mt-28">
      <div className="flex flex-col justify-start items-start gap-14">
        <div className="flex flex-col">
          <span className="text-soeeablue-green-500 font-normal text-5xl">Precisa garantir a</span>
          <span className="text-soeeablue-blue-500 font-extrabold text-5xl">segurança de sua carga?</span>
        </div>
        <button className="text-white bg-soeeablue-blue-500 px-4 py-2 rounded-xl">Nossos Serviços</button>
      </div>
      <div className="max-w-[674px]">

        <img src="/banner-woman.png" />
      </div>
    </div>
  );
}
