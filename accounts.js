const users = {
    teamFaker: {
        lastName: 'lee', 
        firstName: 'sang-heyok',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: true
        },
    
    teamCaps: {
        lastName: 'martin', 
        firstName: 'Sundelin',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: true
        },

    teamTalon: {
        lastName: 'thiago', 
        firstName: 'sartori',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: true
        },
};

for (let key in users) {
    if (typeof users[key] === 'object') {
      localStorage.setItem(key, JSON.stringify(users[key]));
    }
  }