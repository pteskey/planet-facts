async function fetchPlanetData() {
  const res = await fetch('data.json');
  const planetData = await res.json();
  return planetData;
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    planetData = await fetchPlanetData();
  } catch (e) {
    console.log("Error!");
    console.log(e);
  }

  console.log(planetData)
})