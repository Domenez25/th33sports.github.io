const users = {
    teamFaker: {
        lastName: 'lee', 
        firstName: 'sang-heyok',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: true ,
        bio: 'esports member since childhood',
        email: 'skt1faker@teams.com'
        },
    
    teamCaps: {
        lastName: 'martin', 
        firstName: 'Sundelin',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: true,
        bio: 'lol player',
        email: 'g2caps@teams.com'
        },

    teamTalon: {
        lastName: 'thiago', 
        firstName: 'sartori',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: true,
        bio: 'best akali in the world',
        email: 'psgtalon@teams.com'
        },

    domenez25: {
        lastName: 'zakaria', 
        firstName: 'Bouzara',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: false,
        bio: 'I just like to watch some streams',
        email: 'bouzara.zakaria.25@gmail.com'
        },

    evilishie: {
        lastName: 'raid', 
        firstName: 'baroud',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: false,
        bio: 'a brawlhalla star',
        email: 'raidbarouu@email.com'
        },

    skybeam: {
        lastName: 'tarek', 
        firstName: 'bouzara',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: false,
        bio: 'jungler number one in euw',
        email: 'skybeaams@hotmai.com'
        },

    bilimachivia: {
        lastName: 'anes', 
        firstName: 'mecif',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: false,
        bio: 'mf my fav champ',
        email: 'rikos@teams.com'
        },

    estarossa: {
        lastName: 'abdellah', 
        firstName: 'khelifa',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: false,
        bio: 'still gold but can carry your games',
        email: 'rozan@gmail.com'
        },
    
    rikuy: {
        lastName: 'dahmen', 
        firstName: 'merzoug',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: false,
        bio: 'not falling asleep yet, still paying overwatch',
        email: 'dahouriku@patron.com'
        },
};

for (let key in users) {
    if (typeof users[key] === 'object') {
      localStorage.setItem(key, JSON.stringify(users[key]));
    }
  }