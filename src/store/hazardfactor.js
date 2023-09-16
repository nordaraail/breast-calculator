//export default
var nrOs = {
  baseline: {
    year5: 0.077757701,
    year10: 0.166344367
  },
  ageGroup: {
    lessThan40: 1,
    between40and50: 0.991,
    between50and60: 1.076,
    between60and70: 1.706,
    moreThan70: 3.821
  },
  positiveLn: {
    one: 1,
    two: 1.133,
    three: 1.512
  },
  ER: {
    negative: 1,
    positive: 0.657
  },
  PR: {
    negative: 1,
    positive: 0.848
  },
  hist: {
    duct: 1,
    lobular: 0.84
  },
  grade: {
    grade1: 1,
    grade2: 1.105,
    grade3: 1.298
  },
  tStage: {
    T1: 1,
    T2: 1.653,
    T3: 2.551
  }
}
var nrDfs = {
  baseline: {
    year5: 0.045496301,
    year10: 0.087788462
  },
  ageGroup: {
    lessThan40: 1,
    between40and50: 0.934,
    between50and60: 0.884,
    between60and70: 1.062,
    moreThan70: 1.593
  },
  positiveLn: {
    one: 1,
    two: 1.409,
    three: 1.834
  },
  ER: {
    negative: 1,
    positive: 0.644
  },
  PR: {
    negative: 1,
    positive: 0.732
  },
  hist: {
    duct: 1,
    lobular: 0.831
  },
  grade: {
    grade1: 1,
    grade2: 1.533,
    grade3: 2.210
  },
  tStage: {
    T1: 1,
    T2: 1.918,
    T3: 3.109
  }
}
var rDfs = {
  baseline: {
    year5: 0.056555433,
    year10: 0.112295911
  },
  ageGroup: {
    lessThan40: 1,
    between40and50: 0.851,
    between50and60: 0.846,
    between60and70: 1.002,
    moreThan70: 1.342
  },
  positiveLn: {
    one: 1,
    two: 1.007,
    three: 1.159
  },
  ER: {
    negative: 1,
    positive: 0.701
  },
  PR: {
    negative: 1,
    positive: 0.646
  },
  hist: {
    duct: 1,
    lobular: 0.702
  },
  grade: {
    grade1: 1,
    grade2: 1.803,
    grade3: 2.580
  },
  tStage: {
    T1: 1,
    T2: 1.778,
    T3: 1.941
  }
}
var rOs = {
  baseline: {
    year5: 0.10847259,
    year10: 0.225449878
  },
  ageGroup: {
    lessThan40: 1,
    between40and50: 0.843,
    between50and60: 0.900,
    between60and70: 1.160,
    moreThan70: 2.680
  },
  positiveLn: {
    one: 1,
    two: 1.041,
    three: 1.176
  },
  ER: {
    negative: 1,
    positive: 0.728
  },
  PR: {
    negative: 1,
    positive: 0.674
  },
  hist: {
    duct: 1,
    lobular: 0.773
  },
  grade: {
    grade1: 1,
    grade2: 1.165,
    grade3: 1.509
  },
  tStage: {
    T1: 1,
    T2: 1.462,
    T3: 1.637
  }
}
var factor={
    nrOs:nrOs,
    nrDfs:nrDfs,
    rOs:rOs,
    rDfs:rDfs
}
export default factor
