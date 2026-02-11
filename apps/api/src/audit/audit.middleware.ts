import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';
import { AuditLog } from './audit.schema';

@Injectable()
export class AuditMiddleware implements NestMiddleware {
  constructor(@InjectModel(AuditLog.name) private readonly model: Model<AuditLog>) {}

  use(req: any, _res: any, next: () => void) {
    void this.model.create({
      method: req.method,
      path: req.originalUrl ?? req.url,
      actor: req.user?.id ?? 'anonymous',
      ip: req.ip,
      meta: { ua: req.headers['user-agent'] }
    });
    next();
  }
}
