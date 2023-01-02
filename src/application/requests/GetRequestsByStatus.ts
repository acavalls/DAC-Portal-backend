import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IRequestsRepositoryToken, IRequestsRepository } from '../../domain/ports/repositories/requests/requests.interfaces';
import { configToken } from '../../infrastructure/config/env.config';

@Injectable()
export class GetRequestsByStatus {
  constructor(
    @Inject(IRequestsRepositoryToken) private readonly requestsRepository: IRequestsRepository,
    @Inject(configToken) private readonly configService: ConfigService,
  ) {}

  async run(id: string, status: string) {
    return await this.requestsRepository.getAccessRequests(id, status);
  }
}
