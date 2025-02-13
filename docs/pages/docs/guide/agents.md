import { Callout, Steps } from 'nextra-theme-docs';

# Agents

AI agents allow you to isolate the logic and data sources for performing different tasks. Suppose, we have the following problem: we need to separate access to data sources depending on the language the question was asked in. If the question was asked in English, we want the chatbot to look the answer in the data sources A and C, whereas if the question was asked in French, we want that chatbot only looks in the data source F. 
Another use case is "We want the chatbot behaves differently depending on the user - if he/she is already our client we want to use one prompt, and if not yet, another prompt".

Before introducing agents, it was not possible to separate the logic or/and data sources for different cases, now you can create scenarios covering many complex use cases.

<Callout>
  Please note that using Agents is not 100% reliable as it's controlled by the main prompt. It's the very first step to expand the chatbot possibilities but in some cases, the logic may not work.
</Callout>
 
## Adding a new agent
To add a new agent, open an existing project and select the *Agents* menu:

![image](https://github.com/user-attachments/assets/e44cd232-99e8-4dfa-8533-a68d78b807bc)

Then click the *Add a new agent* button:

![image](https://github.com/user-attachments/assets/48b421a7-71ee-4aea-a7ae-657035477356)

The drawer with a new agent's properties will open on the right:

![image](https://github.com/user-attachments/assets/236aaa6a-4f7e-40ea-a71f-cb82af5a7d4d)

Let's review the agent's properties:

### Enable/disable agent

<Callout>
  Please note that a new agent is disabled by default. To use an agent you need to enable it. The disabled agents are not participating in the workflow.
</Callout>

### Agent name
Just a short name that will be shown on the agent's card. The name is not shared with the users.

<Callout>
  Please note that the agent name can't have spaces, so they are replaced with underscore automatically:
  
  ![image](https://github.com/user-attachments/assets/f7edbe07-0e36-457f-9559-f9c72daf5a2f)

</Callout>

### Agent description
#### Describes what it's for, what it does

In this field, you have to describe what is this agent for, when it should be called. So, this is instruction for the AI to make a proper decision on calling (or not calling) this agent. Here is the good example:

```
Useful for responding in english. If the user is speaking english, you should use this tool.
```

### Agent prompt
#### Give the instructions on HOW to handle the query

Every agent may have their own prompt. You can add whatever you want but don't make the prompt too long as long prompts may be confusing for the AI. The best practices are the same as for the chatbot, please refer [our article on mastering prompts](https://enumhq.com/blog/posts/art-of-creating-great-prompts).

### Linked data sources
Expand to see the list of available data sources. If you don't have any data sources yet, you will see the warning message:

![image](https://github.com/user-attachments/assets/29de0ac7-507e-4bf2-a79a-8581f10c70d1)

To add a data source click the *Add* button:

![image](https://github.com/user-attachments/assets/ca7504b7-d7dd-4c85-a1f9-6b363bd234e5)

and if you later would like to unlink the data source, click the *Remove* button:

![image](https://github.com/user-attachments/assets/b704faca-13d1-45d9-a721-a94a5ef9bb9f)


## Deleting an agent



## Number of agents

## How to control and manage agents

## Frequently Asked Questions about Agents
