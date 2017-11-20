function findMatching (drivers, string) {
  const matchingDrivers = drivers.filter( function(driver) { return driver === string } );
  return matchingDrivers;
}

findMatching(drivers, string);
