import { Controller,Get, Req } from '@nestjs/common';
import { Request } from 'express'
import req = require('express/lib/request');

@Controller('users')
export class UsersController {
    @Get('ab*c')
    findAll(@Req()request:Request):any{
        return  request.url
    }

}
