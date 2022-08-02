import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} alt="rupee" />
        <h1>Gaming Vibes</h1>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/guides">
              <a>Guides</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} alt="banner" />
      </div>
    </div>
  );
}