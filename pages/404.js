import Link from "next/link";

export default function Custom404() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex flex-col text-center gap-y-5">
        <h1 className="text-6xl">
          <strong>404</strong> - Page Not Found
        </h1>
        <Link href="/">
          <a className="text-sky-500 text-lg hover:underline">Go Home</a>
        </Link>
      </div>
    </main>
  );
}
