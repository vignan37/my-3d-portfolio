
import "./styles/TechStack.css";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiAngular,
  SiReact,
  SiSpringboot,
  SiDotnet,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiJenkins,
  SiDocker,
  SiGitlab,
  SiLinux,
  SiJasmine,
  SiAnthropic,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";


type Skill = {
  name: string;
  icon?: IconType;
  color: string;
};

const groups = [
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Frontend & Backend",
    skills: [
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "RxJS", icon: SiReact, color: "#B7178C" },
      { name: "NgRx", color: "#BA2BD2" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Claude AI", icon: SiAnthropic, color: "#D97757" },
    ],
  },
  {
    title: "Deployment & Engineering",
    skills: [
      { name: "GitLab CI/CD", icon: SiGitlab, color: "#FC6D26" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Playwright", icon: FaJava, color: "#2EAD33" },
      { name: "Jasmine", icon: SiJasmine, color: "#8A4182" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="techstack" id="tech-stack">
      <h1 className="techstack-title">Skills & Technologies</h1>

      <div className="techstack-content">
        {groups.map((group) => (
          <div className="techstack-category" key={group.title}>
            <h3>{group.title}</h3>

            <div className="techstack-skills">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div className="techstack-skill" key={skill.name}>
                    {Icon ? (
                      <Icon
                        className="techstack-logo"
                        style={{ color: skill.color }}
                      />
                    ) : (
                      <span
                        className="techstack-logo text-logo"
                        style={{ color: skill.color }}
                      >
                        Ng
                      </span>
                    )}
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
