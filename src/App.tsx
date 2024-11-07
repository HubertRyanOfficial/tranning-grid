import Card from "./Card";

function App() {
  return (
    <div className="w-full min-h-[100vh] bg-gray-100 px-6 lg:px-16 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1270px]">
        <h1 className="text-2xl py-5 self-start">Cards</h1>
        <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
