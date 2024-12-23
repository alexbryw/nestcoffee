import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.time('response time');
    console.log('middleware');

    res.on('finish', () => console.timeEnd('response time'));
    next();
  }
}
