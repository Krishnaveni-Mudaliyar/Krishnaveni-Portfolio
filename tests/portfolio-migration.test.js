const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const projects = JSON.parse(fs.readFileSync(path.join(root, 'assets/data/projects.json'), 'utf8'));
const profile = JSON.parse(fs.readFileSync(path.join(root, 'assets/data/profile.json'), 'utf8'));
const showcase = JSON.parse(fs.readFileSync(path.join(root, 'assets/data/business-central.json'), 'utf8'));

const flagship = projects.find((project) => project.flagship);
assert(flagship, 'Expected a flagship Business Central project.');
assert(flagship.businessImpact, 'Flagship project should include a business impact summary.');
assert(Array.isArray(flagship.modules) && flagship.modules.length > 0, 'Flagship project should include modules.');
assert(typeof flagship.tables === 'number' && flagship.tables > 0, 'Flagship project should include table count.');
assert(Array.isArray(showcase.focusAreas) && showcase.focusAreas.length >= 4, 'Business Central showcase should include several focus areas.');
assert(Array.isArray(profile.recruiterHighlights) && profile.recruiterHighlights.length >= 3, 'Profile should contain recruiter-facing highlights.');
assert(projects.every((project) => project.category && Array.isArray(project.tags) && project.tags.length > 0), 'Projects should expose category and tag metadata for dynamic filtering.');

console.log('Portfolio migration checks passed.');
