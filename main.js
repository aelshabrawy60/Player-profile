
class champion{
    constructor(icon, times){
        this.icon = icon
        this.times = times
    }
};

class games_state{
    constructor(minutes, apearcnce, goals, conversion, shooting){
        this.minutes = minutes
        this.apearcnce = apearcnce
        this.goals = goals
        this.conversion = conversion
        this.shooting = shooting
    }
}

class physical_state{
    constructor(height, weight, age){
        this.height = height
        this.weight = weight
        this.age = age
    }
}

class match{
    constructor(team1_name, team1_icon, team2_name, team2_icon, date, time, league){
        this.team1_name = team1_name
        this.team1_icon = team1_icon
        this.team2_name = team2_name
        this.team2_icon = team2_icon
        this.date = date
        this.time = time
        this.league = league
    }
}

class Player{
    constructor(name, country, country_icon, postion, image, club_icon, champions, clubs_history, games_states, physical_states, soon_matches, team_color, team_light, text, text_half, btn, text_second){
        this.name = name
        this.country = country
        this.country_icon = country_icon
        this.postion = postion
        this.image = image
        this.club_icon = club_icon
        this.champions = champions
        this.games_states = games_states
        this.physical_states = physical_states
        this.soon_matches = soon_matches
        this.clubs_history = clubs_history
        this.team_color = team_color
        this.team_light = team_light
        this.text = text
        this.text_half = text_half
        this.btn = btn
        this.text_second = text_second
    }
    render(){
        document.getElementById('player_name').innerHTML = this.name
        document.getElementById('country_name').innerHTML = this.country
        document.getElementById('country_icon').src = this.country_icon
        document.getElementById('postion').innerHTML = this.postion
        document.getElementById('main_photo').src = this.image
        document.getElementById('team_image').src = this.club_icon
        
        let html= ``
        for(let i =0; i<this.champions.length; i++){
            html += `
            <div class="champ">
                <img src="${this.champions[i].icon}">
                <div class="num"> <p>${this.champions[i].times}</p></div>
            </div>
            `
        }
        document.getElementById('champs').innerHTML = html

        html =``

        for(let i =0; i<this.clubs_history.length; i++){
            html += `
            <div class="champ">
                <img src="${this.clubs_history[i]}">
            </div>
            `
        }
        document.getElementById('clubs_history').innerHTML = html

        document.getElementById('minutes').innerHTML = this.games_states.minutes
        document.getElementById('apperance').innerHTML = this.games_states.apearcnce
        document.getElementById('goals').innerHTML = this.games_states.goals
        progress_bars(this.games_states.conversion, this.games_states.shooting)

        document.getElementById('height').innerHTML = this.physical_states.height + `<p class="fs-3 m-0 ms-1">m</p>`
        document.getElementById('weight').innerHTML = this.physical_states.weight + `<p class="fs-4 m-0 ms-1">kg</p>`
        document.getElementById('age').innerHTML = this.physical_states.age

        document.documentElement.style.setProperty('--team', this.team_color);
        console.log(this.team_color)
        document.documentElement.style.setProperty('--team-light', this.team_light);
        document.documentElement.style.setProperty('--text', this.text);
        document.documentElement.style.setProperty('--text_half', this.text_half);
        document.documentElement.style.setProperty('--btn', this.btn);
        document.documentElement.style.setProperty('--text_second', this.text_second);
    }
}



function progress_bars(conversion, shooting){
    const container = document.querySelector(".some_states");

    console.log(conversion)
    console.log(shooting)
    const states = [
    { states: "conversion", percent: conversion, color: "white" },
    { states: "Acurracy", percent: shooting, color: "white" },
    ];

    const progressGroups = document.querySelectorAll(".progess-group");

    progressGroups.forEach((progress, index) => {
    let progressStartValue = 0;
    let progressStartEnd = states[index].percent;
    let speed = 25;
    let progessTimer = setInterval(() => {
        progressStartValue++;
        if (progressStartValue == progressStartEnd) {
        clearInterval(progessTimer);
        }
        progress.querySelector(".circular-progress").style.background = `
        conic-gradient(${states[index].color} ${3.6 * progressStartValue}deg, ${getComputedStyle(document.documentElement).getPropertyValue('--text_second')} 0deg)`;

        progress.querySelector(".course-value").innerHTML = progressStartValue + "%";
    }, speed);
    });
}


