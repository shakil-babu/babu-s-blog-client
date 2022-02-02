import { useContext, useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { ImBrightnessContrast } from "react-icons/im";
import { CgDarkMode } from "react-icons/cg";
import { AuthContext, darkmodeContext } from "./Layout";

import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [localUser, setLocalUser] = useState({});
  const [darkmode, setDarkmode] = useContext(darkmodeContext);
  const toggle = () => {
    setDarkmode(!darkmode);
  };

  const router = useRouter();

  const [user, setUser] = useContext(AuthContext);
  const signOut = () => {
    setUser({});
    localStorage.removeItem("loggedinUser");
  };

  const setUserinfo = () => {
    var jsonString = localStorage.getItem("loggedinUser");
    var userInfo = JSON.parse(jsonString);
    setLocalUser(userInfo);
  };

  const [admins, setAdmins] = useState([]);
  const readAdmins = () => {
    fetch("https://pristine-kenai-fjords-11934.herokuapp.com/readAdmins")
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  };
  useEffect(() => {
    setUserinfo();
    readAdmins();
  }, []);

  return (
    <>
      <section className={styles.navbar_section}>
        <div className={styles.nav_title}>
          <h1
            className={
              darkmode ? `${styles.lightColor}` : `${styles.darkColor}`
            }
          >
            <span>(</span> শাকিল বাবুর ঝুলি
          </h1>
          <h5
            className={
              darkmode ? `${styles.lightColor}` : `${styles.darkColor}`
            }
          >
            হাবলুর মুখে " অ, আ, ক , খ " <span>)</span>
          </h5>
        </div>

        <nav className={darkmode ? styles.nav_main : styles.nav_main_light}>
          <a className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">১.হোম()</Link>
          </a>

          <a className={router.pathname == "/categories" ? "active" : ""}>
            <Link href="/categories">২.ক্যাটাগরিস()</Link>
          </a>

          <a className={router.pathname == "/contact" ? "active" : ""}>
            <Link href="/contact">৩.যোগাযোগ()</Link>
          </a>
          <a className={router.pathname == "/about-me" ? "active" : ""}>
            <Link href="/about-me">৪.আমার সম্পর্কে()</Link>
          </a>

          {admins.map((item) => {
            if (item?.email === user?.email) {
              return (
                <>
                  <a
                    className={router.pathname == "/dashboard" ? "active" : ""}
                  >
                    <Link href="/dashboard">৫.ম্যানেজ()</Link>
                  </a>
                </>
              );
            }
          })}

          {darkmode ? (
            <CgDarkMode onClick={toggle} className="dark" />
          ) : (
            <ImBrightnessContrast onClick={toggle} className="light" />
          )}

          {user?.email && (
            <>
              <div className={styles.userBox}>
                <img src={user.img} alt="" />
                <div>
                  <h5>{user.name}</h5>
                  <button onClick={signOut} className="loginBtn">
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          )}
        </nav>
      </section>
    </>
  );
};

export default Navbar;
