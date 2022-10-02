// import { ConfigService } from '@nestjs/config';
import { Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TodosResolver {
  //   constructor() {}
  //   @Query(() => Int)
  //   hello(): number {
  //     // return this.configService.get<number>('PORT'); // 3333 (number型になります)
  //   }

  @Query(() => String)
  helloConfiguration(): string {
    // const nodeEnv = this.configService.get<string>('NODE_ENV'); // development （.env.development.localのもの）
    // const databaseUrl = this.configService.get<string>('DATABASE_URL'); // postgresql:/... （.env.development.localのもの）
    // const microCmsKey = this.configService.get<string>('MICRO_CMS_KEY'); // 1234567890（環境変数のもの）
    return 'microCmsKey';
  }
}
