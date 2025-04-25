# 📝 React Native To-Do List App

A simple and elegant To-Do List application built using **React Native**. Easily add, complete, and delete tasks to stay organized throughout your day.

## 📦 Features

- Add tasks
- Mark tasks as completed
- Delete tasks
- Persistent local storage using AsyncStorage
- Clean and minimal UI

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js: https://nodejs.org/
- npm or yarn
- React Native CLI or Expo CLI
- Android Studio or Xcode for emulators
- Expo Go app (if using Expo) for physical devices

### Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/todo-list-react-native.git
cd todo-list-react-native
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the app:

If you're using **Expo CLI**:

```bash
npx expo start
```

Then:
- Scan the QR code with the Expo Go app on your phone
- OR press `a` for Android emulator, `i` for iOS simulator

If you're using **React Native CLI**:

```bash
npx react-native run-android   # for Android
npx react-native run-ios       # for iOS (Mac only)
```

## 📲 How to Use

1. Open the app.
2. Type a task in the input field.
3. Tap the **Add Task** button.
4. Tap a task to mark it as completed.
5. Tap the delete icon to remove the task.

## 🗂 Project Structure

```
todo-list-react-native/
├── App.js
├── components/
│   ├── TaskInput.js
│   └── TaskItem.js
├── utils/
│   └── storage.js
├── assets/
└── README.md
```

## 🛠 Technologies Used

- React Native
- JavaScript (ES6+)
- AsyncStorage
- (Optional) Expo

## 🖼 Screenshots

_Add screenshots or screen recordings here if needed._

## 📃 License

This project is licensed under the MIT License.

## 🙋‍♂️ Author

**Ishara Dhanushan**  
Email: your-email@example.com  
Portfolio: https://your-portfolio-link.com