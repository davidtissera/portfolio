export interface IRoute {
  label: string;
  path: string;
}

class Route {
  path;
  label;

  constructor(label: IRoute["label"], path: IRoute["path"]) {
    this.label = label
    this.path = path;
  }
}

export const routes: IRoute[] = [
  new Route('About me', '/about'),
  new Route('Resume', '/resume'),
  new Route('Portfolio', '/portfolio'),
  new Route('Contact', '/contact'),
];
