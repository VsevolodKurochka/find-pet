import {Body, Controller, Delete, Get, Post, Put, Param, NotFoundException} from '@nestjs/common';
import {UsersService} from './users.service';
import {UserDto, AddUserRoleDto, AddUserAnimalDto} from './user.dto';
import {ValidateObjectId} from '../pipes/validate-object-id.pipes';

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

    @Post('/role')
    updateUserRole(@Body() userRoleDto: AddUserRoleDto){
        return this.usersService.updateUserRole(userRoleDto);
    }

    @Post('/animal')
    updateUserAnimals(@Body() userAnimalDto: AddUserAnimalDto){
        return this.usersService.updateUserAnimals(userAnimalDto);
    }

    @Get('/:id')
    getUser(@Param('id', new ValidateObjectId()) id: string) {
        const user = this.usersService.getUser(id);
        if (!user) throw new NotFoundException('user_not_found');
        return user;
    }

    @Put('/:id')
    editUser(@Param('id', new ValidateObjectId()) id: string, @Body() userDto: UserDto){
        const user = this.usersService.editUser(id, userDto);
        if (!user) throw new NotFoundException('user_not_found');

        return user;
    }

    @Delete('/:id')
    async deleteUser(@Param('id', new ValidateObjectId()) id: string){
        const user = await this.usersService.deleteUser(id);
        if (!user) throw new NotFoundException('user_not_found');

        return user;
    }
}
