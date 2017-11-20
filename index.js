function findMatching (drivers, string) {
  const matchingDrivers = drivers.filter( function(driver) { return driver.toLowerCase() === string.toLowerCase() } );
  return matchingDrivers;
}

findMatching(drivers, string);
