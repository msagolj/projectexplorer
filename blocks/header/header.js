export default async function decorate(block) {
  block.textContent = "";
  const dom = document.createRange().createContextualFragment(`
  <div class='repoinfo'>
    <span>Repo: ${document.repo}</span>
    <span>Branch: ${document.repo_branch}</span>
    <span>Owner: ${document.repo_owner}</span>
  </div>
  `)
  block.append(dom);
}
