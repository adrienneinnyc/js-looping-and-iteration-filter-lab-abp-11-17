function findMatching (drivers, string) {
  drivers.filter( function (driver) { return driver.toLowercase === `${string.toLowercase}` } );
}
