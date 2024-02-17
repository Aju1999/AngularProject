export class Person{
    id:number;
    name: string;
    city: string;
    email: string;
    mobile: string;
    username: string;
    password: string;
    roles: string ;
    role: string ;
    
    
    public constructor(){
        this.id=0;
        this.name ="";
        this.city ="";
        this.email ="";
        this.mobile ="";
        this.username ="";
        this.password ="";
        this.roles ="";
        this.role="" ;
    
    }

}

export class loginRequest{

    username: string;
    password: string;
    
    public constructor(){
        this.username ="";
        this.password ="";
    }
}