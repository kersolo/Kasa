async function Data() {
  try {
    const res = await fetch('/Logements.json');
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default Data;
