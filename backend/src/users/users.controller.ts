import {Body, Controller, Delete, Get, Post, Put, Param, NotFoundException} from '@nestjs/common';
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

    @Post()
    createUser(@Body() userDto: UserDto){
        return this.usersService.createUser(userDto);
    }

    @Get('/:id')
    getUser(@Param('id') id: string) {
        const user = this.usersService.getUser(id);
        if (!user) throw new NotFoundException('user_not_found');
        return user;
    }

    @Put('/:id')
    editUser(@Param('id') id: string, @Body() userDto: UserDto){
        const user = this.usersService.editUser(id, userDto);
        if (!user) throw new NotFoundException('user_not_found');

        return user;
    }

    @Delete('/:id')
    async deleteUser(@Param('id') id: string){
        const user = await this.usersService.deleteUser(id);
        if (!user) throw new NotFoundException('user_not_found');

        return user;
    }
}
