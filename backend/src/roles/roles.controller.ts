import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ValidateObjectId} from '../pipes/validate-object-id.pipes';
import {RolesService} from './roles.service';
import {RolesDto} from './roles.dto';

@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {
    }

    @Get()
    getAllRoles() {
        return this.rolesService.getRoles();
    }

    @Post()
    createRole(@Body() dto: RolesDto){
        return this.rolesService.createRole(dto);
    }

    @Get('/:id')
    getRole(@Param('id', new ValidateObjectId()) id: string) {
        const role = this.rolesService.getRole(id);
        if (!role) throw new NotFoundException('role_not_found');
        return role;
    }

    @Put('/:id')
    editRole(@Param('id', new ValidateObjectId()) id: string, @Body() dto: RolesDto){
        const role = this.rolesService.editRole(id, dto);
        if (!role) throw new NotFoundException('role_not_found');

        return role;
    }

    @Delete('/:id')
    async deleteRole(@Param('id', new ValidateObjectId()) id: string){
        const role = await this.rolesService.deleteRole(id);
        if (!role) throw new NotFoundException('role_not_found');

        return role;
    }
}
