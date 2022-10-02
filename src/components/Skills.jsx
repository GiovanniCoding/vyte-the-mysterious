import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiKeras,
  SiTensorflow,
  SiPytorch,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiAmazonaws,
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiGithub,
  SiLinux,
  SiGoland,
  SiPostgresql,
  SiMongodb,
  SiAmazondynamodb,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiFirebase,
  SiSass,
  SiGnubash,
  SiMariadb,
  SiJupyter,
  SiSlack,
  SiMicrosoftteams,
} from 'react-icons/si';
import { RiGitlabFill } from 'react-icons/ri';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';

export const Skills = ({ SkillsRef }) => {
  return (
    <section ref={ SkillsRef } className='bg-primary text-tprimary py-10'>
      <div className='text-5xl pl-24 pb-8'>Skills</div>
      <div className="flex flex-col max-w-4xl mx-auto px-4 mt-2 gap-1">
        <div className="flex justify-between gap-4 my-4">
            <SiPython className="text-[4rem]" />
            <SiNumpy className="text-[4rem]" />
            <SiPandas className="text-[4rem]" />
            <SiTensorflow className="text-[4rem]" />
            <SiDocker className="text-[4rem]" />
            <SiAmazonaws className="text-[4rem]" />
            <SiGithub className="text-[4rem]" />
        </div>
        <div className="flex justify-between gap-4 my-4">
          <SiKeras className="text-[3rem]" />
          <SiPytorch className="text-[3rem]" />
          <SiJavascript className="text-[3rem]" />
          <SiScikitlearn className="text-[3rem]" />
          <SiGooglecloud className="text-[3rem]" />
          <SiKubernetes className="text-[3rem]" />
          <AiOutlineConsoleSql className="text-[3rem]" />
        </div>
        <div className="flex justify-between gap-4 my-4">
          <SiAmazondynamodb className="text-[2.5rem]" />
          <SiFastapi className="text-[2.5rem]" />
          <SiJupyter className="text-[2.5rem]" />
          <SiHtml5 className="text-[2.5rem]" />
          <RiGitlabFill className="text-[2.5rem]" />
          <SiPostgresql className="text-[2.5rem]" />
          <SiMongodb className="text-[2.5rem]" />
        </div>
        <div className="flex justify-between gap-4 my-4">
          <SiLinux className="text-[2rem]" />
          <SiDjango className="text-[2rem]" />
          <SiGoland className="text-[2rem]" />
          <SiReact className="text-[2rem]" />
          <SiFlask className="text-[2rem]" />
          <GrMysql className="text-[2rem]" />
          <SiTailwindcss className="text-[2rem]" />
        </div>
        <div className="flex justify-between gap-4 my-4">
          <SiNodedotjs className="text-[1.5rem]" />
          <SiSlack className="text-[1.5rem]" />
          <SiCss3 className="text-[1.5rem]" />
          <SiFirebase className="text-[1.5rem]" />
          <SiSass className="text-[1.5rem]" />
          <SiGnubash className="text-[1.5rem]" />
          <SiMariadb className="text-[1.5rem]" />
          {/* <SiMicrosoftteams className="text-[1.5rem]" /> */}
        </div>
      </div>
    </section>
  )
}
