export async function sendMessage(message: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return message
}
