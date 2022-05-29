export var number = function(busStops) {
  let peopleInBus = 0;
  
  busStops.map((stop) => {
    peopleInBus += stop[0];
    peopleInBus -= stop[1];
  });
  
  return peopleInBus;
};
