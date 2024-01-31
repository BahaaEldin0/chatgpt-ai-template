import { ChatBody } from '@/types/types';
import { OpenAIStream } from '@/utils/chatStream';

export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { inputCode, model, apiKey } = (await req.json()) as ChatBody;
    let apiKeyFinal = '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';

    
    const stream = await OpenAIStream(inputCode, model, apiKeyFinal);

    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response('Error form chatAPI', { status: 500 });
  }
};

export default handler;
