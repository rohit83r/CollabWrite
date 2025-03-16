# CollabWrite

CollabWrite is a **real-time collaborative document editor** inspired by Google Docs. It provides an advanced editing experience with rich-text features, real-time collaboration, and seamless integration with cloud-based services.

## Features

### **Core Features**
- **Real-Time Collaboration**: Users can edit documents simultaneously with live updates.
- **Advanced Rich-Text Editing**: Powered by **TipTap**, including custom extensions like Font Size and Line Height.
- **User Authentication**: Integrated with **Clerk** for secure authentication.
- **Database & Storage**: Uses **Convex** for real-time database updates.
- **API Gateway**: Built with **NestJS**, facilitating microservices communication.
- **Role-Based Access Control**: Uses JWT authentication for permissions.
- **Templates**: Pre-built document templates, including:
    - Business Letters
    - Cover Letters
    - Resumes
    - Software Proposals
    - Project Proposals
- **Version History**: Tracks changes over time.
- **Commenting & Discussions**: Users can leave inline comments and thread discussions.
- **Organization-Based Collaboration**: Users can share documents with teams.
- **Notifications**: Real-time alerts using **Liveblocks**.
- **Cloud Storage Support**: Save documents securely with external integrations.

## **Tech Stack**
- **Frontend**: Next.js 15, React, Tailwind CSS, Shadcn UI
- **Editor**: TipTap with custom extensions
- **Backend**: NestJS (API Gateway, Microservices)
- **Database**: Convex (Realtime Database)
- **Authentication**: Clerk
- **Collaboration**: Liveblocks
- **Package Manager**: pnpm
- **Deployment**: Vercel (Frontend), Railway (Backend)

## **Installation & Setup**

### **Prerequisites**
Ensure you have the following installed:
- Node.js 18+
- pnpm (package manager)

### **Clone the Repository**
```sh
  git clone 
```

### **Install Dependencies**
```sh
  pnpm install
```

### **Setup Environment Variables**
Create a `.env` file in the root directory and configure the required environment variables:
```sh
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=""
NEXT_PUBLIC_CONVEX_URL=""
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
LIVEBLOCKS_SECRET_KEY=""
```

### **Run the Development Server**
```sh
  pnpm dev
```

### **Run Backend Services**
```sh
  pnpm start:backend
```



## **Deployment**
### **Deploy Frontend to Vercel**
```sh
  vercel deploy
```
### **Deploy Backend to Railway**
```sh
  pnpm deploy:backend
```

## **Contributing**
Contributions are welcome! Feel free to open issues and submit pull requests.

## **License**
This project is licensed under the **MIT License**.

---

**Author**: Rohit

**Contact**: rohitsrivas83@gmail.com

