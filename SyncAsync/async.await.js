// async function getInfo() {
//   const user = await getUser(1);
//   const repo = await getRepo(user.githubID);
//   const commit = await getCommit(repo.commitID);
//   console.log(commit);
// }
// getInfo();
//IIFE = 함수를 만든다음에 즉시 실행하는 것 을 말한다
(async function() {
  const user = await getUser(1);
  const repo = await getRepo(user.githubID);
  const commit = await getCommit(repo.commitID);
  console.log(commit);
})();

function getUser(id) {
  console.log("유저를 찾고있습니다...");
  const users = [{ id: 1, githubID: "bing" }, { id: 2, githubID: "kim" }];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.id === id);
      if (user) resolve(user);
      else reject(new Error("유저를 찾을 수 없네요"));
    }, 1000);
  });
}

function getRepo(githubID) {
  console.log("Github 리포를 찾는 중입니다...");
  const repos = [
    { githubID: "bing", commitID: 1 },
    { githubID: "kim", commitID: 2 }
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const repo = repos.find(repo => repo.githubID === githubID);
      if (repo) resolve(repo);
      else reject(new Error("리포를 찾을수 없어요..."));
    }, 1000);
  });
}
function getCommit(commitID) {
  console.log("커밋을 찾는중입니다...");
  const commits = [
    { commitID: 1, content: "첫번째 커밋" },
    { commitID: 2, content: "두번째 커밋" }
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const commit = commits.find(commit => commit.commitID === commitID);
      if (commit) resolve(commit);
      else reject(new Error("커밋을 찾을수 없어요..."));
    }, 1000);
  });
}
