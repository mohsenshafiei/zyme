export type ColorMethod = (text: string) => string;

export interface Logger {
  [key: string]: ColorMethod;
  // @ts-ignore
  bold: {
    [key: string]: ColorMethod;
  };
}

export interface GitHubRepoResponse {
  stargazers_count: number;
}

export type StarCache = { [key: string]: string };
