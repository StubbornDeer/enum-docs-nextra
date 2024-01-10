import { Callout, Steps } from 'nextra-theme-docs';

# Integration with the Crisp chatbot plugin

## Why to integrate?
The Crisp chatbot is a pretty powerful tool and may add logic to the chatbox's behavior. For example, it may answer simple questions, show buttons depending on the user's message, and so on. You can read more about its functionality in the [official documentation](https://crisp.chat/en/chatbot/).

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/2f27808d-c3bf-403b-90d8-7581efdc18ed)

On the other hand, it has huge restrictions as it's not an AI-based chatbot. But by combining its functionality with the Enum chatbot, you may have more control over the chatbox and create pretty complicated workflows.

## Example of integration

### Problem definition
Let's review such a case (based on the real requirements): a company has 2 groups of users that can be divided by their proficiency: new users usually ask simple questions that the Enum chatbot can answer easily whereas experienced users that are on an advanced plan may ask questions that a human agent could only answer.

### Possible Solution
We want our new users to be served by a chatbot whereas the advanced users could choose who/what they would prefer to talk to - the AI assistant or a human agent. To distinguish between them, we use conversation tags, or segments (more on Crisp's segments read in [this article](https://help.crisp.chat/en/article/what-is-a-segment-and-how-can-it-help-your-team-88hhzw/)). To specify this scenario for these two groups, we would create the following workflow:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/e963bc8c-7c75-4de9-a031-25a9032aada9)


### 

## List of commands that can be sent to Enum chatbot
