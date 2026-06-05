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
      "Geometry based Optimisation",
      "Gradient based Optimisation",
      "Conditioning & Convergence",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "PyTorch",
      "PySpark",
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
      "Git/GitHub",
    ],
  },
  {
    category: "Programming",
    items: [
      "Python",
      "C",
      "C++",
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
      "pgAdmin4",
      "SHAP Analysis"
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
    slug: "cardiovascular-risk-decision-system",
    title: "Uncertainty-Aware Cardiovascular Risk Decision System",
    description:
      "An end-to-end ML pipeline for cardiovascular disease risk prediction with calibration, uncertainty estimation, and cost-sensitive decision making.",
    longDescription:
      "This project builds an end-to-end machine learning pipeline to predict cardiovascular disease risk and convert predictions into actionable decisions. The focus is not only on model performance, but also on reliability, uncertainty, and decision-making under asymmetric risk.\n\nIn clinical settings, standard binary classification is not sufficient: missing a high-risk patient is more costly than a false alarm, predicted probabilities must be well-calibrated, and some predictions carry uncertainty and should not be acted on directly.\n\nThe system predicts probability of cardiovascular disease, calibrates probabilities using reliability curves and Brier score, estimates prediction uncertainty via bootstrap sampling, and optimizes decision thresholds using cost-sensitive analysis. Final outputs are mapped into risk tiers — High Risk (immediate referral), Moderate Risk (monitoring), Low Risk (routine check), and Uncertain (defer decision).\n\nModels used: Logistic Regression, KNN, Random Forest, Gradient Boosting, LightGBM. Best model: Gradient Boosting with AUC ~0.80. Feature engineering includes BMI, pulse pressure, and mean arterial pressure. SHAP values are used for global and local explainability. Robustness tested under missing data, measurement noise, and distribution shift.",
    tags: ["ML"],
    stack: ["Python", "NumPy", "pandas", "scikit-learn", "LightGBM", "SHAP", "Matplotlib", "Seaborn"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/chanduchowdary8978/Uncertainty-Aware-Cardiovascular-Risk-Decision-System",
      },
    ],
    year: "2026",
    featured: true,
  },


  {
    slug: "core-gradients",
    title: "Convex Optimization Math Essentials for Linear Models",
    description:
      "A from-scratch exploration of gradient-based optimization methods with mathematical intuition and convergence analysis.",
    longDescription:
      "This project studies gradient-based optimization from both mathematical and practical perspectives. I implemented Batch Gradient Descent, Stochastic Gradient Descent, and Mini-batch variants from scratch, analyzed Lipschitz smoothness, conditioning, and convergence behavior, and studied how learning rates and data geometry affect optimization in practice.",
    tags: ["Optimization", "ML"],
    stack: ["Python", "NumPy", "PyTorch", "Matplotlib"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/chanduchowdary8978/Convex-Optimization-Math-Essentials-for-Linear-Models",
      },
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
      "This project formulates thermal throttling prediction as both a classification and regression problem using system telemetry data.",
    tags: ["Systems", "ML"],
    stack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/chanduchowdary8978/Performance-Aware-Thermal-Throttling-Prediction-using-System-Telemetry",
      },
    ],
    year: "2025",
    featured: true,
  },
  {
    slug: "isro-lstm-forecasting",
    title: "Time-Series Forecasting with LSTM (ISRO Internship)",
    description:
      "LSTM-based time-series forecasting on real operational weather data.",
    longDescription:
      "Built LSTM-based models using real operational weather data with full training pipeline.",
    tags: ["Time Series", "ML"],
    stack: ["Python", "PyTorch", "NumPy", "Pandas"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/chanduchowdary8978/LSTM-Weather-Prediction",
      },
    ],
    year: "2024",
    featured: false,
  },
  {
    slug: "hyperparameter-optimization-tool",
    title: "Hyperparameter Optimization Tool",
    description:
      "A tool to explore grid and random search strategies for tuning.",
    longDescription:
      "Streamlit-based tool for experimenting with hyperparameter tuning strategies.",
    tags: ["ML"],
    stack: ["Python", "Streamlit", "scikit-learn"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/chanduchowdary8978/HyperParameter-Optimisation",
      },
    ],
    year: "2024",
    featured: false,
  },
  {
    slug: "titanic-survival-prediction",
    title: "Titanic Survival Prediction",
    description:
      "Tabular ML project focusing on feature engineering and model comparison.",
    longDescription:
      "Compared multiple models and achieved strong performance using ensemble methods.",
    tags: ["ML"],
    stack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/chanduchowdary8978/Titanic-Survival-Prediction",
      },
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
    title: "Day 16 — L-BFGS: Learning Curvature Without Storing It",
    excerpt:
      "How L-BFGS approximates second-order curvature using only gradient history, enabling fast convergence without storing the full Hessian.",
    date: "Mar 2026",
    readTime: "8 min",
    tag: "Optimization",
    link: "https://www.linkedin.com/pulse/day-16-l-bfgs-learning-curvature-without-storing-chandu-chowdary-z4ulc/?trackingId=U6f8YjlgQASUgjOOjTJbFg%3D%3D",
  },
  {
    title: "Day 17 — Natural Gradient & K-FAC: Learning the Right Geometry",
    excerpt:
      "Why Euclidean gradient steps ignore the geometry of probability space, and how natural gradient and K-FAC fix this.",
    date: "Mar 2026",
    readTime: "10 min",
    tag: "Optimization",
    link: "https://www.linkedin.com/pulse/day-17-natural-gradient-k-fac-learning-right-geometry-chandu-chowdary-f8xwc/?trackingId=U6f8YjlgQASUgjOOjTJbFg%3D%3D",
  },
]

// =======================
// Roadmap
// =======================

type RoadmapItem = {
  status: "completed" | "in-progress" | "planned"
  title: string
  description: string
  date: string
  link?: string
}

export const roadmapItems: RoadmapItem[] = [
  {
    status: "in-progress",
    title: "Gradients & Optimization Foundations",
    description:
      "Studied and implemented gradient-based methods, convergence, and conditioning behavior.",
    date: "2025-2026",
    link: "https://www.linkedin.com/newsletters/learning-optimization-7428025316217995264/",
  },
  {
    status: "in-progress",
    title: "MLOps Architecture",
    description:
      "Building an end-to-end pipeline for data ingestion, training, evaluation, and tracking.",
    date: "2025-2026",
  },
]