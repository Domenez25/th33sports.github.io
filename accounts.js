var users = {
    teamFaker: {
        lastName: 'lee', 
        firstName: 'sang-heyok',
        password: 'teams',
        pfp: '/pfp/1.jpg', 
        admin: true ,
        bio: 'esports member since childhood',
        email: 'skt1faker@teams.com',
        theme: 'default',
        balance: 50.00
    },
    
    teamCaps: {
        lastName: 'martin', 
        firstName: 'Sundelin',
        password: 'teams',
        pfp: '/pfp/2.png', 
        admin: true,
        bio: 'lol player',
        email: 'g2caps@teams.com',
        theme: 'default',
        balance: 50.00
    },

    teamTalon: {
        lastName: 'thiago', 
        firstName: 'sartori',
        password: 'teams',
        pfp: '/pfp/3.png', 
        admin: true,
        bio: 'best akali in the world',
        email: 'psgtalon@teams.com',
        theme: 'default',
        balance: 50.00
    },

    domenez25: {
        lastName: 'zakaria', 
        firstName: 'Bouzara',
        password: 'teams',
        pfp: '/pfp/8.jpg', 
        admin: true,
        bio: 'I just like to watch some streams',
        email: 'bouzara.zakaria.25@gmail.com',
        theme: 'green',
        balance: 30.00
    },

    evilishie: {
        lastName: 'raid', 
        firstName: 'baroud',
        password: 'teams',
        pfp: '/pfp/5.jpeg', 
        admin: false,
        bio: 'a brawlhalla star',
        email: 'raidbarouu@email.com',
        theme: 'default',
        balance: 30.00
    },

    skybeam: {
        lastName: 'tarek', 
        firstName: 'bouzara',
        password: 'teams',
        pfp: '/pfp/6.png', 
        admin: false,
        bio: 'jungler number one in euw',
        email: 'skybeaams@hotmai.com',
        theme: 'default',
        balance: 30.00
    },

    bilimachivia: {
        lastName: 'anes', 
        firstName: 'mecif',
        password: 'teams',
        pfp: '/pfp/7.jpg', 
        admin: false,
        bio: 'mf my fav champ',
        email: 'rikos@teams.com',
        theme: 'default',
        balance: 30.00
    },

    estarossa: {
        lastName: 'abdellah', 
        firstName: 'khelifa',
        password: 'teams',
        pfp: '/pfp/8.jpg', 
        admin: false,
        bio: 'still gold but can carry your games',
        email: 'rozan@gmail.com',
        theme: 'default',
        balance: 30.00
    },
    
    rikuy: {
        lastName: 'dahmen', 
        firstName: 'merzoug',
        password: 'teams',
        pfp: '/pfp/9.png', 
        admin: false,
        bio: 'not falling asleep yet, still paying overwatch',
        email: 'dahouriku@patron.com',
        theme: 'default',
        balance: 30.00
    }
};

for (let key in users) {
      localStorage.setItem(key, JSON.stringify(users[key]));
  }