const getAppraisal = (grade: any) => {
  const GRADE = {
    A: [90, 100],
    B: [75, 89],
    C: [60, 74],
    D: [40, 59],
    E: [0, 39],
  };

  if (typeof grade === 'number') {
    for (const [key, value] of Object.entries(GRADE)) {
      if (grade >= value[0] && grade <= value[1]) {
        return key;
      }
      if (grade < 0) {
        return 'why do you give a minus mark?';
      }
    }
  }
  if (grade === 'nana') {
    return 'A';
  };
  if (grade === true) {
    return 'expect a number > 0';
  };
  return 0;
};

exports.getAppraisal = getAppraisal;
