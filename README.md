# Little Learners Academy Website

Welcome to the **Little Learners Academy** website repository — a comprehensive React-based online platform for a kindergarten/preschool educational institution. This project serves as the digital face of the academy, designed to provide essential information and interactive functionality for prospective and current families, staff, and community members.

---

## 📌 Purpose and Scope

The Little Learners Academy website was created to:

- Showcase the school's educational approach and curriculum
- Provide detailed information about admissions and fee structures
- Share insights into student life, events, and daily activities
- Present the school's mission, vision, and staff
- Offer convenient contact mechanisms for inquiries and support

---

## 👥 Target Audience

The primary users of this platform include:

- Parents of children aged 2–5 seeking educational options
- Prospective families evaluating kindergarten institutions
- Families of currently enrolled students
- Educators and administrative staff
- Community members interested in early childhood education

> **Source references**:  
> `src/components/Homepage/Hero.tsx` lines 21–23, 28–31

---

## 🏗️ Application Structure Overview

The application follows a modular and maintainable structure built with React and React Router. Below is a high-level overview:

### 📁 Entry Point

- `main.tsx`  
  Initializes the application with `RouterProvider` and injects the routing context.

### 🧭 Router Structure

- `App.tsx`  
  Contains the route hierarchy and layout definitions.

- `Root.tsx` (Root Layout)  
  - `Navbar`  
  - `Outlet` for rendering route-specific pages  
  - `Footer`

### 🧱 Main Content Pages

| Page         | Description                             | Key Components                                      |
|--------------|-----------------------------------------|-----------------------------------------------------|
| Homepage     | Intro to school                         | Hero, Benefits, Testimonials, FAQs                  |
| About        | School’s mission and team               | Mission & Vision, History Timeline, Team            |
| Academics    | Curriculum and subjects                 | Features, Subjects, Gallery                         |
| Admissions   | Admission info and fees                 | Admission Process, Fee Structure                    |
| Student Life | Student activities and programs         | Extracurricular Activities, Events, Student Support |
| Contact      | Inquiry form                            | Contact Form                                        |

---

## 🏠 Homepage Structure

The `Homepage.tsx` is composed of several well-defined UI components for an engaging user experience:

- **Hero Section**
  - Welcome Text
  - Hero Image
  - Hall of Fame Counter (`CountUp` component)
- **Benefits Section**
- **Testimonials Section**
- **FAQs Section**

> **Source references**:  
> `src/pages/Homepage.tsx` lines 8–19  
> `src/components/Homepage/Hero.tsx`

---

## 📌 Key Files and Directories

```bash
src/
│
├── main.tsx                    # Entry point of the React application
├── App.tsx                     # Application-wide routing configuration
├── layouts/
│   └── Root.tsx                # Root layout with Navbar, Footer, and Outlet
├── pages/
│   ├── Homepage.tsx
│   ├── About.tsx
│   ├── Academics.tsx
│   ├── Admissions.tsx
│   ├── StudentLife.tsx
│   └── Contact.tsx
├── components/
│   └── Homepage/
│       └── Hero.tsx            # Hero section component for the homepage
└── index.html                  # Base HTML file
