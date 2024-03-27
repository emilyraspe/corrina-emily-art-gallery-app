import Link from "next/link";
// import { usePathname } from 'next/navigation'

export default function Navigation() {
// const {pathname} = usePathname()
// console.log("pathname",pathname)
  return (
    <nav>
      <li>
        {" "}
        <Link href="/">Spotlight</Link>
      </li>
      <li>
        {" "}
        <Link href="/art-pieces">Art Pieces</Link>
      </li>
      <li>
        {" "}
        <Link href="/favorites">Favorites</Link>
      </li>
    </nav>
  );
}
