const jobs = [
  { title: "Junior Data Analyst", company: "Example vacancy · fictional", type: "data", skills: ["python", "sql", "excel", "communication"], description: "Explore datasets, prepare reports, and communicate findings." },
  { title: "Junior Web Developer", company: "Example vacancy · fictional", type: "web", skills: ["html", "css", "javascript", "git"], description: "Build and maintain accessible web pages with a development team." },
  { title: "Business Operations Intern", company: "Example vacancy · fictional", type: "business", skills: ["excel", "communication", "project management", "analysis"], description: "Support operational reporting, process documentation, and coordination." },
  { title: "Data Engineering Intern", company: "Example vacancy · fictional", type: "data", skills: ["python", "sql", "git", "cloud"], description: "Assist with data pipelines, quality checks, and structured datasets." },
  { title: "Frontend Development Intern", company: "Example vacancy · fictional", type: "web", skills: ["html", "css", "javascript", "communication"], description: "Create responsive interfaces and test user-facing features." }
];

const aliases = { js: "javascript", "structured query language": "sql", "ms excel": "excel", "project coordination": "project management" };
const skillsInput = document.getElementById("skillsInput");
const careerSelect = document.getElementById("careerSelect");
const resultsList = document.getElementById("resultsList");
const resultCount = document.getElementById("resultCount");

function normalizeSkill(skill) {
  const value = skill.trim().toLowerCase();
  return aliases[value] || value;
}
function calculateMatch(userSkills, jobSkills) {
  const matched = jobSkills.filter(skill => userSkills.has(skill));
  return { matched, missing: jobSkills.filter(skill => !userSkills.has(skill)), score: Math.round((matched.length / jobSkills.length) * 100) };
}
function renderMatches(event) {
  if (event) event.preventDefault();
  const userSkills = new Set(skillsInput.value.split(",").map(normalizeSkill).filter(Boolean));
  const selected = careerSelect.value;
  const filtered = jobs.filter(job => selected === "all" || job.type === selected)
    .map(job => ({ ...job, result: calculateMatch(userSkills, job.skills) }))
    .sort((a, b) => b.result.score - a.result.score || a.title.localeCompare(b.title));
  resultCount.textContent = `${filtered.length} examples`;
  if (!userSkills.size) {
    resultsList.innerHTML = '<p class="form-hint">Add at least one skill to see the illustrative matches.</p>';
    return;
  }
  resultsList.innerHTML = filtered.slice(0, 4).map(job => {
    const matchedTags = job.result.matched.map(s => `<span class="skill-tag">${escapeHTML(s)}</span>`).join("");
    const missingTags = job.result.missing.map(s => `<span class="skill-tag missing">Learn: ${escapeHTML(s)}</span>`).join("");
    return `<article class="job-card">
      <div class="job-card-head"><div><h4>${escapeHTML(job.title)}</h4><p>${escapeHTML(job.company)}</p></div><span class="score-pill">${job.result.score}% overlap</span></div>
      <p class="explanation">${escapeHTML(job.description)}</p>
      <div class="skill-tags">${matchedTags}${missingTags}</div>
    </article>`;
  }).join("");
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
document.getElementById("matchForm").addEventListener("submit", renderMatches);
careerSelect.addEventListener("change", renderMatches);
renderMatches();

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
menuToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
siteNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
