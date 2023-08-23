import { Callout, Steps } from 'nextra-theme-docs';

# Frequency Asked Questions

## Enum
### General
#### What is Enum
EnumTech(R) is a Canada-based company that has a SaaS-based product called Enum https://enumhq.com. We help individuals and businesses to improve their experience using AI technologies.

#### When we launched
We launched in May 2023.

#### How did you come up with the idea?
The founder, Katherine Mitrich (Kleymenova) came up with this idea several years ago, after 6-hour waiting in the queue to resolve an issue with the Internet provider. That time, she tried to find a way to connect existing chat solutions with AI but failed. In 2023, as soon as ChatGPT came out, she remembered the old idea - this is how the Enum was born.

### AI and ChatGPT

#### Which AI do you use?
We generate answers via [OpenAI ChatGPT](https://openai.com/chatgpt).

#### Which models do you use?
To create embeddings, we use the *text-embedding-ada-002* model. For generating responses, we use the *gpt-3.5-turbo* and *gpt-4* models.

## Enum plugin for Crisp
#### How to install the Crisp chatbot on my website?
Please follow the [Crisp guide](https://help.crisp.chat/en/article/how-to-add-a-live-chat-to-my-website-10wcj3l/).

#### How do I connect the Crisp chatbot and Enum?
Please follow [our guide on installing the Crisp plugin](https://www.enumhq.com/docs/chat-plugins/crisp/crisp-installation).

#### My chatbot isn't working!
There are several reasons why it may not work (by working we mean the chatbot is answering your users' questions).

1) Check if the Enum plugin for Crisp was installed and integrated successfully.
   If you see this, it means you actually didn't install the plugin:

   ![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/b6d87866-a107-41d3-9c82-0146c3cf6e68)


2) Check if your chatbot is enabled.

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/58d95917-c3a8-4827-85ba-a9b271f85cb4)


3) Check if you have more than other projects and accounts with the same chatbots. We do not prohibit creating multiple accounts with us (if it doesn't break our terms) but it happens with some of our users that they forgot about already existing accounts with the same bot. When a new message is coming our inner application looks for any project by the website id and there is no guarantee it will be a "right" project. So, if it's your case, just sign in using another browser, then find the project and remove the chatbot you don't want to be confused with.
