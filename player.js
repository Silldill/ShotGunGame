class Player
{
    constructor()
    {
        this.health = true;
        this.ammo = 1;
        this.UserChoose;   
    }

    

    choose(clicked)
    {
        if(clicked == "shotgun")
        {
            if(this.ammo > 2)
            {
                this.UserChoose = clicked;
                
                
            }

            else
            {
                this.UserChoose = "wrong";
            }
        }
        if(clicked == "shot")
        {
            if(this.ammo < 1)
            {
                this.UserChoose = "wrong";
            }

            else
            {
                this.UserChoose = "shot";
                
            }
        }
        if(clicked == "shield")
        {
            this.UserChoose = clicked;
        }
        if(clicked == "reload")
        {
            this.UserChoose = clicked;
        }

    }

    

}