current_index = 0

let players = []

let mbappe = new Player("Kylian Mbappé", "France", "Assets/france.png", "FORWARD", 
"Assets/Players/Mbappe-PNG-Pic.png", "Assets/psg-logo-png.png", [new champion("Assets/Champ/world_cup.png", 1), new champion("Assets/Champ/player_of_the_year.png", 3), new champion("Assets/Champ/top_scorer.png", 10), new champion("Assets/Champ/French.png", 6)],
[], new games_state(3544, 419, 310, 21, 50), new physical_state(1.78, 75, 25), [], "rgba(9,9,77,1)", "rgba(27,45,134,1)", "white", "rgba(255, 255, 255, 0.699)", "#1025be", "rgba(182, 182, 182, 0.13)")

let ronaldo = new Player("Cristiano Ronaldo", "Portugal", "Assets/countries/flag.png", "FORWARD", 
"Assets/Players/Cristiano Ronaldo - FootyRenders.png", "Assets/teams/Alnasser.png", [new champion("Assets/Champ/world_cup.png", 1), new champion("Assets/Champ/player_of_the_year.png", 3), new champion("Assets/Champ/top_scorer.png", 10), new champion("Assets\Champ\French.png", 6)],
["Assets/teams/Sporting_CP.png", "Assets/teams/Manchester_United_FC.png" ,"Assets/teams/real.png", "Assets/teams/Juventus_FC_2017_logo.png", "Assets/teams/Manchester_United_FC.png","Assets/teams/Alnasser.png"], 
new games_state(98023, 1204, 873, 12 ,38), new physical_state(1.87, 83, 38), [], "#750d0d", "#bf3333", "white", "rgba(255, 255, 255, 0.699)", "red", "rgba(182, 182, 182, 0.13)")

let messi = new Player("Lionel Messi", "Argentina", "Assets/countries/argentina.png", "FORWARD", 
"Assets/Players/Lionel Messi - FootyRenders.png", "Assets/teams/inter-miami.png", [new champion("Assets/Champ/world_cup.png", 1), new champion("Assets/Champ/player_of_the_year.png", 3), new champion("Assets/Champ/top_scorer.png", 10), new champion("Assets\Champ\French.png", 6)],
["Assets/teams/FC_Barcelona.png", "Assets/teams/inter-miami.png"], new games_state(86013, 1047, 821, 15, 44), new physical_state(1.69, 67, 36), [], "#123b4e", "#2c7da3", "white", "rgba(255, 255, 255, 0.699)", "#0a5476", "rgba(182, 182, 182, 0.13)")

let dejong = new Player("Frenkie de Jong", "Netherlands", "Assets/countries/netherlands.png", "CENTER MIDFIELDER", 
"Assets/Players/Frenkie-de Jong .png", "Assets/teams/FC_Barcelona.png", [new champion("Assets/Champ/world_cup.png", 1), new champion("Assets/Champ/player_of_the_year.png", 3), new champion("Assets/Champ/top_scorer.png", 10), new champion("Assets/Champ/French.png", 6)],
["Assets/teams/Willem_II_logo.svg.png", "Assets/teams/Ajax_Amsterdam.svg.png", "Assets/teams/FC_Barcelona.png"], new games_state(19641, 250, 36, 23, 68), new physical_state(1.81, 68, 26), [], "rgba(9,9,77,1)", "rgba(27,45,134,1)", "white", "rgba(255, 255, 255, 0.699)", "#1025be", "rgba(182, 182, 182, 0.13)")

players.push(dejong)
players.push(mbappe)
players.push(ronaldo)
players.push(messi)


players[0].render()

function left(){
    if(current_index > 0){
        current_index -=1
        players[current_index].render()
    }
}

function right(){
    if(current_index < players.length - 1){
        current_index +=1
        players[current_index].render()
    }
}