
var player = new Player();
var enemy = new Enemy();
let rounds = 1;

$(function()
{
    $("#restart").click(function()
    {
        $("#main").show();
        $("#finnish").hide();
    })
})
$(function()
{
    $("#menubtn").click(function()
    {
        $("#menu").show();
        $("#finnish").hide();
    })
})


$(function()
{
    $("body").ready(function(){
        $("#main").hide();
        $("#finnish").hide();
    });

});

$(function(){
    $("#start").click(function()
        {
            $("#menu").hide();
            $("#main").show();
            SetGif("fight", "fight");

        });

});


function Game(clicked_id)
{
    player.choose(clicked_id);
    
    if(player.UserChoose == "wrong")
    {
        alert("You don't have enough ammo");
        return;
    }
    enemy.choose(player.ammo);
    // console.log("Win: " +enemy.health);
    // console.log("Win: " +player.health);;
    GameLogic();
    SetGif(player.UserChoose, enemy.CompChoose);
    BulletText();

    if(enemy.health != true)
    {
        Win("You", player.UserChoose);
    }

    if(player.health != true)
    {
        Win("Enemy", enemy.CompChoose);
    }

}


function GameLogic()
{
    let user = player.UserChoose;
    let comp = enemy.CompChoose;

    if(user == "shotgun" && comp == "shotgun")
    {
        alert("Both shotgun");
        player.ammo -= 3;
        enemy.ammo -= 3;
    }

    if((user == "shotgun" && comp == "shot") || (user == "shotgun" && comp == "shield") || (user == "shotgun" && comp == "reload"))
    {
        enemy.health = false;
    }
    if((comp == "shotgun" && user == "shot") || (comp == "shotgun" && user == "shield") || (comp == "shotgun" && user == "reload"))
    {
        player.health = false ;
    }

    if(user == "shot" && comp == "shot")
    {
        player.ammo--;
        enemy.ammo--;
    }

    if(user == "shield" && comp == "shot")
    {
        enemy.ammo--;
    }
    if(comp == "shield" && user == "shot")
    {
        player.ammo--;
        
    }
    if(user == "reload" && comp == "shot")
    {
        player.health = false;
    }
    if(comp == "reload" && user == "shot")
    {
        enemy.health = false;
    }
    if(comp == "reload" && user == "shield")
    {
        enemy.ammo++;
    }
    if(user == "reload" && comp == "shield")
    {
        player.ammo += 1;
    }
    if(user == "reload" && comp == "reload")
    {
        player.ammo++;
        enemy.ammo++;
    }
    console.log("USER CHOOSED :" + user);
    console.log("ENEMY CHOOSED :" + comp);

    rounds++;
    
    
}


function BulletText()
{
    console.log("heej");
    document.getElementById("UserBullets").innerHTML = "Bullets: " + player.ammo;
    document.getElementById("CompBullets").innerHTML = "Bullets: " + enemy.ammo;
    document.getElementById("Rounds").innerHTML = "Round: " + rounds;

}

function SetGif(choose1, choose2)
{
    var a = document.getElementById("gifuser");
    var b = document.getElementById("gifcomp");
    if(choose1 == "shield")
    {
        a.src = "shield.gif";
        a.style.width = "300px";
        a.style.height = "auto";
    }
    if(choose1 == "shot")
    {
        a.src = "shot.gif";
        a.style.width = "250px";
        a.style.height = "auto";
    }
    if(choose1 == "reload")
    {
        a.src = "reload.gif";
        a.style.width = "150px";
        a.style.height = "auto";
    }
    if(choose2 == "shield")
    {
        b.src = "shield.gif";
        b.style.transform = "scaleX(-1)";
        b.style.width = "300px";
        b.style.height = "auto";
    }
    if(choose2 == "shot")
    {
        b.src = "shot.gif";
        b.style.transform = "scaleX(-1)";
        b.style.width = "250px";
        b.style.height = "auto";
    }
    if(choose2 == "reload")
    {
        b.src = "reload.gif";
        b.style.transform = "scaleX(-1)";
        b.style.width = "150px";
        b.style.height = "auto";
    }
    if(choose2 == "fight" && choose1 == "fight")
    {
        b.src = "hand.png";
        a.src = "hand.png";
        
        b.style.width = "100px";
        a.style.width = "100px";
        a.style.height = "auto";
        b.style.height = "auto";

    }
    if(choose1 == "shotgun")
    {
        a.src = "shotgunshotgun.gif";
        a.style.transform = "scaleX(-1)";
        a.style.width = "250px";
        a.style.height = "auto";
    }
    if(choose2 == "shotgun")
    {
        b.src = "shotgunshotgun.gif";
        b.style.transform = "scaleX(-1)";
        b.style.width = "250px";
        b.style.height = "auto";
    }
   
}

function Win(Name, Choose)
{
    SetGif("fight", "fight");
    let round = rounds;
    $(function(){
            
        $("#finnish").show();
        $("#main").hide();
        document.getElementById("finnishtext").innerHTML = Name +" won with " + Choose +"! After " + round +" rounds.";
        if(player.health == true)
        {
            document.getElementById("finnishimg").src = "Win.gif";
        }
        else
        {
            document.getElementById("finnishimg").src = "Loss.gif";
        }
        player.ammo = 1;
    enemy.ammo = 1;
    enemy.health = true;
    player.health = true;
    rounds = 1;
    BulletText();
    console.log("Win: " +enemy.health);
    console.log("Win: " +player.health);
        
    });


}
