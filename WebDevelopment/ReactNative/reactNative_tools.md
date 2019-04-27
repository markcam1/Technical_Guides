# Tools

## ESLint

1. Add ESLint to VSCode (or Text Editor) Extensions
2. Install [Rally Coding](https://www.rallycoding.com/) eslint configuration in your project 
```
npm install --save-dev eslint-config-rallycoding
```
3. In the root directory of project add the following file: **.eslintrc**
4. In **.eslintrc** file add the following code:
```
{
    "extends": "rallycoding"
}
```

<hr>

## Firebase Authentication
1. go to [firebase](https://console.firebase.google.com)
2. Create new project
3. On the left choose "Authentication" 
4. For **React Native** choose _Providers_ = **email/password**
5. Install Firebase in your project:
```
npm install --save firebase
```
6. Import Firebase into your App by going to Firebase and copying Web App details 
```
https://console.firebase.google.com/u/0/project/{YOUR-PROJECT}/settings/general/
```
7. and then find Overview and then "</>", **Your apps** and look for the **Add Firebase to your web app** link or the "</>" icon
8. Copy only the object details: 
```
{
    apiKey: "xxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxx",
    storageBucket: "xxxxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxxx"
 }
```
9. Add this to your component like this: 
```
componentWillMount() {
	firebase.initializeApp({
		apiKey: "xxxxxxxxxxxxxxxxxxxx",
		authDomain: "xxxxxxxxxx.firebaseapp.com",
		databaseURL: "https://xxxxxxxxxxxxxxxxxxx",
		projectId: "xxxxxxxx",
		storageBucket: "xxxxxxxxxxx.appspot.com",
		messagingSenderId: "xxxxxxxxxxxxx"
	});
}
```

