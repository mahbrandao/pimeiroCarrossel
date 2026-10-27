import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Galeria</h1>
      <p className="text-gray-400 mb-6">Motos e carros esportivos</p>
      <Carousel />
    </main>
  );
}
