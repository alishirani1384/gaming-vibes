import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import { AuthContext } from "../stores/authContext";

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  const btn = useRef();
  function handleClick() {
    btn.current.classList.toggle('active')
    
  }

  return (
    <div className="container">
      <nav>
        <div>
          <Image src="/rupee.png" width={50} height={48} alt="rupee" />
          <h1>Gaming Vibes</h1>
        </div>
        <div ref={btn} onClick={handleClick} className="bars">
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
        </div>
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
          {authReady && (
            <div className="user">
              {!user && (
                <li onClick={login} className="btn">
                  Login/Signup
                </li>
              )}
              {user && <li className="bold">{user.email}</li>}
              {user && (
                <li onClick={logout} className="btn red">
                  Log out
                </li>
              )}
            </div>
          )}
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} alt="banner" />
      </div>
    </div>
  );
}
