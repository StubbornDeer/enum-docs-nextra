import { Callout, Steps } from 'nextra-theme-docs';

# Projects

A project is a place where you add data sources of the same topics. For example, you may have a separate project for your project, a website, or a group of websites. 
 
## Add a new project
To add a new project, click the *My projects* menu item on the left menu bar, then click the *All projects* link and the *Add a project* button. 

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/12bce434-ca3f-4917-acac-dc5ba57ac9bb)

In the showing popup enter the name and description (optional), then click the *OK* button:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/441f62d0-164a-4dfe-922e-36dc4768f4ba)

You will be redirected to the project's page with an empty list of data sources.

## Add a data source
As soon as a project is created you may add the data source. A *data source* is a piece of information to be indexed and searched by our engine. Read more on [the data source documentation page](https://enumhq.com/docs/guide/data-sources).

 Click the "Add a new source" button and then select the corresponding type of data sources:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/5407348c-fac1-4a47-b9a3-b15b9a90267a)

<Callout>
  At the moment, you can add data sources of 3 types: PDF file, plain text, or a web site.
 </Callout>

## Project's settings
After a project is created you may edit some of its properties. For a given project, click the *Settings* link:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/65e08c3c-e6b2-4dde-b106-a4a2b670b33c)

### General tab
Here you can change the project's name and its description.
The description is used when the project is shown on the Project list:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/8830a897-5661-43d8-a29c-ececf5722b7f)

### AI Settings
The second tab has the AI tuning settings. 

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/cd5ebc03-1448-4cd4-9c57-113de9c1ff7f)

Let's review all the settings

#### ChatGPT Engine and OpenAI Model
Here you can select what to use for the generating responses: the OpenAI assistant, [a new technology that allows you to upload your own data right in the OpenAI dashboard](https://platform.openai.com/assistants), or a regular OpenAI chat model. If you use the second option, you can then select a model (the default model is ChatGPT-3.5-Turbo). The GPT-4 and GPT-4 Turbo are available.

<Callout>
  Please note that these options are available only for the "Key" plan. The reason is that ChatGPT assistant and ChatGPT-4 models are still very expensive, so you use them at your own risk.
</Callout>
<Callout>
  Don't forget to enter the OpenAI key which is available in the account's settings (can be found at the bottom of the left menu).
</Callout>
<Callout>
If you choose to use the OpenAI Assistant, the following settings will not be available as you change all the parameters right in the OpenAI Assistant dashboard.
</Callout>

#### Custom prompt
This section has 2 options:
- the text of your custom prompt
- the switch to replace the default prompt (that one we use by default) with your prompt.

<Callout>
  Our default prompt is not only a piece of text but it's a combination of logic, code, and text. As it is our intellectual property, it can't be shared.
</Callout>

<Callout>
  Creating a good prompt could be tricky. But now we provided several pieces of advice, to read them please click the *Good prompts: tips & tricks* icon, and the side panel will be open.
</Callout>

<Callout>
The maximum number of symbols for the custom prompt is now 10,000. But do not overuse it! The longer the prompt the easier for the chatbot to be confused. Do not mix the data source and the prompt! The data source is where the system looks for the relevant information and pass it to the chatbot, whereas the prompt is the direct instructions for the chatbot how to behave and respond.
</Callout>

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/8aae9f9b-200d-4d1b-8d6c-d81b2ae95e7b)

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/05426410-6653-4d2d-b68f-2b4a81ae1004)

