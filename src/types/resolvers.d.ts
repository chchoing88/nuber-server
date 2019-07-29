// resolver들을 위한 Type들과 인터페이스들을 만들 RTS를 읽는 resolvers를 만들것이다.
export type Resolver = (parent: any, args: any, context: any, info: any) => any;

export interface Resolvers {
  [key: string]: {
    [key: string]: Resolver;
  };
}
