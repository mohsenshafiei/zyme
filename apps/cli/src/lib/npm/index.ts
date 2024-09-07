import npmFetch from "npm-registry-fetch";
import type { PackageInfo } from "#types";

export async function fetchPackageInfo(
  packageName: string,
): Promise<PackageInfo> {
  const packageInfo = await npmFetch.json(`/${packageName}`);
  return packageInfo as PackageInfo;
}
