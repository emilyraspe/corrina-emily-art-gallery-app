import Link from "next/link";
import { useRouter } from "next/router";
export default function Navigation() {
  const router = useRouter();

  // Function to determine if a route is active
  const isActiveRoute = (route) => {
    return router.pathname === route ? "isActive" : "";
  };

  return (
    <nav>
      <li className={isActiveRoute("/")}>
        <Link href="/">Spotlight</Link>
      </li>
      <li className={isActiveRoute("/art-pieces")}>
        <Link href="/art-pieces">Art Pieces</Link>
      </li>
      <li className={isActiveRoute("/favorites")}>
        <Link href="/favorites">Favorites</Link>
      </li>
    </nav>
  );
}
