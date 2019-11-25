class Enemy
{
    constructor()
    {
        this.health = true;
        this.ammo = 1;
        this.CompChoose = "";
        
        
    }

    choose(playerammo)
    {

    
    let arr = ["shield", "reload"];
    let i = Math.floor(Math.random() * 3) + 1;


    if(this.ammo > 2)
    {
        this.CompChoose = "shotgun";
    }
    else
    {
    
    if(playerammo == 0 && this.ammo > 0)
    {
        this.CompChoose = "shot";
    }
    

    if(i == 1)
    {
        if(this.ammo > 0)
        {
        this.CompChoose = "shot";
        }
        else
        {
         this.CompChoose = arr[Math.floor(Math.random()* arr.length)];
        }
    }
    if(i == 2)
    {
        this.CompChoose = "shield";
    }
    if(i == 3)
    {
        this.CompChoose = "reload";
    }
    }
}
}