// Category -> card color is fixed here, once, so every project (current
// and future) stays visually consistent automatically. Add a new tag to
// TAG_COLORS if you introduce a third category.
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
      "A PERN-stack platform that lets GIKI students pick up small errands and deliveries for each other on campus. Built the full flow end to end: request posting, matching, and status tracking, with an eye on making logistics on a closed campus genuinely easier.",
    stack: ["PostgreSQL", "Express JS", "React", "Node JS"],
  },
  {
    id: "jwt-auditor",
    name: "JWT AUDITOR",
    tag: "CYB",
    tagline: "A CLI that pokes at your tokens",
    about:
      "A Python command-line tool that audits JWT-based auth for common weaknesses: alg confusion, missing or reused jti claims, weak refresh-token rotation, and other patterns that quietly break session security. Built as a hands-on step toward hardware and application security work.",
    stack: ["Python", "Cryptography", "CLI tooling"],
  },
  {
    id: "riscv-emulator",
    name: "RV32I EMU",
    tag: "DEV",
    tagline: "A RISC-V core, in software",
    about:
      "An in-progress RISC-V emulator written in C, implementing the fetch-decode-execute cycle, all six RV32I instruction formats, memory, and CPU state from scratch. The long-term target is booting DOOM on it — a forcing function for getting the ISA exactly right.",
    stack: ["C", "Computer Architecture", "RV32I"],
  },
];

export const projects = rawProjects.map((p) => ({
  ...p,
  color: TAG_COLORS[p.tag] ?? "red",
}));

export const getProject = (id) => projects.find((p) => p.id === id);
