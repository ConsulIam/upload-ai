import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.prompt.deleteMany()

  await prisma.prompt.create({
    data: {
      title: 'Main topic',
      template: `Its role is to identify the main idea of a YouTube video.
  
Below you will receive a transcript of this video, use this transcript to identify the main idea of the video.
      
The main idea must have a maximum of 50 words and its content must be logical, direct and coherent with the video transcription.
      
Use eye-catching words that demonstrate in-depth knowledge of the subject and captivate the attention of those reading.
      
Additionally, at the end of the description include a list of 5 hashtags in lowercase letters containing the video's keywords.
      
The return must follow the following format:
'''
Description.
      
#hashtag1 #hashtag2 #hashtag3 ...
'''
      
Transcription:
'''
{transcription}
'''`.trim()
}
})

  await prisma.prompt.create({
    data: {
      title: 'Title video',
      template: `Your role is to create a title for a YouTube video.
      
Below you will receive a transcript of this video, use this transcript to generate the titles.
      
Titles must have a maximum of 60 characters.
      
Titles must be eye-catching and attractive to maximize clicks.
      
Return ONLY the three titles in list format as in the example below:
'''
- Title 1
- Title 2
- Title 3
'''
      
Transcription:
'''
{transcription}
'''`.trim()
}
})

await prisma.prompt.create({
  data: {
    title: 'Quiz video',
    template: `Your role is to create a quiz with three multiple-choice questions about the content of a YouTube video.

Below you will receive a transcript of this video, use this transcript to create the quiz with three multiple choice questions.
    
The total of the three questions with their possible answers must have a maximum of 500 characters.
    
The questions and their possible answers must be uniquely related to the content of the video and must be created in a logical, coherent and attractive way.
    
Return ONLY the three questions with their possible answers in a list format as in the example below:
'''
- Question 1
  a: Description response to;
  b: Description response b;
  c: Description response c;
  Right answer:
- Question 2
  a: Description response to;
  b: Description response b;
  c: Description response c;
  Right answer:
- Question 3
  a: Description response to;
  b: Description response b;
  c: Description response c;
Right answer:
'''
    
Transcription:
'''
{transcription}
'''`.trim()
}
})

await prisma.prompt.create({
  data: {
    title: 'Abstract video',
    template: `Your role is to create a summary of a YouTube video.
  
Below you will receive a transcript of this video, use this transcript to create the summary.
    
The summary must have a maximum of 300 words highlighting the main points of the video.
    
To create the summary, use eye-catching words that capture the attention of those who are reading.
    
Always maintain logic in writing the summary and the coherence of the summary in relation to the themes in the transcription.
    
The return must follow the following format:
'''
Summary.
'''
    
Transcription:
'''
{transcription}
'''`.trim()
}
})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })