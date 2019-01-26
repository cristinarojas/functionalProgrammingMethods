const endorsements = [
  { skill: 'css', user: 'Bill ' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

const getSkills = (endorsements) => {
  const elements = endorsements.reduce((acc, endorsement) => {
    //  Return only the positions that fit with this validation.
    // [].findIndex(element => ) -> -1
    const findIndex = acc.findIndex(element => element.skill === endorsement.skill);
    // -1
    // -1
    // 1
    // 0
    // 1
    // -1

    // First time
    if (findIndex === -1) {
      endorsement.count = 1;
      endorsement.user = [endorsement.user];
      acc.push(endorsement);
    } else {
      acc[findIndex].user.push(endorsement.user);
      acc[findIndex].count += 1;
    }

    return acc;
  }, []);

  return elements;
}

console.log(getSkills(endorsements));

// Result
/*
[
 { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
 { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
 { skill: 'html', user: ['Sue'], count: 1 }
]; } */
// see this image: http://i.imgur.com/UIeB3n4.png
