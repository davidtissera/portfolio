import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "@/views/AboutMe/AboutMe";
import Resume from "@/views/Resume/Resume";
import Portfolio from "@/views/Portfolio/Portfolio";
import Contact from "@/views/Contact/Contact";
import { routes } from './routes';

export default function Router() {
  const [aboutMe, resume, portfolio, contact] = routes;

  return (
    <Routes>
      <Route path={aboutMe.path} element={<AboutMe />} />
      <Route path={resume.path} element={<Resume />} />
      <Route path={portfolio.path} element={<Portfolio />} />
      <Route path={contact.path} element={<Contact />} />
    </Routes>
  );
}
