# Wei Ouyang - Chapter One Technical Screening

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

I recommend using Android Studio or Xcode to test out Android and IOS devices respectively. Read more about setting up your environment [here](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated).

## Features

This app features three main tabs:

### Home tab

In this tab, you'll be able to see all of your tasks. You can mark any task as complete or delete them.

### Create tab

In this tab, you'll be able to create a new task. Simply give it a quick title, and fill in its details if necessary. Then, click the create button to finalize your task.

### Finished tab

In this tab, you'll be able to see all of your finished tasks. You can unmark them as complete, or delete them all together.

## External Libraries

For this app, the only external library I've used outside of Expo itself was React Native Paper. This provided me with a Checkbox UI that I could use to implement each task with, since this doesn't come with React Native.
