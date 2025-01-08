# Issue Tracker

Issue Tracker is a web application designed to help teams manage and track bugs, feature requests, and other project-related tasks. This application provides a user-friendly interface for creating, viewing, and managing issues within a project.

## Features

- User Authentication: Secure login system to ensure only authorized users can access the issue tracker.
- Dashboard: A centralized view of all issues, providing a quick overview of the project's status.
- Issue Creation: Easy-to-use form for creating new issues with title, description, and status.
- Issue Display: Clear and concise display of issues using a card-based layout.
- Responsive Design: Fully responsive interface that works well on desktop and mobile devices.

## Technologies Used

- Next.js: React framework for building the user interface
- React: JavaScript library for building user interfaces
- TypeScript: Typed superset of JavaScript for improved developer experience
- shadcn/ui: UI component library for consistent and attractive design
- CSS Modules: For component-scoped styling

## Setup Instructions

1. Clone the repository:

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

4. Open your browser and navigate to \`http://localhost:3000\` to view the application.

## Usage Instructions

1. Login: Use the login page to access the application. (Note: In this demo version, any non-empty username and password will work)

2. Dashboard: After logging in, you'll be redirected to the dashboard where you can view existing issues.

3. Create New Issue: Click the "Create New Issue" button to open the issue creation form. Fill in the title, description, and select a status for the new issue.

4. View Issues: Existing issues are displayed as cards on the dashboard, showing the title, description, and status of each issue.

5. Logout: Use the logout button in the top right corner to securely log out of the application.

## Future Improvements

- Backend Integration: Implement a real backend using Express.js and MongoDB for data persistence and user authentication.
- Issue Management: Add functionality to edit and delete existing issues.
- User Roles: Implement different user roles (e.g., admin, developer, tester) with varying permissions.
- Search and Filter: Add the ability to search for specific issues and filter issues by various criteria.
- Comments and Attachments: Allow users to add comments to issues and attach relevant files.
- Notifications: Implement an email notification system for issue updates and assignments.
- Analytics: Add a reporting feature to visualize issue trends and team performance.

## Contributing

Contributions to the Issue Tracker project are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
