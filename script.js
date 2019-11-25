function startmenu()
{
    var x = document.getElementById("main");
    x.style.display = "block";
    console.log
    //     y.style.display = "block";
}

$(function()
{
    $("body").ready(function(){
        $("#main").hide();
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




let BulletUser = 1;
let BulletComp = 1;
let rounds = 0;
let arr = ["shield", "reload"];

function GameUser(clicked_id)
{
    
    if(clicked_id == "shot")
    {
        if(BulletUser < 1)
        {
            alert("You have no bullets");
        }

        else
        {
            Game(clicked_id);

        }
        
    }
    if(clicked_id == "shield")
    {
        Game(clicked_id); 
    }
    if(clicked_id == "reload")
    {
        Game(clicked_id);
    }

    if(clicked_id == "shotgun")
    {
        if(BulletUser > 2)
        {
            Game(clicked_id);
        }
        else
        {
            alert("Du har inte tillräckligt med kulor");
        }
        
    }
}

function GameComp()
{
    
    let i = Math.floor(Math.random() * 3) + 1;


    if(BulletComp > 2)
    {
        return "shotgun";
    }

    if(i == 1)
    {
        if(BulletComp > 0)
        {
        return "shot";
        }
        else
        {
         return arr[Math.floor(Math.random()* arr.length)];
        }
    }
    if(i == 2)
    {
        return "shield";
    }
    if(i == 3)
    {
        return "reload";
    }
}

// function Game(ChooseUser)
// {
//     let user = ChooseUser;
//     let comp = GameComp();

//     console.log("User " + user);
//     console.log("Comp " + comp);
//     if(user == "shotgun" && comp == "shotgun")
//     {
//         alert("Both shotgun");
//         BulletComp -= 3;
//         BulletUser -= 3;
//     }

//     if((user == "shotgun" && comp == "shot") || (user == "shotgun" && comp == "shield") || (user == "shotgun" && comp == "reload"))
//     {
//         Win("User", "Shotgun");
        
//     }
//     if((comp == "shotgun" && user == "shot") || (comp == "shotgun" && user == "shield") || (comp == "shotgun" && user == "reload"))
//     {
//         Win("Computer", "Shotgun");
//     }

//     if(user == "shot" && comp == "shot")
//     {
        
//         if(user == "shot")
//         {
//             BulletUser--;
//         }
//         if(comp == "shot")
//         {
//             BulletComp--;
//         }
//     }

//     if(user == "shield" && comp == "shot")
//     {
        
//         BulletComp--;
//     }
//     if(comp == "shield" && user == "shot")
//     {
        
//         BulletUser--;
//     }
//     if(user == "reload" && comp == "shot")
//     {
//         Win("Computer", "shot");
//     }
//     if(comp == "reload" && user == "shot")
//     {
//         Win("User", "shot");
//     }
//     if(comp == "reload" && user == "shield")
//     {
//         BulletComp++;
//     }
//     if(user == "reload" && comp == "shield")
//     {
//         BulletUser++;
//     }
//     if(user == "reload" && user == "reload")
//     {
//         BulletComp++;
//         BulletUser++;
//     }

//     rounds++;
//     BulletText();
//     SetGif(user, comp);
    
//     console.log("bulletuser: " + BulletUser)
//     console.log("bulletcomp: " + BulletComp);
    
// }

function BulletText()
{
    document.getElementById("UserBullets").innerHTML = "Bullets: " + BulletUser;
    document.getElementById("CompBullets").innerHTML = "Bullets: " + BulletComp;
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
   
}

function Win(Name, Choose)
{
    SetGif("fight", "fight");
    let round = rounds;
    $(function(){
            
        $("#menu").show();
        $("#main").hide();
        alert(Name +" won with " + Choose +"! After " + round +" rounds.");
    });
    BulletComp = 1;
    BulletUser = 1;
    rounds = 0;
   
}

function GameLogic()
{
    
    let user = player.UserChoose;
    let comp = enemy.CompChoose;
    console.log(user);
    console.log(typeof(user));

    if(user == "shotgun" && comp == "shotgun")
    {
        alert("both shotgun");
        player.ammo -= 3;
        enemy.ammo -= 3;
    }

    if(user == "shotgun" && comp != "shotgun")
    {
        enemy.health = false;
    }

    if(comp == "shotgun" && user != "shotgun")
    {
        user.health = false;
    }

    if(comp == "shot" && user == "shot")
    {
        enemy.ammo--;
        player.ammo--;
    }

    if(comp == "reload" && user == "reload")
    {
        enemy.ammo++;
        player.ammo++;
    }
    if(user == "shot" && comp == "shield")
    {
        player.ammo--;

    }
    
    if(comp == "shot" && user == "shield")
    {
        enemy.ammo--;
    }
    
    if(comp == "shot" && user == "reload")
    {
        enemy.health = false;
    }
    if(user = "shot" && comp == "reload")
    {
        player.health = false;
    }
    console.log("user choose :" + user);
    

    if(user == "reload" && comp == "shield")
    {
        player.ammo++;
    }
    if(comp == "reload" && user == "shield")
    {
        enemy.ammo++;
    }
    if(user == "shield" && comp == "reload")
    {
        enemy.ammo++;
    }
    if(comp == "shield" && user == "reload")
    {
        player.ammo++;
    }
    
    
}

