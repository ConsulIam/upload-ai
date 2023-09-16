import { FastifyInstance } from "fastify";
import { z } from "zod";
import { streamToResponse, OpenAIStream } from "ai"
import { prisma } from "../lib/prisma";
import { openai } from "../lib/openai";

export async function generateAICompletionRoute(app: FastifyInstance) {
    app.post('/ai/complete', async (request, reply) => {
        const bodySchema = z.object({
            videoId : z.string().uuid(),
            prompt: z.string(),
            temperature: z.number().min(0).max(1).default(0.3),
        })

        const { videoId, prompt, temperature } = bodySchema.parse(request.body)

        const video = await prisma.video.findFirstOrThrow({
            where: {
                id: videoId,
            }
        })

        if (!video.transcription) {
            return reply.status(400).send({ error: "Video transcription not yet generated."})
        }

        const promptMessage = prompt.replace('{transcription}', video.transcription)

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            temperature,
            messages: [
                { role: 'user', content: promptMessage },
            ],
            stream: true,
        })

        const stream = OpenAIStream(response)

        streamToResponse(stream, reply.raw, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
            }
        })
    })
}