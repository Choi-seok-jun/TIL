console.log("코드시작");
const user = getUser(1);
//user을 찾아서, repo를 찾아서 , commit를 찾고싶어!!
const userCallback = getUserCallback(1, user => {
  console.log("유저를 찾고있어요...");
  getRepo(user.githubID, repo => {
    console.log("레포를 찾고있어요...");
    getCommits(repo.commitID, commit => {
      console.log("커밋을 찾고있어요...");
      console.log(commit);
    });
  });
});
console.log(user);
console.log("코드 끝");
const users = [{ id: 1, githubID: "bing" }, { id: 2, githubID: "kim" }];
function getUser(id) {
  //DB에 접속해서 유저를 찾는 함수

  let user;
  setTimeout(() => {
    user = users.find(user => user.id === id);
  }, 2000);
  return user;
}
function getUserCallback(id, callback) {
  setTimeout(() => {
    const user = users.find(user => user.id === id);
    callback(user);
  }, 2000);
}
function getRepo(githubID, callback) {
  const repos = [
    { githubID: "bing", commitsID: 1 },
    { githubID: "kim", commitsID: 2 }
  ];
  setTimeout(() => {
    const repo = repos.find(repo => repo.githubID === githubID);
    callback(repo);
  }, 2000);
}
function getCommits(commitID, callback) {
  const commits = [
    { commitsID: 1, contents: "안녕하세요" },
    { commitsID: 2, contents: "안녕하세요" }
  ];
  setTimeout(() => {
    const commit = commits.find(commit => commit.commitID === commitID);
    callback(commit);
  }, 2000);
}
