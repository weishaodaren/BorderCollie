import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Param,
  Redirect,
  Query,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';

@Controller('cats')
export class CatsController {
  @Get()
  findall(@Req() request: Request): string {
    return `This action returns all cats`;
  }

  @Post()
  @HttpCode(204)
  create(): string {
    return `This action adds a cat`;
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    console.log(id);
    return `This action returns a id:${id} cat`;
  }

  @Get()
  async findAllDemo(): Promise<any[]> {
    return [];
  }

  @Get()
  findAllDemoRx(): Observable<any[]> {
    return of([]);
  }
}
