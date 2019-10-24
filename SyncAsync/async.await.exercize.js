// async function getInfo() {
//   const customer = await getCustomer(1);
//   const movie = await getTopMovies(customer.name);
//   const email = await sendEmail(movie.emailID);
//   console.log(email);
// }
// getInfo();

(async function() {
  const customer = await getCustomer(1);
  console.log("Customer: ", customer);
  if (customer.isGold) {
    const topMovies = await getTopMovies();
    console.log("Top movies: ", topMovies);
    await sendEmail(customer.email, topMovies);
    console.log("Email sent...");

// function getCustomer(id) {
//   console.log("Customer 를 찾는중 입니다...");
//   const customers = [
//     { id: 1, name: "Mosh Hamedani", isGold: true, email: "email" }
//   ];
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const customer = customers.find(customer => customer.id === id);
//       if (customer) resolve(customer);
//       else reject(new Error("Customer 를 찾을 수 없네요"));
//     }, 1000);
//   });
// }
function getCustomer(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 2000);
  });
}

// function getTopMovies(movieID) {
//   console.log("Movie를 찾는중 입니다....");
//   const movies = [
//     { content: "movie1", movieID: 1 },
//     { content: "movie2", movieID: 2 }
//   ];
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const movie = movies.find(movie => movie.movieID === movieID);
//       if (movie) resolve(movie);
//       else reject(new Error("Movie 를 찾을 수 없네요"));
//     }, 1000);
//   });
// }
function getTopMovies() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 2000);
  });
}

// function sendEmail(emailID) {
//   console.log("Email 를 보내는중입니다...");
//   const emails = [{ name: "email", emailID: 1 }, { name: "email", emailID: 2 }];
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const email = emails.find(email => email.name === emailID);
//       if (email) resolve(email);
//       else reject(new Error("Email 를 찾을 수 없네요"));
//     }, 1000);
//   });
// }

function sendEmail(email, movies) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}