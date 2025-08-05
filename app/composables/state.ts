export const useName = () => useState<string | undefined>('name', () => undefined)
export const useHistory = () => useState<string[]>('history', () => [])
