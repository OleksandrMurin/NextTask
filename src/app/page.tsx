export default function Home() {
  let variable = "Let var";
  const showText = () => {
    const variable = "Nasral";
    return variable;
  };
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="">
        <p>{variable}</p>
        <p>{showText()}</p>
      </main>
    </div>
  );
}
