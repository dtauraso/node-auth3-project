const bcrypt = require('bcryptjs');

// bcrypt.hashSync(user.password, 10)
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1,
          username : "samwise",
          password	: bcrypt.hashSync("gamgee", 10),
          departments: "gardener"
        },
        {id: 2,
          username : "dandalf",
          password	: bcrypt.hashSync("beloc", 10),
          departments: "white wizard"},
      ]);
    });
};