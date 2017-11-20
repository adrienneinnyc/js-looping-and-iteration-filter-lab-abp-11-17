function findMatching (drivers, string) {
  drivers.filter( function(driver) { return driver === string } );
}

findMatching(drivers, string);
