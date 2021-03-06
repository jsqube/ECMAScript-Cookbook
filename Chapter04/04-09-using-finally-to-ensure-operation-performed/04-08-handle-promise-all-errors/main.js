
async function checkEngines() {
  console.log('checking engine');

  return new Promise(function (resolve) {
    setTimeout(function () {
      if (Math.random() < 0.9) {
        throw new Error('Engine check failed');
      } else {
        console.log('Engine check completed');
        resolve();
      }
    }, 250)
  });
}


async function checkFlightPlan() {
  console.log('checking flight plan');

  return new Promise(function (resolve) {
    setTimeout(function () {
      if (Math.random() < 0.9) {
        throw new Error('Flight plan check failed');
      } else {
        console.log('Flight plan check completed');
        resolve();
      }
    }, 350)
  });
}


async function checkNavigationSystem() {
  console.log('checking navigation system');

  return new Promise(function (resolve) {
    setTimeout(function () {
      if (Math.random() < 0.9) {
        throw new Error('Navigation system check failed');
      } else {
        console.log('Navigation system check completed');
        resolve();
      }
    }, 450)
  });
}

export async function main() {
  try {
    const prelaunchChecks = [
      checkEngines(),
      checkFlightPlan(),
      checkNavigationSystem()
    ];

    await Promise.all(prelaunchChecks);
    console.log('All systems go, ready to launch: 🚀');
  } catch (e) {
    console.error('Aborting launch: 🛑');
    console.error(e);
  }
}