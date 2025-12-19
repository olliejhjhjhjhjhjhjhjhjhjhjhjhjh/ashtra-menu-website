let lastUpdatedText = "Loading...";
(async function preloadGitHubData() {
  try {
    const res = await fetch(`https://api.github.com/repos/olliejhjhjhjhjhjhjhjhjhjhjhjhjh/Ashtra-menu/commits?per_page=1`);
    const data = await res.json();
    const date = new Date(data[0].commit.author.date).toLocaleDateString();
    lastUpdatedText = `Last updated: ${date}`;
  } catch {
    lastUpdatedText = "Live from GitHub";
  }
  const el = document.getElementById('last-updated');
  if (el) el.textContent = lastUpdatedText;
})();
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
function downloadMenu() {
  const repo = 'olliejhjhjhjhjhjhjhjhjhjhjhjhjh/Ashtra-menu';
  const a = document.createElement('a');
  a.href = `https://github.com/${repo}/archive/refs/heads/main.zip`;
  a.download = `AshtraMenu-latest.zip`;
  a.click();
}
document.getElementById('discordImg')?.addEventListener('click', () => {
  window.open(document.getElementById('discordImg').src, '_blank');
});