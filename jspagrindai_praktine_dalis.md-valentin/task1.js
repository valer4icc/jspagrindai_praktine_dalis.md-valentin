function hasNumber(str) {
  return /\d/.test(str);
}

function transformUsernamesToObjects(usernames) {
  const detailedUsers = usernames.map((username) => {
    return {
      original: username,
      lower: username.toLowerCase(),
      length: username.length,
      hasNumber: hasNumber(username),
    };
  });

  return detailedUsers;
}

const usernames = ["alice_01", "Bob99", "charlie_dev", "DANA", "eve-test"];
const detailedUserList = transformUsernamesToObjects(usernames);
console.log(detailedUserList);
