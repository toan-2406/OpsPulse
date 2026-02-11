import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthController } from '../routes/health.controller';
import { AuditMiddleware } from '../audit/audit.middleware';
import { AuditLog, AuditLogSchema } from '../audit/audit.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI ?? 'mongodb://localhost:27017/opspulse'),
    MongooseModule.forFeature([{ name: AuditLog.name, schema: AuditLogSchema }])
  ],
  controllers: [HealthController]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuditMiddleware).forRoutes('*');
  }
}
