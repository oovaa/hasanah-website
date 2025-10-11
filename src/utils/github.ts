import { fetchWithRetry } from './api';
import { GitHubRepoData } from '../types';

const GITHUB_REPO_OWNER = 'oovaa';
const GITHUB_REPO_NAME = 'hasanah';

interface GitHubRepoResponse {
    stargazers_count: number;
    updated_at: string;
    pushed_at: string;
}

interface GitHubTagResponse {
    name: string;
}

export async function fetchGitHubRepoData(): Promise<GitHubRepoData> {
    try {
        // Fetch repository data
        const repoData = await fetchWithRetry<GitHubRepoResponse>(
            `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}`
        );

        // Fetch latest tag
        const tags = await fetchWithRetry<GitHubTagResponse[]>(
            `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/tags`
        );

        const latestTag = tags.length > 0 ? tags[0].name : '9.3.0';

        return {
            stars: repoData.stargazers_count,
            lastUpdated: repoData.pushed_at || repoData.updated_at,
            version: latestTag
        };
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        // Return fallback data
        return {
            stars: 0,
            lastUpdated: new Date().toISOString(),
            version: '9.3.0'
        };
    }
}
