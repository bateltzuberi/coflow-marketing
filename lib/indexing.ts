/** Netlify production is public; deployment previews must not compete with it. */
export function isPreviewDeployment(): boolean {
  return process.env.CONTEXT === "deploy-preview" || process.env.CONTEXT === "branch-deploy";
}
