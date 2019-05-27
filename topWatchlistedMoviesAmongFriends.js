// 1. Implement topWatchlistedMoviesAmongFriends method that will return an array of top four movie titles,
//  that have been most watchlisted by friends of a given user.

// 2. Movies that have equal watchlist count, should be ordered alphabetically.

// E.g. topWatchlistedMoviesAmongFriends(62289), should return:

// ["Schindler's List", "Pulp Fiction", "The Dark Knight", "The Shawshank Redemption"]
// In the example above, user with id 62289 has two friends: user with id=15291 and with id=7001.
// Schindler's List is watchlisted by both users, so it will be the most watchlisted.

// E.g. topWatchlistedMoviesAmongFriends(15291), should return:
// ["The Dark Knight", "Schindler's List", "The Shawshank Redemption", "Pulp Fiction"]

// In the example above, user with id 15291 has three friends: users with id=7001, id=51417 and id=62289.
// The Dark Knight is the most watched. Schindler's and Shawshank have both been watched twice, so will be in alphabetical order.
// Pulp Fiction and The Godfather have both been watched once, but Pulp fiction comes earlier alphabetically ("P.." vs "T.."),
// so it makes the top 4.

let movies = [
  {
    title: "The Shawshank Redemption",
    duration: "PT142M",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    ratings: [],
    watchlist: [15291, 51417, 62289, 6146, 71389, 93707]
  },
  {
    title: "The Godfather",
    duration: "PT175M",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    ratings: [],
    watchlist: [62289, 66380, 34139, 6146]
  },
  {
    title: "The Dark Knight",
    duration: "PT152M",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    ratings: [],
    watchlist: [51417, 62289, 6146, 71389, 7001]
  },
  {
    title: "Pulp Fiction",
    duration: "PT154M",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    ratings: [],
    watchlist: [7001, 9250, 34139, 6146]
  },
  {
    title: "Schindler's List",
    duration: "PT195M",
    actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    watchlist: [15291, 51417, 7001, 9250, 93707]
  }
];

let users = [
  {
    userId: 15291,
    email: "Constantin_Kuhlman15@yahoo.com",
    friends: [7001, 51417, 62289]
  },
  {
    userId: 7001,
    email: "Keven6@gmail.com",
    friends: [15291, 51417, 62289, 66380]
  },
  {
    userId: 51417,
    email: "Margaretta82@gmail.com",
    friends: [15291, 7001, 9250]
  },
  {
    userId: 62289,
    email: "Marquise.Borer@hotmail.com",
    friends: [15291, 7001]
  }
];

let movieCount = {};

const topWatchlistedMoviesAmongFriends = id => {
  //create an object with all the movies watched by all friends. the movies are total counted
  users.forEach(user => {
    if (user.userId == id) {
      user.friends.forEach(friendId => {
        movies.forEach(movie => {
          let movieTitle = movie.title;
          movie.watchlist.forEach(watchlistId => {
            if (watchlistId == friendId) {
              if (!movieCount[movieTitle]) {
                movieCount[movieTitle] = 1;
              } else {
                movieCount[movieTitle] += 1;
              }
            }
          });
        });
      });
    }
  });

  //convert the above object to an array of object with individual movie and the total count
  let totalMoviesArray = [];
  let keysArray = Object.keys(movieCount);
  let valuesArray = Object.values(movieCount);

  const length = keysArray.length;
  for (let i = 0; i < length; i++) {
    let obj = {
      title: keysArray[i],
      count: valuesArray[i]
    };
    totalMoviesArray.push(obj);
  }

  //sort the array by total count and in alphabetical order
  totalMoviesArray.sort((a, b) => {
    if (b.count != a.count) {
      return b.count - a.count;
    } else {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    }
  });

  //return only top 4 movies
  return totalMoviesArray.slice(0, 4);
};

console.log(topWatchlistedMoviesAmongFriends(7001));
//=>[ { title: 'The Shawshank Redemption', count: 3 },
// { title: 'Schindler\'s List', count: 2 },
// { title: 'The Dark Knight', count: 2 },
// { title: 'The Godfather', count: 2 } ]
