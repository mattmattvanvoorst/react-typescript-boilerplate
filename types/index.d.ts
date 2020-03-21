declare global {
  namespace NodeJS {
    export interface Global {
      fetch: any
      console: any
    }
  }
}

declare module '*.svg' {
  const value: SvgrComponent
  export default value
}
