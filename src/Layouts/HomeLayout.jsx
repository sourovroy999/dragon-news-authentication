import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavBar from "../Components/Layout-component/LeftNavBar";
import RightNavBar from "../Components/Layout-component/RightNavBar";
import Main from "../Components/Main";
import Nav from "../Components/Nav";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header />
                <section className="w-11/12 mx-auto" >
                    <LatestNews/>
                </section>
            </header>

            <nav className="w-11/12 mx-auto py-2">
                <Nav />
            </nav>

            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
              <aside className="left col-span-3"><LeftNavBar/></aside>
              <section className="col-span-6"><Outlet /></section>
              <section className="col-span-3"><RightNavBar/> </section>
                
            </main>


        </div>
    );
};

export default HomeLayout;