export const TAG_COLORS = {
  DEV: "red",
  CYB: "yellow",
};

const rawProjects = [
  {
    id: "gikgo",
    name: "GIK GO",
    tag: "DEV",
    tagline: "Campus delivery, built for GIKI",
    about:
      "A PERN-stack platform that lets GIKI students handle small errands and deliveries for each other on campus. Built the complete experience end to end, including request posting, task matching, and status tracking, making everyday campus logistics simpler and more accessible.",
    stack: ["PostgreSQL", "Express JS", "React", "Node JS"],
    link: "https://github.com/HaiderAliqnt/Delivery-Service",
  },
  {
    id: "jwt-auditor",
    name: "JWT AUDITOR",
    tag: "CYB",
    tagline: "A CLI that pokes at your tokens",
    about:
      "A Python command-line tool that audits JWT-based authentication implementations for common security weaknesses, including algorithm confusion, missing or reused jti claims, and insecure refresh-token rotation. Designed as a practical exploration of application security, cryptography, and authentication vulnerabilities.",
    stack: ["Python", "Cryptography", "CLI tooling"],
    link: "https://github.com/HaiderAliqnt/JWT_Auth",
  },
  {
    id: "riscv-emulator",
    name: "RV32I EMU",
    tag: "DEV",
    tagline: "A RISC-V core, in software",
    about:
      "A fully functional RISC-V emulator written from scratch in C, implementing the complete fetch-decode-execute cycle, all six RV32I instruction formats, memory management, and CPU state. Successfully runs DOOM, demonstrating the correctness and capabilities of the implemented instruction set. Built as a deep dive into computer architecture, instruction execution, and low-level systems programming.",
    stack: ["C", "Computer Architecture", "RV32I"],
    link: "https://github.com/HaiderAliqnt/RISC-V-EMULATOR",
  },
  {
    id: "llm-intrusion-detection",
    name: "LLM x IDS",
    tag: "CYB",
    tagline: "Can an LLM replace a firewall?",
    about:
      "A completed research collaboration investigating the effectiveness of Large Language Models in network intrusion detection. Evaluated prompting, Retrieval-Augmented Generation (RAG), and fine-tuned transformer classifiers against traditional machine learning baselines for attack severity classification. Explored model generalization to zero-day attacks, comparative detection performance, and the methodological challenges of applying LLMs to cybersecurity.",
    stack: ["Python", "LLMs", "RAG", "Network Security"],
    link: "https://arxiv.org/abs/2609.13511",
  },
];
export const projects = rawProjects.map((p) => ({
  ...p,
  color: TAG_COLORS[p.tag] ?? "red",
}));

export const getProject = (id) => projects.find((p) => p.id === id);
