#!/usr/bin/env node
import cnsl from '#lib/cnsl';
import { getGitHubStars } from '#lib/gh';
import { fetchPackageInfo } from '#lib/npm';
import { transformIf } from '#lib/utils';
import type { PackageJson } from 'read-pkg';

const formatDetails = (info: any, stars: string | number) =>
  [
    transformIf(
      !!info['dist-tags']?.latest,
      info['dist-tags'].latest,
      v => `${v}`,
    ),
    transformIf(
      !!info.author && typeof info.author === 'object',
      `${info.author?.name || ''} ${info.author?.url ? `- ${info.author.url}` : ''}`.trim(),
      v => v || 'No author or contributors available',
    ),
    info.repository?.url || 'No repository',
    info.description || 'No description available',
    stars || 'No stars available',
  ].filter(Boolean);

const printTree = (root: string, branches: string[]) => {
  console.log();
  console.log(`${cnsl.yellowGreen('╭◉ ')}${cnsl.bold.white(root)}`);
  for (const [index, branch] of branches.entries()) {
    const prefix = index === branches.length - 1 ? '╰──‣' : '├──‣';
    console.log(cnsl.yellowGreen(prefix), cnsl.silver(branch));
  }
};

const displayDependencyTree = async (
  deps: Record<string, string>,
  label: string,
) => {
  const ora = (await import('ora')).default;
  console.log();
  console.log(cnsl.purple(`Fetching ${label.toLowerCase()}...`));
  console.log(`${cnsl.bold.yellowGreen(label)}`);
  await Promise.all(
    Object.keys(deps).map(async dep => {
      const spinner = ora('').start();
      const [stars, info] = await Promise.all([
        getGitHubStars(dep),
        fetchPackageInfo(dep),
      ]);
      spinner.stop();
      const details = formatDetails(info, stars);
      printTree(dep, details);
    }),
  );
};

const getPackageJsonValues = async (): Promise<PackageJson | null> => {
  const { readPackage } = await import('read-pkg');
  const { findUp } = await import('find-up');
  const packageJsonPath = await findUp('package.json');

  if (!packageJsonPath) {
    console.error(
      'No package.json found in the current or parent directories.',
    );
    return null;
  }

  const packageJson = await readPackage();
  const {
    name,
    version,
    dependencies = {},
    devDependencies = {},
  } = packageJson;

  console.log(`${cnsl.bold.yellowGreen('Package Name:')} ${name}`);
  console.log(`${cnsl.bold.yellowGreen('Package Version:')} ${version}`);

  await displayDependencyTree(dependencies, 'Dependencies:');
  await displayDependencyTree(devDependencies, 'Dev Dependencies:');

  return packageJson;
};

getPackageJsonValues().catch(error => console.error(error));
