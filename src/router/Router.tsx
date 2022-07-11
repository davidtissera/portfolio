import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from './routes';

export default function Router() {
  const [aboutMe, resume, portfolio, contact] = routes;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={aboutMe.path} element={<>About me</>} />
        <Route path={resume.path} element={<>Resume</>} />
        <Route path={portfolio.path} element={<>Portfolio</>} />
        <Route path={contact.path} element={<>Contact</>} />
      </Routes>
    </BrowserRouter>
  );
}
