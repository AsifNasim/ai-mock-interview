const { GoogleGenerativeAI } = require("@google/generative-ai");

const geminiAI = async (prompt) => {

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // const generationConfig = {
    //     temperature: 1,
    //     topP: 0.95,
    //     topK: 40,
    //     maxOutputTokens: 8192,
    //     responseMimeType: "text/plain",
    //   };

      
    // const prompt = "Job Position: Full Stack Developer, Job Description: React, MySQL, Springboot, Years of experience 4. Depends on this information please give me 5 Interview Question with Answer in Json Format, Give Question and answer as field in JSON";


    const result = await model.generateContent(prompt);
    const response = result.response.text().replace('```json', '').replace('```', '');
    console.log(JSON.parse(response));
    return response;
   

}

export default geminiAI;

