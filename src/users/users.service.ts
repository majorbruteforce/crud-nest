import { Injectable } from "@nestjs/common";
import { UsersDto } from "./users.dto";

let users: UsersDto[]= [
    {
        "name": "Gonzo",
        "id": 12,
        "createdAt": Date.now().toString()
    },
    {
        "name": "Liam",
        "id": 19,
        "createdAt": Date.now().toString()
    },
    {
        "name": "Mark",
        "id": 62,
        "createdAt": Date.now().toString()
    },
]

@Injectable()
export class UsersService{
    allUsers(){
        return users
    }

    oneUser(id: number){
        console.log(id)
        return users.find(user => user.id == id)
    }

    addUser(profile: UsersDto){
        users= [...users, profile]
        return users
    }

    updateUser(profile: UsersDto){
        users= [...users.filter(user=>user.id !== profile.id), profile]
        return users
    }

    deleteUser(id: number){
        users= users.filter(user=>user.id !== id)
        return users
    }
}