export interface IRoute {
  label: string;
  path: string;
  icon?: string;
}

class Route {
  path;
  label;
  icon;

  constructor(label: IRoute["label"], path: IRoute["path"], icon: IRoute["icon"]) {
    this.label = label
    this.path = path;
    this.icon = icon;
  }
}

export const routes: IRoute[] = [
  new Route('About me', '/about', 'fa-face-smile'),
  new Route('Resume', '/resume', 'fa-file-lines'),
  new Route('Portfolio', '/portfolio', 'fa-briefcase'),
  new Route('Contact', '/contact', 'fa-address-book'),
];
