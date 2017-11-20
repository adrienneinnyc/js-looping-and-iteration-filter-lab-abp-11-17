function findMatching (drivers, string) {
  drivers.filter( function (driver, string) { return driver.toLowercase === string.toLowercase } );
}
