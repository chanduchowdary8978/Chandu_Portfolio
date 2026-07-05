// =======================
// Skills
// =======================

export const skills = [
  {
    category: "Machine Learning",
    items: ["PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "SHAP", "Matplotlib", "Seaborn"],
  },
  {
    category: "Deep Learning",
    items: ["Neural Networks", "CNNs", "LSTMs", "Training Pipelines", "Optuna", "Mixed Precision", "Gradient Clipping", "Learning Rate Scheduling"],
  },
  {
    category: "ML Systems",
    items: [
      "FastAPI",
      "Docker",
      "Distributed Training",
      "Model Deployment",
      "Inference Pipelines",
      "Git",
      "Linux",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "C++", "SQL"],
  },
  {
    category: "Mathematics",
    items: ["Linear Algebra", "Probability", "Statistics", "Optimization"],
  },
]

// =======================
// Projects
// =======================

export type ProjectTag = "Distributed Systems" | "Optimization" | "Systems" | "Time Series" | "ML"

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
    slug: "distributed-fraud-detection-localsgd",
    title: "Distributed Fraud Detection using LocalSGD",
    description:
      "A communication-efficient distributed fraud detection system trained with LocalSGD across simulated payment data centers, deployed as a real-time inference service.",
    longDescription:
      "Problem: Fraud detection models for payment systems are typically trained on centralized data, which doesn't reflect how real payment networks operate across geographically distributed data centers with non-IID transaction patterns and bandwidth constraints between sites.\n\nEngineering Solution: I built a distributed training framework using PyTorch LocalSGD across 5 simulated worker nodes with non-IID data partitioning, reducing communication rounds compared to fully synchronous SGD while preserving model quality. The trained model is served via a FastAPI inference endpoint, containerized with Docker, with monitoring dashboards to evaluate training behavior under realistic network conditions. Automatic Mixed Precision, gradient clipping, and learning-rate scheduling stabilize training under the distributed setting.\n\nTechnologies: Python, PyTorch, FastAPI, Docker.\n\nOutcome: 99.94% accuracy and 0.9906 ROC-AUC on a 6.36M-transaction dataset, with a 0.680 F1-score on the minority fraud class under realistic class imbalance.",
    tags: ["Distributed Systems", "ML"],
    stack: ["Python", "PyTorch", "FastAPI", "Docker"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/chanduchowdary8978/Distributed-Fraud-Detection-using-LocalSGD-PyTorch",
      },
    ],
    year: "2026",
    featured: true,
  },

  {
    slug: "cardiovascular-risk-decision-system",
    title: "Uncertainty-Aware Cardiovascular Risk Decision System",
    description:
      "An end-to-end ML pipeline for cardiovascular disease risk prediction with calibration, uncertainty estimation, and cost-sensitive decision making.",
    longDescription:
      "Problem: In clinical risk prediction, standard binary classification is insufficient — missing a high-risk patient is more costly than a false alarm, predicted probabilities must be well-calibrated, and some predictions carry enough uncertainty that they shouldn't be acted on directly.\n\nEngineering Solution: I built a pipeline that predicts cardiovascular disease probability, calibrates it using reliability curves and Brier score, estimates prediction uncertainty via bootstrap sampling, and optimizes decision thresholds through cost-sensitive analysis. Outputs are mapped into four risk tiers — High Risk (immediate referral), Moderate Risk (monitoring), Low Risk (routine check), and Uncertain (defer decision). SHAP values provide global and local explainability, and the system is tested for robustness under missing data, measurement noise, and distribution shift.\n\nTechnologies: Python, scikit-learn, LightGBM, SHAP.\n\nOutcome: Best model (Gradient Boosting) achieved AUC ~0.80, with calibrated probabilities and cost-aware thresholds suited to asymmetric clinical risk.",
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
    slug: "diabetes-risk-prediction",
    title: "Diabetes Risk Prediction",
    description:
      "A diabetes risk classification pipeline built on the BRFSS dataset, tuned for minority-class detection under real-world class imbalance.",
    longDescription:
      "Problem: Diabetes risk datasets such as BRFSS are heavily imbalanced, so models optimized for raw accuracy tend to miss the at-risk minority class that matters most for early intervention.\n\nEngineering Solution: I built a classification pipeline on BRFSS survey data with feature engineering for health and lifestyle indicators, hyperparameter tuning via Optuna, and evaluation centered on precision-recall AUC rather than accuracy to better reflect performance on the minority class.\n\nTechnologies: Python, XGBoost, Optuna, scikit-learn.\n\nOutcome: A tuned XGBoost model with PR-AUC as the primary metric, giving a more reliable signal for minority-class risk detection than accuracy-based evaluation.",
    tags: ["ML"],
    stack: ["Python", "XGBoost", "Optuna", "scikit-learn", "pandas"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/chanduchowdary8978/Diabetes-Risk-Prediction",
      },
    ],
    year: "2026",
    featured: false,
  },

  {
    slug: "core-gradients",
    title: "Convex Optimization Math Essentials for Linear Models",
    description:
      "A from-scratch exploration of gradient-based optimization methods with mathematical intuition and convergence analysis.",
    longDescription:
      "Problem: High-level ML libraries abstract away the optimization mechanics that determine whether and how fast a model converges.\n\nEngineering Solution: I implemented Batch Gradient Descent, Stochastic Gradient Descent, and Mini-batch GD from scratch, analyzed Lipschitz smoothness and conditioning, and studied how learning rates and data geometry affect convergence in practice.\n\nTechnologies: Python, NumPy, PyTorch.\n\nOutcome: 96.5% cross-validation accuracy on linear models, with convergence behavior visualized across optimizer configurations.",
    tags: ["Optimization", "ML"],
    stack: ["Python", "NumPy", "PyTorch", "Matplotlib"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/chanduchowdary8978/Convex-Optimization-Math-Essentials-for-Linear-Models",
      },
    ],
    year: "2026",
    featured: false,
  },

  {
    slug: "thermal-throttling-prediction",
    title: "Performance-Aware Thermal Throttling Prediction",
    description:
      "A machine learning system to predict thermal throttling events using system telemetry data.",
    longDescription:
      "Problem: CPU thermal throttling degrades performance unpredictably, and reacting to it after it happens is too late to prevent the slowdown.\n\nEngineering Solution: I formulated throttling prediction as both a classification and regression problem on hardware telemetry, engineering temporal features from sensor history and evaluating XGBoost models for early detection.\n\nTechnologies: Python, XGBoost, scikit-learn.\n\nOutcome: R² ≈ 0.355 and MAE ≈ 0.73°C, enabling proactive detection ahead of throttling events.",
    tags: ["Systems", "ML"],
    stack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/chanduchowdary8978/Performance-Aware-Thermal-Throttling-Prediction-using-System-Telemetry",
      },
    ],
    year: "2025",
    featured: false,
  },
  {
    slug: "isro-lstm-forecasting",
    title: "Time-Series Forecasting with LSTM (ISRO Internship)",
    description:
      "LSTM-based multivariate time-series forecasting on operational atmospheric telemetry, built during an internship at ISRO SDSC SHAR.",
    longDescription:
      "Problem: Atmospheric forecasting from multivariate sensor data requires modeling long-range temporal dependencies across multiple correlated weather variables, including cyclical ones like wind direction.\n\nEngineering Solution: I built an end-to-end LSTM forecasting pipeline on 420K+ time-series observations across 7 weather variables, with reusable preprocessing, feature engineering, and sequence-generation workflows, and circular encoding for wind direction.\n\nTechnologies: Python, PyTorch, NumPy, Pandas.\n\nOutcome: R² up to 0.9998 with sub-unit RMSE across most continuous variables, evaluated on a 70/20/10 train-validation-test split.",
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
]

