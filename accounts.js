const image = new image(300, 300)

var users = {
    teamFaker: {
        lastName: 'lee', 
        firstName: 'sang-heyok',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: true ,
        bio: 'esports member since childhood',
        email: 'skt1faker@teams.com',
        theme: 'themes/default.css'
    },
    
    teamCaps: {
        lastName: 'martin', 
        firstName: 'Sundelin',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: true,
        bio: 'lol player',
        email: 'g2caps@teams.com',
        theme: 'themes/default.css'
    },

    teamTalon: {
        lastName: 'thiago', 
        firstName: 'sartori',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: true,
        bio: 'best akali in the world',
        email: 'psgtalon@teams.com',
        theme: 'themes/default.css'
    },

    domenez25: {
        lastName: 'zakaria', 
        firstName: 'Bouzara',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: false,
        bio: 'I just like to watch some streams',
        email: 'bouzara.zakaria.25@gmail.com',
        theme: 'themes/default.css'
    },

    evilishie: {
        lastName: 'raid', 
        firstName: 'baroud',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: false,
        bio: 'a brawlhalla star',
        email: 'raidbarouu@email.com',
        theme: 'themes/default.css'
    },

    skybeam: {
        lastName: 'tarek', 
        firstName: 'bouzara',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: false,
        bio: 'jungler number one in euw',
        email: 'skybeaams@hotmai.com',
        theme: 'themes/default.css'
    },

    bilimachivia: {
        lastName: 'anes', 
        firstName: 'mecif',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: false,
        bio: 'mf my fav champ',
        email: 'rikos@teams.com',
        theme: 'themes/default.css'
    },

    estarossa: {
        lastName: 'abdellah', 
        firstName: 'khelifa',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: false,
        bio: 'still gold but can carry your games',
        email: 'rozan@gmail.com',
        theme: 'themes/default.css'
    },
    
    rikuy: {
        lastName: 'dahmen', 
        firstName: 'merzoug',
        password: 'teams',
        pfp: 'example_pfp_url', 
        admin: false,
        bio: 'not falling asleep yet, still paying overwatch',
        email: 'dahouriku@patron.com',
        theme: 'themes/default.css'
    }
};

for (let key in users) {
      localStorage.setItem(key, JSON.stringify(users[key]));
  }