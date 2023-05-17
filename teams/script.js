fetch('teams.json')
.then(response => response.json())
.then(data => {
    // first team
        const team1 = data.teams.team1;

        document.getElementById("biot1").textContent = team1.bio

        document.getElementById('username-t1-p1').value = team1.player1.username;
        document.getElementById('fullname-t1-p1').value = team1.player1.fullname;
        document.getElementById('nationality-t1-p1').value = team1.player1.nationality;
        document.getElementById('role-t1-p1').value = team1.player1.role;
        document.getElementById('birth-t1-p1').value = team1.player1.contract;
        
        document.getElementById('username-t1-p2').value = team1.player2.username;
        document.getElementById('fullname-t1-p2').value = team1.player2.fullname;
        document.getElementById('nationality-t1-p2').value = team1.player2.nationality;
        document.getElementById('role-t1-p2').value = team1.player2.role;
        document.getElementById('birth-t1-p2').value = team1.player2.contract;
        
        document.getElementById('username-t1-p3').value = team1.player3.username;
        document.getElementById('fullname-t1-p3').value = team1.player3.fullname;
        document.getElementById('nationality-t1-p3').value = team1.player3.nationality;
        document.getElementById('role-t1-p3').value = team1.player3.role;
        document.getElementById('birth-t1-p3').value = team1.player3.contract;
        
        document.getElementById('username-t1-p4').value = team1.player4.username;
        document.getElementById('fullname-t1-p4').value = team1.player4.fullname;
        document.getElementById('nationality-t1-p4').value = team1.player4.nationality;
        document.getElementById('role-t1-p4').value = team1.player4.role;
        document.getElementById('birth-t1-p4').value = team1.player4.contract;
        
        document.getElementById('username-t1-p5').value = team1.player5.username;
        document.getElementById('fullname-t1-p5').value = team1.player5.fullname;
        document.getElementById('nationality-t1-p5').value = team1.player5.nationality;
        document.getElementById('role-t1-p5').value = team1.player5.role;
        document.getElementById('birth-t1-p5').value = team1.player5.contract;

})
.catch(error => {
  console.error('Error fetching teams:', error);
});


        function updateTeam1() {
            const username1 = document.getElementById('username-t1-p1').value;
            const fullname1 = document.getElementById('fullname-t1-p1').value;
            const nationality1 = document.getElementById('nationality-t1-p1').value;
            const role1 = document.getElementById('role-t1-p1').value;
            const contract1 = document.getElementById('birth-t1-p1').value;

            const username2 = document.getElementById('username-t1-p2').value;
            const fullname2 = document.getElementById('fullname-t1-p2').value;
            const nationality2 = document.getElementById('nationality-t1-p2').value;
            const role2 = document.getElementById('role-t1-p2').value;
            const contract2 = document.getElementById('birth-t1-p2').value;

            const username3 = document.getElementById('username-t1-p3').value;
            const fullname3 = document.getElementById('fullname-t1-p3').value;
            const nationality3 = document.getElementById('nationality-t1-p3').value;
            const role3 = document.getElementById('role-t1-p3').value;
            const contract3 = document.getElementById('birth-t1-p3').value;

            const username4 = document.getElementById('username-t1-p4').value;
            const fullname4 = document.getElementById('fullname-t1-p4').value;
            const nationality4 = document.getElementById('nationality-t1-p4').value;
            const role4 = document.getElementById('role-t1-p4').value;
            const contract4 = document.getElementById('birth-t1-p4').value;

            const username5 = document.getElementById('username-t1-p5').value;
            const fullname5 = document.getElementById('fullname-t1-p5').value;
            const nationality5 = document.getElementById('nationality-t1-p5').value;
            const role5 = document.getElementById('role-t1-p5').value;
            const contract5 = document.getElementById('birth-t1-p5').value;

            
            fetch('teams.json')
                .then(response => response.json())
                .then(data => {
                    
                    if (data.team1) {
                        if (data.team1.player1) {
                            data.team1.player1.username = username1 
                            data.team1.player1.fullname = fullname1 
                            data.team1.player1.nationality = nationality1 
                            data.team1.player1.role = role1 
                            data.team1.player1.contract = contract1 
                        }

                        if (data.team1.player2) {
                            data.team1.player2.username = username2 
                            data.team1.player2.fullname = fullname2 
                            data.team1.player2.nationality = nationality2 
                            data.team1.player2.role = role2 
                            data.team1.player2.contract = contract2 
                        }

                        if (data.team1.player3){
                            data.team1.player3.username = username3 
                            data.team1.player3.fullname = fullname3 
                            data.team1.player3.nationality = nationality3 
                            data.team1.player3.role = role3 
                            data.team1.player3.contract = contract3 
                        }
                        
                        if (data.team1.player4) {
                            data.team1.player3.username = username3 
                            data.team1.player3.fullname = fullname3 
                            data.team1.player3.nationality = nationality3 
                            data.team1.player3.role = role3 
                            data.team1.player3.contract = contract3 
                        }

                        if (data.team1.player5) {
                            data.team1.player5.username = username5 
                            data.team1.player5.fullname = fullname5 
                            data.team1.player5.nationality = nationality5 
                            data.team1.player5.role = role5 
                            data.team1.player5.contract = contract5 
                    }}
                const jsonString = JSON.stringify(data, null, 2);
                const blob = new Blob([jsonString], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'teams.json';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                });
        }


fetch('teams.json')
.then(response => response.json())
.then(data => {
    // second team
    const team2 = data.teams.team2;
    console.log(team2)
    console.log(team2.player1)

    document.getElementById("biot2").textContent = team2.bio

    document.getElementById('username-t2-p1').value = team2.player1.username;
    document.getElementById('fullname-t2-p1').value = team2.player1.fullname;
    document.getElementById('nationality-t2-p1').value = team2.player1.nationality;
    document.getElementById('role-t2-p1').value = team2.player1.role;
    document.getElementById('birth-t2-p1').value = team2.player1.contract;
    
    document.getElementById('username-t2-p2').value = team2.player2.username;
    document.getElementById('fullname-t2-p2').value = team2.player2.fullname;
    document.getElementById('nationality-t2-p2').value = team2.player2.nationality;
    document.getElementById('role-t2-p2').value = team2.player2.role;
    document.getElementById('birth-t2-p2').value = team2.player2.contract;
    
    document.getElementById('username-t2-p3').value = team2.player3.username;
    document.getElementById('fullname-t2-p3').value = team2.player3.fullname;
    document.getElementById('nationality-t2-p3').value = team2.player3.nationality;
    document.getElementById('role-t2-p3').value = team2.player3.role;
    document.getElementById('birth-t2-p3').value = team2.player3.contract;
    
    document.getElementById('username-t2-p4').value = team2.player4.username;
    document.getElementById('fullname-t2-p4').value = team2.player4.fullname;
    document.getElementById('nationality-t2-p4').value = team2.player4.nationality;
    document.getElementById('role-t2-p4').value = team2.player4.role;
    document.getElementById('birth-t2-p4').value = team2.player4.contract;
    
    document.getElementById('username-t2-p5').value = team2.player5.username;
    document.getElementById('fullname-t2-p5').value = team2.player5.fullname;
    document.getElementById('nationality-t2-p5').value = team2.player5.nationality;
    document.getElementById('role-t2-p5').value = team2.player5.role;
    document.getElementById('birth-t2-p5').value = team2.player5.contract;
})
.catch(error => {
    console.error('Error fetching teams:', error);
    });


        function updateTeam2() {
            const username1 = document.getElementById('username-t2-p1').value;
            const fullname1 = document.getElementById('fullname-t2-p1').value;
            const nationality1 = document.getElementById('nationality-t2-p1').value;
            const role1 = document.getElementById('role-t2-p1').value;
            const contract1 = document.getElementById('birth-t2-p1').value;

            const username2 = document.getElementById('username-t2-p2').value;
            const fullname2 = document.getElementById('fullname-t2-p2').value;
            const nationality2 = document.getElementById('nationality-t2-p2').value;
            const role2 = document.getElementById('role-t2-p2').value;
            const contract2 = document.getElementById('birth-t2-p2').value;

            const username3 = document.getElementById('username-t2-p3').value;
            const fullname3 = document.getElementById('fullname-t2-p3').value;
            const nationality3 = document.getElementById('nationality-t2-p3').value;
            const role3 = document.getElementById('role-t2-p3').value;
            const contract3 = document.getElementById('birth-t2-p3').value;

            const username4 = document.getElementById('username-t2-p4').value;
            const fullname4 = document.getElementById('fullname-t2-p4').value;
            const nationality4 = document.getElementById('nationality-t2-p4').value;
            const role4 = document.getElementById('role-t2-p4').value;
            const contract4 = document.getElementById('birth-t2-p4').value;

            const username5 = document.getElementById('username-t2-p5').value;
            const fullname5 = document.getElementById('fullname-t2-p5').value;
            const nationality5 = document.getElementById('nationality-t2-p5').value;
            const role5 = document.getElementById('role-t2-p5').value;
            const contract5 = document.getElementById('birth-t2-p5').value;

            
            fetch('teams.json')
                .then(response => response.json())
                .then(data => {
                    
                    if (data.team2) {
                        if (data.team2.player1) {
                            data.team2.player1.username = username1 
                            data.team2.player1.fullname = fullname1 
                            data.team2.player1.nationality = nationality1 
                            data.team2.player1.role = role1 
                            data.team2.player1.contract = contract1 
                        }

                        if (data.team2.player2) {
                            data.team2.player2.username = username2 
                            data.team2.player2.fullname = fullname2 
                            data.team2.player2.nationality = nationality2 
                            data.team2.player2.role = role2 
                            data.team2.player2.contract = contract2 
                        }

                        if (data.team2.player3){
                            data.team2.player3.username = username3 
                            data.team2.player3.fullname = fullname3 
                            data.team2.player3.nationality = nationality3 
                            data.team2.player3.role = role3 
                            data.team2.player3.contract = contract3 
                        }
                        
                        if (data.team2.player4) {
                            data.team2.player3.username = username3 
                            data.team2.player3.fullname = fullname3 
                            data.team2.player3.nationality = nationality3 
                            data.team2.player3.role = role3 
                            data.team2.player3.contract = contract3 
                        }

                        if (data.team2.player5) {
                            data.team2.player5.username = username5 
                            data.team2.player5.fullname = fullname5 
                            data.team2.player5.nationality = nationality5 
                            data.team2.player5.role = role5 
                            data.team2.player5.contract = contract5 
                    }}
                const jsonString = JSON.stringify(data, null, 2);
                const blob = new Blob([jsonString], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'teams.json';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                });
        }



fetch('teams.json')
.then(response => response.json())
.then(data => {
        // third team
        const team3 = data.teams.team3;

        document.getElementById("bio").textContent = team3.bio

        document.getElementById('username-t3-p1').value = team3.player1.username;
        document.getElementById('fullname-t3-p1').value = team3.player1.fullname;
        document.getElementById('nationality-t3-p1').value = team3.player1.nationality;
        document.getElementById('role-t3-p1').value = team3.player1.role;
        document.getElementById('birth-t3-p1').value = team3.player1.contract;
        
        document.getElementById('username-t3-p2').value = team3.player2.username;
        document.getElementById('fullname-t3-p2').value = team3.player2.fullname;
        document.getElementById('nationality-t3-p2').value = team3.player2.nationality;
        document.getElementById('role-t3-p2').value = team3.player2.role;
        document.getElementById('birth-t3-p2').value = team3.player2.contract;
        
        document.getElementById('username-t3-p3').value = team3.player3.username;
        document.getElementById('fullname-t3-p3').value = team3.player3.fullname;
        document.getElementById('nationality-t3-p3').value = team3.player3.nationality;
        document.getElementById('role-t3-p3').value = team3.player3.role;
        document.getElementById('birth-t3-p3').value = team3.player3.contract;
        
        document.getElementById('username-t3-p4').value = team3.player4.username;
        document.getElementById('fullname-t3-p4').value = team3.player4.fullname;
        document.getElementById('nationality-t3-p4').value = team3.player4.nationality;
        document.getElementById('role-t3-p4').value = team3.player4.role;
        document.getElementById('birth-t3-p4').value = team3.player4.contract;
        
        document.getElementById('username-t3-p5').value = team3.player5.username;
        document.getElementById('fullname-t3-p5').value = team3.player5.fullname;
        document.getElementById('nationality-t3-p5').value = team3.player5.nationality;
        document.getElementById('role-t3-p5').value = team3.player5.role;
        document.getElementById('birth-t3-p5').value = team3.player5.contract;
})
.catch(error => {
    console.error('Error fetching teams:', error);
    });


        function updateTeam3() {
            const username1 = document.getElementById('username-t3-p1').value;
            const fullname1 = document.getElementById('fullname-t3-p1').value;
            const nationality1 = document.getElementById('nationality-t3-p1').value;
            const role1 = document.getElementById('role-t3-p1').value;
            const contract1 = document.getElementById('birth-t3-p1').value;

            const username2 = document.getElementById('username-t3-p2').value;
            const fullname2 = document.getElementById('fullname-t3-p2').value;
            const nationality2 = document.getElementById('nationality-t3-p2').value;
            const role2 = document.getElementById('role-t3-p2').value;
            const contract2 = document.getElementById('birth-t3-p2').value;

            const username3 = document.getElementById('username-t3-p3').value;
            const fullname3 = document.getElementById('fullname-t3-p3').value;
            const nationality3 = document.getElementById('nationality-t3-p3').value;
            const role3 = document.getElementById('role-t3-p3').value;
            const contract3 = document.getElementById('birth-t3-p3').value;

            const username4 = document.getElementById('username-t3-p4').value;
            const fullname4 = document.getElementById('fullname-t3-p4').value;
            const nationality4 = document.getElementById('nationality-t3-p4').value;
            const role4 = document.getElementById('role-t3-p4').value;
            const contract4 = document.getElementById('birth-t3-p4').value;

            const username5 = document.getElementById('username-t3-p5').value;
            const fullname5 = document.getElementById('fullname-t3-p5').value;
            const nationality5 = document.getElementById('nationality-t3-p5').value;
            const role5 = document.getElementById('role-t3-p5').value;
            const contract5 = document.getElementById('birth-t3-p5').value;

            
            fetch('teams.json')
                .then(response => response.json())
                .then(data => {
                    
                    if (data.team3) {
                        if (data.team3.player1) {
                            data.team3.player1.username = username1 
                            data.team3.player1.fullname = fullname1 
                            data.team3.player1.nationality = nationality1 
                            data.team3.player1.role = role1 
                            data.team3.player1.contract = contract3 
                        }

                        if (data.team3.player2) {
                            data.team3.player2.username = username2 
                            data.team3.player2.fullname = fullname2 
                            data.team3.player2.nationality = nationality2 
                            data.team3.player2.role = role2 
                            data.team3.player2.contract = contract2 
                        }

                        if (data.team3.player3){
                            data.team3.player3.username = username3 
                            data.team3.player3.fullname = fullname3 
                            data.team3.player3.nationality = nationality3 
                            data.team3.player3.role = role3 
                            data.team3.player3.contract = contract3 
                        }
                        
                        if (data.team3.player4) {
                            data.team3.player3.username = username3 
                            data.team3.player3.fullname = fullname3 
                            data.team3.player3.nationality = nationality3 
                            data.team3.player3.role = role3 
                            data.team3.player3.contract = contract3 
                        }

                        if (data.team3.player5) {
                            data.team3.player5.username = username5 
                            data.team3.player5.fullname = fullname5 
                            data.team3.player5.nationality = nationality5 
                            data.team3.player5.role = role5 
                            data.team3.player5.contract = contract5 
                    }}

                const jsonString = JSON.stringify(data, null, 2);
                const blob = new Blob([jsonString], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'teams.json';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                });
        }