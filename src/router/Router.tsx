import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AboutMe from "@/views/AboutMe/AboutMe";
import Resume from "@/views/Resume/Resume";
import Portfolio from "@/views/Portfolio/Portfolio";
import Contact from "@/views/Contact/Contact";
import { routes } from './routes';
import './Router.css'

export default function Router() {
  const [aboutMe, resume, portfolio, contact] = routes;
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="my-node" timeout={1000}>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path={aboutMe.path} element={<AboutMe />} />
          <Route path={resume.path} element={<Resume />} />
          <Route path={portfolio.path} element={<Portfolio />} />
          <Route path={contact.path} element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
