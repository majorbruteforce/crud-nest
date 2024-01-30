import { Controller, Get, Param, Put, Body, Delete, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersDto } from "./users.dto";

@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    getAllUsers() {
        return this.usersService.allUsers()
    }

    @Get(':id')
    findOneUser(@Param('id') param: number) {
        const result = this.usersService.oneUser(param)
        if (result) {
            return result
        }
        else {
            return { "Message": `No user with given id: ${param}` }
        }
    }

    @Post()
    addUser(@Body() body: UsersDto){
        return this.usersService.addUser(body)
        
    }

    @Put(':id')
    updateUser(@Param('id') param: number, @Body() body: UsersDto) {
        if (this.usersService.oneUser(param)) {
            return this.usersService.updateUser(body)
        }
        else {
            return { "Message": `No user with given id: ${param}` }
        }
    }

    @Delete(':id')
    deleteUser(@Param('id') param: number){
        if (this.usersService.oneUser(param)) {
            return this.usersService.deleteUser(param)
        }
        else {
            return { "Message": `No user with given id: ${param}` }
        }
    }
}