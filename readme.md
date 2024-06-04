# SafeSentry

SafeSentry is a mobile app designed to enhance safety and security for high school students. Built using React Native, TailwindCSS, and Firebase, it offers a range of features to help students proactively address potential gun violence threats. Students can register using their student ID or school email, allowing them to access the app's functionalities within their school ecosystem.  SafeSentry enables students to anonymously file evidence-based incident reports, detailing suspicious activities or potential threats. This feature provides a valuable tool for school authorities to investigate and potentially prevent incidents.  The app also includes an interactive map that displays incident reports, safety exits, and designated shelters, empowering students with crucial knowledge in emergencies.  Furthermore, SafeSentry offers an Emergency Aid feature that allows students to quickly alert local authorities with a single click, potentially saving lives in critical situations. School administrators and authorities can utilize the timeline location feature to track student accounts during emergencies.  SafeSentry's innovative features aim to significantly reduce casualties in the event of a school shooting or even prevent such incidents altogether. 


## Overview

SafeSentry is a mobile application built using React Native, TailwindCSS, and Firebase.  It's designed to provide high school students with a variety of personal security and safety features to help prevent gun violence.  Key features include a log-in/authentication system where students can register using their student ID or other information, a secure incident reporting system allowing students to report suspicious activity or potential threats, and an interactive map showing locations of incident reports, safety exits, and shelters. The app also has an emergency aid feature that allows students to quickly alert local authorities with a single click, and a timeline location feature that allows administrators and authorities to track students during emergencies.  SafeSentry is equipped with innovative features to help reduce casualties in school shootings and potentially prevent them entirely. 


## Dependencies

This project is a mobile application built using React Native, TailwindCSS, and Firebase, designed to improve school safety and potentially prevent gun violence. SafeSentry offers a range of features for high school students, including:

- **Secure Login/Authentication:** Students can register with the app using their student ID or school email.
- **Incident Reporting:** Students can file evidence-based reports about suspicious activity or potential threats.
- **Interactive Map:** Displays locations of incident reports, safety exits, and shelters, providing critical information in emergencies.
- **Emergency Aid:** Students can quickly alert local authorities with a single button click during an active threat.
- **Timeline Location Tracking:** School administrators and authorities can track students' locations during emergencies.

SafeSentry aims to empower students and provide tools to promote a safer learning environment.


## Usage

1. Ensure all dependencies are installed. You can install all dependencies by running `npm install` in the project's root directory.
2. Build the application by running `npm run build` in the project's root directory.
3. Launch the application by running `npm run start` in the project's root directory. 
4. Navigate through the application using the provided navigation. 
5. You can view details on the application by accessing the `Profile` and `Reports` pages. 
6. You can interact with the Emergency Aid, Safety Map, and Report features to experience the key components of the application.
7. Use the provided log-in features to simulate real-world interactions.
8. You can explore the provided `reports.json` and `aids.json` files to get an understanding of the app's structure.
9. The application is designed to provide a user-friendly interface and to showcase the functionality of the app.
10. You can modify and customize the UI as needed based on your preferences. 


## Code Structure

The key components of the code include:

- **UI:** The application's user interface is built using `React Native`, which leverages the power of JavaScript to create a cross-platform mobile application. The UI is styled using `TailwindCSS` for a modern and customizable look. 
- **Authentication:** The application utilizes `Firebase` for secure user login and authentication. Users can register and log in using their student ID or school email.
- **Incident Reporting:** The `Reports.js` and `ReportDetails.js` components allow students to file evidence-based incident reports about suspicious activities or potential threats. These reports can help prevent future incidents. 
- **Interactive Map:** The `Map.js` component provides an interactive map that displays locations of incident reports, safety exits, and safety shelters. This feature enhances situational awareness and provides vital information during emergencies. 
- **Emergency Aid:** The `Emergency.js` component features an Emergency Aid button that, with a single click, alerts local authorities. Students can quickly access this feature when faced with a real threat. 
- **Timeline Location Tracking:** School administrators and authorities can use the timeline location feature to track students' locations through their accounts, providing crucial information during emergencies.
- **Notifications:** The `Notifications.js` component manages and displays important alerts and updates to users. 
- **Other Components:**  The project includes various other components such as `Add.js`, `Carousel.js`, `CategorySlider.js`, `Navbar.js`, `Onboarding.js`, `OnboardingData.js`, `Home.js`, `LoginScreen.js`, `Profile.js`, `Search.js`, and `style.js`, which contribute to the application's functionality and user experience. 
- **Data Storage:** The project utilizes `aids.json` and `reports.json` files to store relevant data for incident reports, safety resources, and user information.


## Folder Structure

- `.git`: Contains version control information for the project.
- `Add.js`: Component for adding new report information.
- `aids.json`: Contains data for emergency aid options.
- `App.js`: The main application entry point.
- `app.json`: Configuration file for the React Native application.
- `babel.config.js`: Configuration file for Babel, defining transpilation rules.
- `Carousel.js`: Component for displaying a carousel of images or content.
- `CategorySlider.js`: Component for displaying a slider of categories.
- `Navbar.js`: Component for displaying the navigation bar.
- `Onboarding.js`: Component for displaying the onboarding screens.
- `OnboardingData.js`: Data for the onboarding screens.
- `Reports.js`: Component for displaying and managing reports.
- `Emergency.js`: Component for handling emergency situations.
- `Home.js`: Component for the home screen.
- `LoginScreen.js`: Component for the login screen.
- `Map.js`: Component for displaying the interactive map.
- `Notifications.js`: Component for managing notifications.
- `onboard.js`:  Component for displaying the onboarding screens.
- `package-lock.json`: Contains information about the project's dependencies and their versions.
- `package.json`: The project's manifest file, defining dependencies, scripts, and other configuration.
- `Profile.js`: Component for displaying the user profile.
- `ReportDetails.js`: Component for displaying details of a specific report.
- `reports.json`: Contains data for the reports.
- `Search.js`: Component for searching reports.
- `style.js`: Contains global styles for the application.
- `UserContext.js`: Context for managing user authentication and data.
- `yarn.lock`:  Lockfile for Yarn, managing dependency versions. 


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and distribute the code as per the terms of the license. 


