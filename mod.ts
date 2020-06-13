async function downloadLaunchData() {
  const response = await fetch(
    "https://api.spacexdata.com/v3/launches/latest",
    {
      method: "GET",
    },
  );

  return response.json();
}

console.log(await downloadLaunchData());
