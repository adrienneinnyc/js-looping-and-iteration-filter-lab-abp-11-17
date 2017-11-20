function findMatching (drivers, string) {
  const matchingDrivers = drivers.filter( function(driver) { return driver.toLowercase() === string.toLowerCase() } );
  return matchingDrivers;
}

findMatching(drivers, string);