Also, to help you with creating a good, working prompt, we wrote this article: [Art of Creating Great Prompts](https://enumhq.com/blog/posts/art-of-creating-great-prompts/).

#### Interactions
Here, you control your interaction with AI in the Interactions window.

![image](https://github.com/user-attachments/assets/bb1ac33e-3e9f-480b-982a-651a847dab23)

Specify, if you want the sources to be shown in the interaction window, how many and which types of.

Here is an example of querying with sources:

![image](https://github.com/user-attachments/assets/1f6e7cd2-e101-4da1-9b4a-b9c5f777fdc2)


#### Custom messages

![image](https://github.com/user-attachments/assets/2bc020f4-0300-442a-90a4-f8d0af808bec)


Currently, there are 4 custom messages you can specify for your chatbot:

1. What the bot says when cannot find an answer
2. What the bot says when a user asks to talk to a human
3. What the bot says when you reach the Enum limits
4. What the bot says if there is a server or OpenAI error

The third message is useful for a case when you are out of limit with Enum, but don't want your users to be aware of this fact. The default value is "Let me send your enquiry to our colleague who may know the answer."

<Callout>
  You can set up these messages that will be used in all your chatbots for the current project unless you provide the same messages for a separate chatbot which has a higher priority.
</Callout>

#### Fine-tuning

These settings are used for the fine-tuning data to be passed to ChatGPT as context.

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/9a55bc9b-a316-4040-afe5-a0740d8605ba)


- chunk size is the amount of text in of [tokens](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them) to be stored and to be obtained from the index database to form context data (the default number is 300 tokens which usually works great but in some cases, another amount, say, 1024 tokens works better)
- the amount of chunks to send as context - the number of pieces that will be sent as context. The more the number the better but sometimes it can be more than the OpenAI threshold which can cause an error.

#### Stick to context
If you want the chatbot to stick to your context and ignore questions that may be outside of it, use this parameter:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/d4e650b7-d604-41cc-9bd6-ef7372ad20af)

If our system didn't find any relevant information in your data, and this switch is *on*, the chatbot will answer with a text you set up [in the custom messages](https://enumhq.com/docs/guide/projects#custom-messages) or with our standard message if this is not defined. Each piece of data obtained from your data has its own relevancy score (the less the more relevant). Usually, a score more than 0.25 is considered irrelevant. But you may control the threshold and include the data with a score higher than 0.25 - find the best one by experimenting.

### Using metadata
You now can add metadata in the prompt, currently, the language of the question is available. If you want the chatbot to answer always in the language of question (that is detected automatically), use the following syntax:

```
... Answer in the {language} language.
```

Just add the "language" word wrapped with curly brackets, and then, during the preprocessing of your prompt, it will be converted into a normal string (the exact value varies according to the question's language):

```
... Answer in the French language.
```

## Deleting project
If you scroll down to the end of the settings page you will see the "danger zone":

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/61854521-efd4-4eb1-9abc-4e71ccff992e)

Click the *Delete project* button if you'd like to delete a project but be aware that all the associated data sources as well as interactions will be deleted too.

## Events logging

We log errors occurring for a project. For example, they include errors related to the OpenAI API such as insufficient credits or the wrong OpenAI key. You can find the log entries in the *Settings, logs, stats* menu for your project:

![image](https://github.com/user-attachments/assets/14076089-accd-443e-b7b7-a59c92a36a1f)


## Statistics

Right now, we can collect the stats on using the buttons you attach to your messages; we also count the number of the conversations. How to configure the buttons please read the [chatbot documentation](https://enumhq.com/docs/chat-plugins/crisp/crisp-settings#add-standard-action-buttons-to-the-messages). To allow collecting these stats the corresponding [flag should be on](https://enumhq.com/docs/guide/projects#statistics).

You can find the stats on the menu *Settings, logs, stats*.

It's pretty clear what all settings mean:

![image](https://github.com/StubbornDeer/enum-docs-nextra/assets/91156314/52e10c9c-3843-4e4c-b21d-b8236746346a)


You can choose to see stats on one specific chatbot or all of them.
You may see the stats daily, weekly, or monthly.
The last switch allows you to choose between counting all the clicks or only the last one for sessions.
It means that if a user clicks buttons several times during the session, only the last one will be counted.

You also can have data on each of your chatbots side-by-side (if you have installed many of them) by selecting the *Group by chatbot* option.

<Callout>
  The retention period for stats data is 3 months for paid plans and 1 month for the free plan.
</Callout>
