export type ColorMethod = (text: string) => string;

export type Bold = {
  [key: string]: ColorMethod;
};

export interface Logger {
  // @ts-ignore
  bold: Bold;
  [key: string]: ColorMethod;
}

export interface GitHubRepoResponse {
  stargazers_count: number;
}

export type StarCache = { [key: string]: string };

export type PackageInfo = {
  repository: {
    url: string;
  };
  description: string;
  author: {
    name: string;
    url: string;
  };
  name: string;
  "dist-tags": {
    latest: string;
  };
};
