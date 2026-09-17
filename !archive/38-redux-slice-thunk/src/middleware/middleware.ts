export const logger = (store: any) => (next: any) => (action: any) => {
  console.log('логер')
  next(action)
}
