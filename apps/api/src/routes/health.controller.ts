import { Controller, Get } from '@nestjs/common';
import { HealthSchema } from '@opspulse/shared';

@Controller('health')
export class HealthController {
  @Get()
  getHealth() {
    const payload = { status: 'ok' as const, service: 'opspulse-api', time: new Date().toISOString() };
    return HealthSchema.parse(payload);
  }
}
