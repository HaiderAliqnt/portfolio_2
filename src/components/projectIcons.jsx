// Simple line-icon set for each project, matching the sidebar's visual
// language (stroke-based, currentColor). Add an entry here whenever a new
// project is added to src/data/projects.js.

function BoxIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...props}
    >
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9Z" />
      <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
    </svg>
  );
}

function ShieldKeyIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...props}
    >
      <path d="M12 3l7 3v5c0 4.5-2.9 8-7 10-4.1-2-7-5.5-7-10V6l7-3Z" />
      <circle cx="10.6" cy="12" r="1.7" />
      <path d="M12 12h3.5M14.2 12v1.6" />
    </svg>
  );
}

function ChipIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...props}
    >
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9.5 7V3.5M14.5 7V3.5M9.5 21v-3.5M14.5 21v-3.5M7 9.5H3.5M7 14.5H3.5M21 9.5h-3.5M21 14.5h-3.5" />
    </svg>
  );
}

export const PROJECT_ICONS = {
  gikgo: BoxIcon,
  "jwt-auditor": ShieldKeyIcon,
  "riscv-emulator": ChipIcon,
};

export function ProjectIcon({ id, className }) {
  const Icon = PROJECT_ICONS[id];
  if (!Icon) return null;
  return <Icon className={className} />;
}
