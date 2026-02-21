// =======================
// Skills
// =======================

export const skills = [
  {
    category: "Math & Optimization",
    items: [
      "Linear Algebra",
      "Probability & Statistics",
      "Convex Optimization",
      "Gradient Descent",
      "Conditioning & Convergence",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "PyTorch",
      "Model Training & Evaluation",
      "Feature Engineering",
      "Hyperparameter Tuning",
    ],
  },
  {
    category: "MLOps & Systems",
    items: [
      "Kafka",
      "MLflow",
      "Docker",
      "Linux",
      "Git/GitHub",,
    ],
  },
  {
    category: "Programming",
    items: [
      "Python",
      "C",
      "R",
      "SQL",
    ],
  },
  {
    category: "Data & Storage",
    items: [
      "PostgreSQL",
      "CSV / Parquet / JSON",
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      "Jupyter Notebook",
      "VS Code",
      "Linux Tooling",
      "pgAdmin4"
    ],
  },
]

// =======================
// Projects
// =======================

export type ProjectTag = "Optimization" | "MLOps" | "Systems" | "Time Series" | "ML"

export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: ProjectTag[]
  stack: string[]
  links: { label: string; href: string }[]
  year: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "core-gradients",
    title: "Core Gradients: Optimization from Scratch",
    description:
      "A from-scratch exploration of gradient-based optimization methods with mathematical intuition and convergence analysis.",
    longDescription:
      "This project studies gradient-based optimization from both mathematical and practical perspectives. I implemented Batch Gradient Descent, Stochastic Gradient Descent, and Mini-batch variants from scratch, analyzed Lipschitz smoothness, conditioning, and convergence behavior, and studied how learning rates and data geometry affect optimization in practice. The goal is to connect convex optimization theory with real ML training dynamics.",
    tags: ["Optimization", "ML"],
    stack: ["Python", "NumPy", "PyTorch", "Matplotlib"],
    links: [
      { label: "GitHub", href: "https://github.com/chanduchowdary8978/Convex-Optimization-Math-Essentials-for-Linear-Models" },
    ],
    year: "2026",
    featured: true,
  },
    {
    slug: "thermal-throttling-prediction",
    title: "Performance-Aware Thermal Throttling Prediction",
    description:
      "A machine learning system to predict thermal throttling events using system telemetry data.",
    longDescription:
      "This project formulates thermal throttling prediction as both a classification and regression problem using system telemetry data. I performed feature engineering and time-aligned preprocessing, built models to predict throttling events, and developed a regression model to estimate future CPU temperature at the predicted event time, focusing on stability and reliability.",
    tags: ["Systems", "ML"],
    stack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    links: [
      { label: "GitHub", href: "https://github.com/chanduchowdary8978/Performance-Aware-Thermal-Throttling-Prediction-using-System-Telemetry" },
    ],
    year: "2025",
    featured: true,
  },
  {
    slug: "isro-lstm-forecasting",
    title: "Time-Series Forecasting with LSTM (ISRO Internship)",
    description:
      "LSTM-based time-series forecasting on real operational weather data with an end-to-end training and evaluation pipeline.",
    longDescription:
      "During my internship at ISRO SDSC SHAR, I developed LSTM-based time-series forecasting models using real operational weather data. I built an end-to-end training and evaluation pipeline, analyzed error patterns, stability, and generalization behavior, and worked with constrained real-world datasets under practical deployment considerations.",
    tags: ["Time Series", "ML"],
    stack: ["Python", "PyTorch", "NumPy", "Pandas"],
    links: [
      { label: "GitHub", href: "https://github.com/chanduchowdary8978/LSTM-Weather-Prediction" },
    ],
    year: "2024",
    featured: false,
  },

  {
    slug: "hyperparameter-optimization-tool",
    title: "Hyperparameter Optimization Tool",
    description:
      "A GUI-based tool to explore grid and random search strategies for model hyperparameter tuning.",
    longDescription:
      "I built a Streamlit-based tool that allows users to upload datasets, select models, and perform hyperparameter tuning using grid search and random search. The project explores the limitations of exhaustive search and shows how approximate ranges and search strategies affect efficiency and performance.",
    tags: ["ML"],
    stack: ["Python", "Streamlit", "scikit-learn"],
    links: [
      { label: "GitHub", href: "https://github.com/chanduchowdary8978/HyperParameter-Optimisation" },
    ],
    year: "2024",
    featured: false,
  },
  {
    slug: "titanic-survival-prediction",
    title: "Titanic Survival Prediction",
    description:
      "A classic tabular ML project focusing on feature engineering and model comparison.",
    longDescription:
      "This project focuses on feature engineering and preprocessing for tabular classification. I compared multiple classification models and evaluated their performance, achieving the best accuracy of 0.825 using ensemble-based methods.",
    tags: ["ML"],
    stack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    links: [
      { label: "GitHub", href: "https://github.com/chanduchowdary8978/Titanic-Survival-Prediction" },
    ],
    year: "2023",
    featured: false,
  },
]

// =======================
// Blog / Notes
// =======================

export const blogPosts = [
  {
    title: "Core Gradients: Batch Gradient Descent",
    excerpt:
      "Understanding batch gradient descent from a geometric and optimization perspective, including smoothness and convergence behavior.",
    date: "Feb 2026",
    readTime: "8 min",
    tag: "Optimization",
  },
  {
    title: "Learning Rates, Lipschitz Constants, and Convergence",
    excerpt:
      "Why step size matters, how smoothness controls convergence, and what goes wrong with bad conditioning.",
    date: "Feb 2026",
    readTime: "10 min",
    tag: "Optimization",
  },
]

// =======================
// Roadmap / Ongoing Work
// =======================

export const roadmapItems = [
  {
    status: "in-progress" as const,
    title: "Core Gradients & Optimization Foundations",
    description: "Studied and implemented gradient-based methods, convergence, and conditioning behavior.",
    date: "2025-2026",
  },
  {
    status: "in-progress" as const,
    title: "MLOps Architecture",
    description: "Building an end-to-end pipeline for data ingestion, training, evaluation, and tracking.",
    date: "2025-2026",
  },

]