
export interface IUser
{
    identity: {
        email: string,
        phone: string
    }
    readonly role: string
    thumbnail?:string // ? suffix means thumbnail is optional
}

/*const loggedUer: IUser = {
    identity: {email: "kafka@mail.com", phone: "20X-0000404"},
    role: "junior_dev"
}*/


interface IUser{
    //...other props
    defIdentity():string;
}

class UserAccount implements IUser
{
    identity: { email: string; phone: string };
    role:string;

    constructor({identity, role}: IUser)
    {
        this.identity = identity;
        this.role = role;
    }
    defIdentity(): string {
        return 'email'
    }

}

// ambiguous TS example
const account:UserAccount = {
    identity: {email: "", phone: ""},
    role: "admin",
    defIdentity(): string {
        return "email"
    }


}

account.role = "Editor"