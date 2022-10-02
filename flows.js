module.exports = { pageViewFlow };

async function pageViewFlow(page, context) {
  try {
    const baseUrl = context.vars.target;
    const waitTime = 65_000;

    await page.goto(`${baseUrl}/contact`);
    await wait(waitTime);
    await page.goto(`${baseUrl}/privacy`);
    await wait(waitTime);
    await page.goto(`${baseUrl}/careers`);
    await wait(waitTime);
    
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }  
}

const wait = (ttl) =>
  new Promise(resolve => setTimeout(resolve, ttl));
  