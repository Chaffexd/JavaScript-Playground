const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    }
    else if (day === 'tuesday') {
      return 6;
    }
    else if (day === 'wednesday') {
      return 8;
    }
    else if (day === 'thursday') {
      return 9;
    }
    else if (day === 'friday') {
      return 5;
    }
    else if (day === 'saturday') {
      return 12;
    }
    else if (day === 'sunday') {
      return 4;
    }
    else {
      return 'Error!';
    }
  };
  
  // this is just a test to ensure the else statements return any input
  console.log(getSleepHours('monday'.toLowerCase()));
  
  const getActualSleepHours = () => {
    return getSleepHours('monday')
    + getSleepHours('tuesday')
    + getSleepHours('wednesday')
    + getSleepHours('thursday')
    + getSleepHours('friday')
    + getSleepHours('saturday')
    + getSleepHours('sunday');
  };
  
  // logs the amount of hours slept in the week
  // console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  // should print the sum of all sleep hours in the week
  // console.log(getActualSleepHours());
  // // if idealHours is 8, should print 56
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect sleep!');
  }
    else if (actualSleepHours > idealSleepHours) {
    console.log('You got an additional' + (idealSleepHours - actualSleepHours) + 'hour(s) sleep. You got more sleep than you needed.')
  }
    else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than expected this week. You should get some more rest.')
  }
  };
  
  getActualSleepHours();
  calculateSleepDebt();
  
  