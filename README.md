# Hospital Supplier Marketplace (name TBD)

Help connect hospitals that desperately need ventilators to the suppliers of these ventilators. Start by reading the Issues to see if you are able to comment on them. Not all issues are related to writing code. Most of them are related to information-sharing. This is a fast-evolving pandemic. Both time and information are of the essence. To start with, what should this app do? What are the minimum requirements it needs to be useful? 

Bear in mind that the global scale of this pandemic will require a good focus on internationalization and localization. Are you a translator? We will need you once the app is ready. In the meantime, if you can help with simply searching for google and finding ventilator suppliers for hospitals, [please comment here](https://github.com/1M-Ventilators/hospital-supplier-marketplace/issues/2).

To run this app locally on your computer, you need to have Node (v12 LTS recommended) and NPM installed. Then install a few global packages with NPM:

```
npm install -g @ionic/cli native-run cordova-res
``` 

The packages *native-run* and *cordova-res* are for running the application on mobile devices. If you want to work with just the web version, these are optional. After installing the Ionic CLI, go into the current working directory in your Terminal and install the local npm packages by running `npm install`. Then, after the packages finish installing, start the app with `ionic serve` and you will see your web browser open with the app running in web mode. To learn more about the Ionic Framework, visit [their React documentation](https://ionicframework.com/docs/react/).

## Why Ionic and React?

React is the most popular frontend framework for JavaScript. Period. This project needs as many skilled Open Source Developers as possible if it is to succeed. Ionic was chosen because of the speed of development it allows compared to React Native. We don't have time to write for each native platform's custom code in two separate frameworks. Yet, a mobile app is necessary for a project like this because doctors and other health professionals are operating on the go. It also helps that Ionic is written completely in TypeScript so there is built-in type safety. I modified the TypeScript config and lint rules so the compiler complains less if you write TypeScript in a similar fashion to JavaScript. That doesn't mean this project will be lax on code quality, though. Medical devices and hardware like ventilators have very stringent regulatory requirements. The least we can do as developers is add type safety to our code :P

May the odds be ever in our favor.
