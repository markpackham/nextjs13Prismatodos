import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-2xl">Todos</h1>
        <Link href="/new"></Link>
      </header>
      <ul></ul>;
    </>
  );
}
