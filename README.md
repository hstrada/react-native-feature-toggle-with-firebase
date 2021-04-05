# react-native-feature-toggle-with-firebase

## Create Project

```bash
npx react-native init Remotine --template react-native-template-typescript
```
---

## Firebase Support

```bash
yarn add @react-native-firebase/app
```

---

### Android Setup

Firebase console -> download google-services.json and place it at:
```bash
/android/app/google-services.json
```

/android/build.gradle

```java
buildscript {
  dependencies {
    // ... other dependencies
    classpath 'com.google.gms:google-services:4.3.4'
    // Add me --- /\
  }
}
```

/android/app/build.gradle

```java
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services' // <- Add this line
```

### iOS Setup

---

## Remote Config Support

```bash
yarn add @react-native-firebase/remote-config
```