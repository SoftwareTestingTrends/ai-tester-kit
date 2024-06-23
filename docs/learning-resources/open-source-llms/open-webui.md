---
sidebar_position: 2
---

# 🎓 Local AI Chatbots: Setting Up Open WebUI

Are you worried about the privacy risks associated with publicly available AI tools like ChatGPT and Google Gemini? Open WebUI offers a secure alternative, enabling you to run Large Language Models (LLMs) directly on your machine, ensuring the security and privacy of your data.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kuaalMmarrc?si=wpLjM9TtAABBe0ZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## What is Open WebUI?
[Open WebUI](https://docs.openwebui.com/) (formerly known as Ollama WebUI) is a feature-rich and user-friendly WebUI designed to operate entirely offline. It supports various LLM runners, including Ollama and OpenAI-compatible APIs, and is completely free.

## Setting Up Open WebUI:

### Prerequisites:
Here's what you'll need to get started with Open WebUI:
1. **Ollama:** Ollama is an open-source tool that allows you to run large language models on your local machine without the need for a server. Follow the installation guide on the [Ollama website](https://github.com/ollama/ollama). 
  
Note: There's also a video I made specifically for [setting up Ollama on a Mac](https://www.youtube.com/watch?v=LgT4dpUfkIo&t=1s), in case that's helpful!

2. **Docker:** This platform is all about containerization. To install it, check out the [official Docker documentation](https://docs.docker.com/). 

### Open WebUI Installation: 

With Docker installed, run the following command in your terminal:

```sh
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```
Once you've installed Open WebUI, use this docker command to see if it's up and running. 

```sh
docker ps
```

![alt text](images/webui-docker.png)

Once everything is set up, you can access the Open WebUI by visiting http://localhost:3000 in your web browser.

### Creating Your Admin Account:
Once you've installed Open WebUI, it's time to sign up and set up your first user account. This initial account will automatically have administrator privileges, giving you full control over the platform. You can create additional standard user accounts later on if needed for other users.

## Chat with AI through Open WebUI
Once you've created your account, you're ready to chat with AI directly through Open WebUI! The interface is clean and user-friendly, making it easy to start interacting with your chosen language model. Let's start chatting...

1. **Choose Your Model:** Select the large language model you want to chat with from the dropdown menu. Remember, these are the models we previously downloaded using the Ollama CLI tool. To see them listed here, Ollama needs to be running in the background. We'll cover adding and removing models directly through the web interface later in the article.

2. **Provide Your Text:** Type your prompt or question in the text area. This is what you want the AI to respond to.

3. **Get Talking:** Hit "Enter" or click the 'Send Message' icon and the system will send your prompt to the chosen model. The AI's response will then appear in the interface.

That’s it.  You have your own AI tool like ChatGPT setup on your own machine. You can refine your prompts, adjust settings, and have fun generating new responses.

## Model Management
You can download or remove language models directly from the web interface for easy management of your available models.

### How to add new models

Want to chat with a different large language model (LLM)? Here's how to add new ones:

1. Look for the settings icon in the top right corner or the profile icon in the bottom left. Click on it.
2. Within the settings, navigate to the "Models" section.
3. In the "Pull a model from Ollama.com" text box, type the name of the LLM you want to add and click the download button.
4. The download will initiate. Wait until it finishes successfully. You'll see a progress bar that gives you an idea of how long it might take based on your internet speed.
5. Once downloaded, the new LLM will be available in the selection menu. Choose it and start chatting! 

**Note:** These large language models can take up a lot of space!  Docker creates persistent volumes, so keeping an eye on your storage is important. To monitor your storage usage, simply run the following commands:

`docker system df`: This gives you a quick overview of how much space Docker is using.   
`docker system df -v`: This provides a more detailed breakdown of where your storage space is going. 

If you're concerned about running low on free space, be sure to clean up old models you don't use anymore.

It's easy! Just pick the model name from the "Delete a model" box and click the trash can icon.

## Loading Models other than Ollama:
You're not limited to the Ollama model library! You can also load external models in GGUF format, a new format introduced by the llama.cpp team. To learn more about GGUF and how to load these models, check out the [Ollama documentation](https://github.com/ollama/ollama?tab=readme-ov-file#customize-a-model)

## Retrieval Augmented Generation (RAG) with Open WebUI

### What is RAG?
Want to chat with your AI about your private data or documents? That's what Retrieval Augmented Generation (RAG) is. RAG lets you bring in information from your own world – documents, articles, anything you have access to – without ever uploading it anywhere. This way, the AI can understand your specific requirements and give you more relevant answers, all while keeping your data secure on your own machine.

**Adding Local Documents:**

There are two methods to integrate local documents into your chat:

* **Direct Upload:** While chatting, click the "+" button and choose the documents you want to use.
* **Documents Section:** Go to the dedicated "Documents" section in Open WebUI. Click the "+" icon and select the files you want to add as sources.

**Using RAG in Your Chats:**

1. Simply start your prompt with a "#" symbol in the input field. This triggers the document selection process.
2. A list of available documents will appear. Select the one you want the LLM to consider during response generation.
3. A document icon will appear at the top of your prompt, confirming successful retrieval. 

![alt text](images/webui-rag-doc-list.png)
![alt text](images/webui-rag-docs.png)

**Bringing in the Web Content:**

RAG isn't limited to local files! You can also leverage information from the web:

1. Begin your prompt with "#" followed by the complete URL of the webpage you want to reference.
2. Open WebUI will retrieve and parse the content of the specified URL.

![alt text](images/webui-web.png)

**Pro Tip:** Aim for clean and focused webpages to avoid irrelevant details that might confuse the LLM. Link to raw content or reader-friendly versions whenever possible.

## Model Customization

You can build or customize a model by modifying its Modelfiles directly using the Open WebUI interface. A modelfile acts like a blueprint for your LLMs. It defines key aspects like:

* **Location:** The `FROM` directive specifies where Ollama finds the underlying model weights.
* **User Interaction:** Prompt types determine how users interact with the model.  
    - User Prompt: Defines the format users should use when submitting queries.
    - System Prompt: Sets the context and tone for the model's responses.
* **Message Structure:**  The `Template` section combines different prompts (user and system) into a single message for the model to process.

Let's create a model file by providing the Name, Description, and model file details to customize it as a QA Analyst. We'll call this analyst "Magic Tester." 
In the description field, enter the text: A QA Analyst who can advise on how to effectively test software.

Now enter the modelfile content details. 

```
FROM codellama

# set the temperature to 1 [higher is more creative, lower is more coherent]
PARAMETER temperature 0.2

# set the system message
SYSTEM """
You are Magic Tester created by Ambreen Khan. 
Given your 20 years of experience as a software tester, specializing in web and mobile applications, your task is to offer expert guidance on testing a specific feature. 
Share test ideas covering all potential user interactions, edge cases, and scenarios. 
Ensure these test cases encompass critical aspects such as functionality, performance, and reliability. 
Leverage your extensive experience to identify potential issues and scenarios that might impact overall quality and user experience.
"""

```

We'll categorize this model as "Assistant". Next, click on the `Save & Create` button.

Your modelfile has been successfully generated. 

![alt text](images/modelfile-create.png)

You can also share this model file with the Open WebUI community by clicking the share button.

![alt text](images/modelfile-share.png)

You can see how easy it is to customize our own model based on our specific requirements. 

Let's try out our new model:

I asked the model to tell me about itself. The Magic Tester promptly responded to my prompt and introduced itself.

![alt text](images/magic-tester-chat.png)

Next, I asked it to generate test cases for testing the checkout flow of a POS app, and it produced quite an impressive response.

![alt text](images/test-case-generation.png)

## Image Generation with Open WebUI
Open WebUI supports image generation through two backends: AUTOMATIC1111 and OpenAI DALL·E.

### Using AUTOMATIC1111 Stable Diffusion with Open WebUI
To use AUTOMATIC1111 for image generation, follow these steps:

1. Install AUTOMATIC1111 and launch it with the following command:

`./webui.sh --api --listen`

2. In the Open WebUI, go to Settings > Images and enter the address where AUTOMATIC1111's API is accessible in the "API URL" field. 
   
Note: If you're running a Docker installation of Open WebUI and AUTOMATIC1111 on the same host, use http://host.docker.internal:7860/ as your address.

3. Use a text generation model to write a prompt for image generation.
4. After the response has finished, you can click the Picture icon to generate an image.

![alt text](images/webui-image-stable-diffusion.png)

### Generate Images with OpenAI DALL-E
Open WebUI lets you generate images using OpenAI's DALL-E models. To get started, follow these steps:

1. Navigate to the Settings section of Open WebUI and look for the "Images" section.
2. In the "Image Generation Engine" dropdown menu, select "OpenAI (Dall-E)".
3. Ensure the "Image Generation (Experimental)" option is switched on.
4. Provide your OpenAI API key in the "OpenAI API Config" field.
5. Select your preferred model - DALL-E 3 or DALL-E 2 - using the "Set Default Model" option.
6. Keep in mind that DALL-E 3 has a minimum image size requirement of 1024x1024.
   
![alt text](images/webui-dalle-config.png)

1. Use a text generation model to write a prompt for image generation.
2. After the response has finished, you can click the Picture icon to generate an image.

![alt text](images/webui-dalle-generate.png)

**Note:** Generating images with DALL-E isn't free. You can find the pricing details on the OpenAI API pricing page [here](https://openai.com/api/pricing/).

![alt text](images/webui-dalle-pricing.png)

ref: https://docs.openwebui.com/tutorial/images

## Additional Features:

* **Choose Your Theme:**  Open WebUI offers a variety of themes to customize the interface. Pick a theme that matches your style and makes chatting with AI even more enjoyable. 

* **Pre-built Conversation Starters:** You can streamline your daily tasks by creating frequently used prompts and saving them using Open WebUI. You can later access these quick prompts using the / command. You can also import prompts from the Open WebUI community.

![alt text](images/webui-prompts.png)

* **Talk to Your Model:** Open WebUI also allows you to speak directly with your model. Click on the Record Voice icon and after granting microphone access, start speaking your prompt. I asked: `Create a Python program to develop a BMI calculator.`. The AI then transcribed my spoken prompt into the text input box.

* **Leveraging OpenAI's API:** Open WebUI enables you to switch between local models and OpenAI's powerful GPT models, such as GPT-4, providing a wider range of capabilities.

To access OpenAI models, simply enter your OpenAI API key in the settings under the "Connections" section. Once your key is added, these models will appear alongside local models, allowing you to interact with them in the same way.

![alt text](images/webui-openai-config.png)

![alt text](images/webui-openai-generate.png)

## Remotely Access Your Self-Hosted LLM
Now, you've set up your own Open WebUI server, but what if you want to use it from your phone, laptop, or share it with friends? The answer is NGROK. With this tool, you can enjoy the power of your self-hosted Open WebUI from anywhere. 

NGROK establishes a secure tunnel between your local machine and their servers, providing a public URL that allows anyone with the appropriate address to access your locally hosted AI tool over the internet.

### Getting started with NGROK
Let's break down the setup process:

**Sign Up for an Account:** Head over to the ngrok website [https://ngrok.com/](https://ngrok.com/) and create an account. You can use your Google or Github account for this, or a standard email and password signup.

**Download and Install ngrok:** Once you have an account, log in to your ngrok dashboard and download the ngrok client for your operating system (Windows, macOS, or Linux). They typically provide instructions for installation based on your chosen OS.

**Connect to your Account:** After installing ngrok, you'll need to connect it to your ngrok account. You'll find an authentication token in your ngrok dashboard. Copy this token and run a specific command in your terminal to connect the ngrok agent (the installed application) to your account. The exact command will be provided on the ngrok dashboard.

**Start Your Local Service:** Ensure the local server you want to make accessible is up and running on your machine. Make note of the port it's using (usually port 3000 for Open WebUI app).

**Run ngrok:** Now you're ready to create a tunnel! Use the `ngrok` command in your terminal followed by the keyword `http` (for HTTP traffic) and the port number of your local server. For example, if your local server is running on port 8080, you'd use the command `ngrok http 3000`.

**Expose Your Local Server:** Ngrok will start a secure tunnel and provide you with a public URL in your terminal. This URL will typically look like `https://########.ngrok.io`. You can now share this URLs with anyone to allow them to access your local AI remotely over the internet.

I accessed the AI server from my phone and could chat with my local private AI server without any issues.

**Conclusion:**

Open WebUI empowers individuals to tap into the power of LLMs for various creative and informative tasks on their own machines. Its user-friendly interface and diverse features make it a valuable tool for anyone interested in exploring the potential of AI without worrying about cost and privacy concerns. Don't forget to explore Open WebUI Community, where you can discover, download, and explore customized Modelfiles.




