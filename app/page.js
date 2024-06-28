import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-full flex justify-center pt-10">
        <ul className="flex gap-5 text-2xl">
          <li>
            <Link href="/calendly">Calendly</Link>
          </li>
          <li>
            <Link href="/calendly">Alternative</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