// =======================
// Blog / Notes
// =======================

export const blogPosts = [
  {
    title: "Learning Optimization Newsletter",
    excerpt:
      "Technical articles exploring optimization algorithms, deep learning training dynamics, and machine learning systems from first principles.",
    date: "Ongoing",
    readTime: "26+ editions",
    tag: "Newsletter",
    link: "https://www.linkedin.com/newsletters/learning-optimization-7428025316217995264/",
  },
  {
    title: "Parallelism Series",
    excerpt:
      "A technical article explaining modern distributed training strategies and how large-scale deep learning systems are trained efficiently.",
    date: "2026",
    readTime: "Article",
    tag: "Distributed Systems",
    link: "https://www.linkedin.com/feed/update/urn:li:groupPost:961087-7474434016537145344/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD2fzJ8BY9C4Hht2zEQmXQqpMImcO8E4M_w",
  },
]

// =======================
// Research & Publications
// =======================

export type ResearchStatus = "Under Review" | "In Preparation" | "Under Research" | "Published"

export interface ResearchItem {
  title: string
  status: ResearchStatus
  secondaryStatus?: string
  description: string
}

export const researchItems: ResearchItem[] = [
  {
    title: "Communication-Efficient Distributed Learning using LocalSGD",
    status: "Under Review",
    secondaryStatus: "Submitted to ICSoftComp 2026",
    description:
      "Experimentation on communication-efficient distributed optimization, synchronization strategies, adaptive training, and scalable deep learning systems.",
  },
  {
    title: "Spatial Dispatch Networks",
    status: "In Preparation",
    description:
      "Research on mathematical modeling and optimization of large-scale spatial dispatch systems for ride-hailing platforms.",
  },
  {
    title: "Adaptive Plastic Neural Networks (APNN)",
    status: "Under Research",
    description:
      "Research exploring adaptive plasticity mechanisms for neural networks, dynamic parameter adaptation, and efficient continual learning strategies.",
  },
]