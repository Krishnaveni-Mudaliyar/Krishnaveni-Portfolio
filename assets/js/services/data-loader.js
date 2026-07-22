const cache = new Map();

/**
 * Fetches and caches a JSON data file from assets/data/.
 * @param {string} name - filename without extension, e.g. 'profile'
 */
export async function loadData(name) {
  if (cache.has(name)) return cache.get(name);
  const res = await fetch(`assets/data/${name}.json`);
  if (!res.ok) throw new Error(`Failed to load data file: ${name}.json (${res.status})`);
  const data = await res.json();
  cache.set(name, data);
  return data;
}

/**
 * Loads several data files in parallel and returns them as a keyed object.
 * @param {string[]} names
 */
export async function loadAll(names) {
  const results = await Promise.all(names.map(loadData));
  return names.reduce((acc, name, i) => {
    acc[name] = results[i];
    return acc;
  }, {});
}
