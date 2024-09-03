import npmFetch from "npm-registry-fetch";

export async function fetchPackageInfo(packageName: string) {
  const packageInfo = await npmFetch.json(`/${packageName}`);
  return packageInfo;
}
