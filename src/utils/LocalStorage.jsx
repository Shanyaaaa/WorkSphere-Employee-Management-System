const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "aarav@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 3,
      pending: 0,
      failed: 0
    },
    tasks: [
      {
        title: "Prepare Report",
        description: "Complete the Q1 financial report.",
        date: "2025-04-10",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Discuss new requirements with client.",
        date: "2025-04-11",
        category: "Client",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Data Cleanup",
        description: "Clean up old records in database.",
        date: "2025-04-07",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Review PRs",
        description: "Review code submitted by teammates.",
        date: "2025-04-09",
        category: "Code Review",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Test API",
        description: "Ensure API endpoints are returning correct data.",
        date: "2025-04-08",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishita",
    email: "ishita@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 2,
      pending: 0,
      failed: 1
    },
    tasks: [
      {
        title: "Design Mockups",
        description: "Create UI mockups for new dashboard.",
        date: "2025-04-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Accessibility Review",
        description: "Check UI for accessibility issues.",
        date: "2025-04-11",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Brand Update",
        description: "Incorporate new branding colors.",
        date: "2025-04-12",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Component Testing",
        description: "Test reusable UI components.",
        date: "2025-04-09",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Design Review Meeting",
        description: "Discuss design changes with stakeholders.",
        date: "2025-04-07",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Vihaan",
    email: "vihaan@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 2,
      pending: 0,
      failed: 1
    },
    tasks: [
      {
        title: "Security Audit",
        description: "Perform security assessment on backend.",
        date: "2025-04-06",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Log Monitoring",
        description: "Monitor system logs for unusual behavior.",
        date: "2025-04-08",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Firewall Update",
        description: "Apply latest firewall rules.",
        date: "2025-04-09",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Password Policy Draft",
        description: "Create new password policy document.",
        date: "2025-04-07",
        category: "Policy",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Incident Response Plan",
        description: "Update and document IR plan.",
        date: "2025-04-10",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Anaya",
    email: "anaya@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 3,
      pending: 0,
      failed: 1
    },
    tasks: [
      {
        title: "Backend Refactoring",
        description: "Clean up and optimize services.",
        date: "2025-04-11",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Migration",
        description: "Migrate old tables to new schema.",
        date: "2025-04-09",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Add Logging",
        description: "Improve logging across microservices.",
        date: "2025-04-10",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Optimize Queries",
        description: "Analyze and optimize slow DB queries.",
        date: "2025-04-08",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Server Setup",
        description: "Provision new staging environment.",
        date: "2025-04-06",
        category: "Infrastructure",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Devansh",
    email: "devansh@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 2,
      pending: 0,
      failed: 1
    },
    tasks: [
      {
        title: "System Monitoring",
        description: "Monitor server health daily.",
        date: "2025-04-10",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Install Updates",
        description: "Update system packages on all servers.",
        date: "2025-04-07",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Patch Vulnerability",
        description: "Fix the latest discovered CVE.",
        date: "2025-04-09",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Configure Monitoring Alerts",
        description: "Set alerts for CPU and memory usage.",
        date: "2025-04-08",
        category: "Monitoring",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Document Procedures",
        description: "Write SOPs for server maintenance.",
        date: "2025-04-06",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];



export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees)) 
  localStorage.setItem('admin', JSON.stringify(admin)) 
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || [];

  return { employees, admin }
}