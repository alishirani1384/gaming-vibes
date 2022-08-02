import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../stores/authContext";

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);

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
          {authReady &&
            <span>
            {!user && 
            <li onClick={login} className="btn">
              Login/Signup
            </li>
          }
          {user && <li className="bold">{user.email}</li>}
          {user &&
            <li onClick={logout} className="btn red">
              Log out
            </li>
          }
          </span>}
          
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} alt="banner" />
      </div>
    </div>
  );
}
