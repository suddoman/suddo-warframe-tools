async function testFetch() {
  const url = "https://api.warframestat.us/pc/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
      document.getElementById("test1").innerHTML = "Failed"
    }

    const parsedResponse = await response;
    console.log(parsedResponse);
    return parsedResponse;
    
  } catch (error) {
    console.error(error.message);
  }
}

function populate(){
    testFetch().then(result => {
        //var data = JSON.parse(result);
        // do things with the result here, like call functions with them
        console.log(result);
        console.log(data);

    })
}

async function initFetch() {
    // import WorldState from 'warframe-worldstate-data';
    // using this syntax to make it precisely testable in a test
    //const WorldStateParser = await import('warframe-worldstate-parser');
    const worldstateData = await fetch('https://api.warframe.com/cdn/worldState.php').then((data) => data.text());

    const ws = await WorldStateParser(worldstateData);

    console.log(ws.alerts[0].toString());
}