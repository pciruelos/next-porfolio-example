import Navbar from "./Navbar";
import { useRouter } from "next/router";
import Footer from "./Footer";
import { useEffect } from "react";
import NProgress from "nprogress";

const Layout = (props, footer = true) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouterChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouterChange);
    };
  }, []);

  return (
    <div className="d-flex flex-column h-100">
      <Navbar />
      <main className="container">{props.children}</main>

      {
        footer && (<footer className="footer ml-auto bg-dark text-light text-center">
        <div className="container p-4">Ciru ciruelo 2022</div>
      </footer>)
      }
      
    </div>
  );
};

export default Layout;
