import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ManagerCreateReqDto } from './dto/manager-create-req.dto';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Create manager',
  })
  @Post('manager')
  async createManager(@Body() body: ManagerCreateReqDto): Promise<void> {
    await this.adminService.createManager(body);
  }
}
