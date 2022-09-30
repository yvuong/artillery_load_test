module.exports = { pageViewFlow };

async function pageViewFlow(page, context) {
  try {
    console.log(`TARGET: ${context.vars.target}`);
    // console.log(`DURATION: ${context.vars.phases.duration} seconds`);
    // console.log(`ARRIVAL RATE: ${context.vars.phases.arrivalRate} virtual users/second`);

    const baseUrl = context.vars.target;
    const waitTime = 65_000;

    await page.goto(baseUrl);
    await page.goto(`${baseUrl}/contact`);
    await page.goto(`${baseUrl}/privacy`);
    await wait(waitTime);
    
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }  
}

const wait = (ttl) =>
  new Promise(resolve => setTimeout(resolve, ttl));
  