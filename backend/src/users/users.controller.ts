import {Body, Controller, Delete, Get, Post, Put, Param} from '@nestjs/common';
import {UsersService} from './users.service';
import {UserDto} from './user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Get()
    getAllUsers() {
        return this.usersService.getUsers();
    }

    @Get('/:id')
    getUser(id: string) {
        return this.usersService.getUser(id);
    }

    @Post()
    createUser(@Body() userDto: UserDto){
        return this.usersService.createUser(userDto);
    }

    @Put('/:id')
    editUser(@Param('id') id: string, @Body() userDto: UserDto){
        return this.usersService.editUser(id, userDto);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string){
        return this.usersService.deleteUser(id);
    }
}
